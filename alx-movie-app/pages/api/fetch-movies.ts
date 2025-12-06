import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (request: NextApiRequest, response: NextApiResponse)  {
  if (request.method === "POST") {
    const { year, page, genre } = request.body;
    const date = new Date();
    const resp = await fetch(
      `https://moviesdatabase.p.rapidapi.com/titles?year=${
        year || date.getFullYear()
      }&sort=year.decr&limit=12&page=${page}&${genre && `genre=${genre}`}`,
      {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
        },
      }
    );

    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      return response.status(resp.status).json({ error: errText || "Failed to fetch movies" });
    }

    const moviesResponse = await resp.json();
    const movies: MoviesProps[] = moviesResponse.results;

    return response.status(200).json({ movies });
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
};
import { MoviesProps } from "@/alx-movie-app/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler (request: NextApiRequest, response: NextApiResponse)  {

  if (request.method === "POST") {
    const { year, page, genre } = request.body;
    const date = new Date();
    const resp = await fetch(
      `https://moviesdatabase.p.rapidapi.com/titles?year=${
        year || date.getFullYear()
      }&sort=year.decr&limit=12&page=${page}&${genre && `genre=${genre}`}`,
      {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.MOVIE_API_KEY}`,
        },
      }
    );

    if (!resp.ok) throw new Error("Failed to fetch movies");

    const moviesResponse = await resp.json();
    const movies: MoviesProps[] = moviesResponse.results;

    return response.status(200).json({
      movies,
    });
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
};
