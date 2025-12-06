import type { Movie } from "@/interfaces";

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    year: 2024,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    rating: 8.8,
    genre: ["Sci-Fi", "Adventure"],
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: "2",
    title: "Oppenheimer",
    year: 2023,
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    rating: 8.5,
    genre: ["Drama", "History"],
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: "3",
    title: "Poor Things",
    year: 2023,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    rating: 8.0,
    genre: ["Comedy", "Drama"],
    description: "The incredible tale about the fantastical evolution of Bella Baxter.",
  },
  {
    id: "4",
    title: "The Batman",
    year: 2022,
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    rating: 7.8,
    genre: ["Action", "Crime"],
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.",
  },
  {
    id: "5",
    title: "Everything Everywhere All at Once",
    year: 2022,
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    rating: 8.0,
    genre: ["Action", "Sci-Fi"],
    description: "An aging Chinese immigrant is swept up in an insane adventure.",
  },
  {
    id: "6",
    title: "Killers of the Flower Moon",
    year: 2023,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    rating: 7.7,
    genre: ["Crime", "Drama"],
    description: "Members of the Osage tribe in the United States are murdered under mysterious circumstances.",
  },
  {
    id: "7",
    title: "Barbie",
    year: 2023,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop",
    rating: 7.0,
    genre: ["Comedy", "Fantasy"],
    description: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
  },
  {
    id: "8",
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    rating: 8.6,
    genre: ["Animation", "Action"],
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
  },
  {
    id: "9",
    title: "Blade Runner 2049",
    year: 2017,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    rating: 8.0,
    genre: ["Sci-Fi", "Drama"],
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
  },
  {
    id: "10",
    title: "Inception",
    year: 2010,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    rating: 8.8,
    genre: ["Sci-Fi", "Thriller"],
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
  },
];

export const getFilteredMovies = (filters: { year?: number; genre?: string }): Movie[] => {
  return mockMovies.filter((movie) => {
    if (filters.year && movie.year !== filters.year) return false;
    if (filters.genre && !movie.genre?.includes(filters.genre)) return false;
    return true;
  });
};

export const getPaginatedMovies = (
  page: number,
  perPage: number = 10,
  filters?: { year?: number; genre?: string }
) => {
  const filtered = filters ? getFilteredMovies(filters) : mockMovies;
  const start = (page - 1) * perPage;
  const results = filtered.slice(start, start + perPage);

  return {
    results,
    page,
    totalPages: Math.ceil(filtered.length / perPage),
    totalResults: filtered.length,
  };
};
