import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faStar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/movies/MovieCard";
import Button from "@/components/ui/Button";
import type { GetServerSideProps } from "next";
import type { Movie, MoviesResponse } from "@/interfaces";

interface HomePageProps {
  featuredMovies: Movie[];
  trendingMovies: Movie[];
  error?: string;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    // Fetch movies from our API route
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/fetch-movies?page=1&list=top_rated_english_250`);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data: MoviesResponse = await response.json();

    return {
      props: {
        featuredMovies: data.results.slice(0, 4),
        trendingMovies: data.results.slice(4, 8),
      },
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    
    // Return fallback data on error
    return {
      props: {
        featuredMovies: [],
        trendingMovies: [],
        error: "Failed to load movies",
      },
    };
  }
};

const Home = ({ featuredMovies, trendingMovies, error }: HomePageProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-DEFAULT via-background-DEFAULT to-background-card" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-yellow-500/20 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                <FontAwesomeIcon icon={faChartLine} className="h-4 w-4" />
                <span>Discover trending films</span>
              </div>

              <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Find Your Next
                <br />
                <span className="text-gradient-gold">Cinematic</span>
                <br />
                Experience
              </h1>

              <p className="max-w-md text-lg text-gray-400">
                Explore thousands of movies, filter by genre and year, and
                discover hidden gems that match your taste.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/movies">
                  <Button variant="primary" size="lg" className="gap-2">
                    Explore Movies
                    <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="gap-2">
                  <FontAwesomeIcon icon={faPlay} className="h-4 w-4" />
                  Watch Trailer
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-display text-3xl font-bold text-white">
                    10K+
                  </div>
                  <div className="text-sm text-gray-400">Movies</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">
                    50+
                  </div>
                  <div className="text-sm text-gray-400">Genres</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">
                    4.9
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-3 w-3 text-primary"
                    />
                    Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Cards */}
            <div className="relative hidden lg:block">
              {featuredMovies.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {featuredMovies.map((movie, idx) => (
                    <div
                      key={movie.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${300 + idx * 150}ms` }}
                    >
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-20">
                  <p>Unable to load featured movies</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-background-card/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Trending Now
              </h2>
              <p className="mt-2 text-gray-400">
                Most popular movies this week
              </p>
            </div>
            <Link
              href="/movies"
              className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
            >
              View All
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </Link>
          </div>

          {trendingMovies.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {trendingMovies.map((movie, idx) => (
                <MovieCard key={movie.id} movie={movie} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>Unable to load trending movies</p>
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link href="/movies">
              <Button variant="outline" className="gap-2">
                View All Movies
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-yellow-500/20 p-8 sm:p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to Explore?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our complete collection of movies. Filter by year, genre,
              and discover films that match your preferences.
            </p>
            <Link href="/movies">
              <Button variant="primary" size="lg" className="gap-2">
                Start Browsing
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
