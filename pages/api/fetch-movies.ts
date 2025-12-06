import type { NextApiRequest, NextApiResponse } from "next";
import type { MoviesResponse, ApiMovie, Movie } from "@/interfaces";

// Transform API movie to our Movie interface
const transformMovie = (apiMovie: ApiMovie): Movie => {
  return {
    id: apiMovie.id,
    title: apiMovie.titleText?.text || "Unknown Title",
    year: apiMovie.releaseYear?.year || 0,
    image: apiMovie.primaryImage?.url || "/placeholder-movie.jpg",
    description: apiMovie.primaryImage?.caption?.plainText || "",
    releaseDate: apiMovie.releaseDate
      ? `${apiMovie.releaseDate.year}-${apiMovie.releaseDate.month}-${apiMovie.releaseDate.day}`
      : undefined,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MoviesResponse | { error: string }>
) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { page = "1", year, genre, list = "top_rated_english_250" } = req.query;

  // Build API URL
  let apiUrl = `https://moviesdatabase.p.rapidapi.com/titles`;

  // Use list endpoint or search
  if (list) {
    apiUrl = `https://moviesdatabase.p.rapidapi.com/titles?list=${list}&page=${page}&limit=10`;
  }

  // Add year filter if provided
  if (year) {
    apiUrl += `&year=${year}`;
  }

  // Add genre filter if provided
  if (genre) {
    apiUrl += `&genre=${genre}`;
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY || "",
      "x-rapidapi-host": process.env.RAPIDAPI_HOST || "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    // Validate API key exists
    if (!process.env.RAPIDAPI_KEY) {
      console.error("RAPIDAPI_KEY is not configured");
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Error: ${response.status} - ${errorText}`);
      return res.status(response.status).json({ 
        error: `Failed to fetch movies: ${response.statusText}` 
      });
    }

    const data = await response.json();

    // Transform API response to our format
    const movies: Movie[] = (data.results || [])
      .filter((movie: ApiMovie) => movie.primaryImage?.url) // Only movies with images
      .map(transformMovie);

    const transformedResponse: MoviesResponse = {
      results: movies,
      page: parseInt(page as string, 10),
      totalPages: Math.ceil((data.entries || movies.length) / 10),
      totalResults: data.entries || movies.length,
    };

    return res.status(200).json(transformedResponse);
  } catch (error) {
    console.error("Fetch movies error:", error);
    
    // Return safe fallback
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : "Internal server error" 
    });
  }
}
