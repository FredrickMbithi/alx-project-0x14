import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/movies/MovieCard";
import Loading from "@/components/movies/Loading";
import FilterBar from "@/components/movies/FilterBar";
import Pagination from "@/components/movies/Pagination";
import type { FilterOptions, MoviesResponse } from "@/interfaces";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesData, setMoviesData] = useState<MoviesResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Build query string
      const params = new URLSearchParams();
      params.set("page", currentPage.toString());

      if (filters.year) {
        params.set("year", filters.year.toString());
      }
      if (filters.genre) {
        params.set("genre", filters.genre);
      }

      const response = await fetch(`/api/fetch-movies?${params.toString()}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch movies");
      }

      const data: MoviesResponse = await response.json();
      setMoviesData(data);
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
      setMoviesData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({});
    setCurrentPage(1);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="border-b border-gray-800/50 bg-background-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary glow-gold">
              <FontAwesomeIcon
                icon={faFilm}
                className="h-5 w-5 text-black"
              />
            </div>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Movies
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Browse our collection of films. Use filters to find movies by year
            or genre.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-800/50 py-4">
        <div className="container mx-auto px-4">
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Error State */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
              <p>{error}</p>
              <button
                onClick={fetchMovies}
                className="mt-2 text-sm text-red-300 underline hover:no-underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Loading State */}
          {isLoading ? (
            <Loading count={8} />
          ) : moviesData && moviesData.results.length > 0 ? (
            <>
              {/* Results Count */}
              <p className="mb-6 text-sm text-gray-400">
                Showing {moviesData.results.length} of {moviesData.totalResults}{" "}
                movies
              </p>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                {moviesData.results.map((movie, idx) => (
                  <MovieCard key={movie.id} movie={movie} index={idx} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={moviesData.totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <FontAwesomeIcon
                icon={faFilm}
                className="h-16 w-16 text-gray-600 mb-4"
              />
              <h3 className="font-display text-xl font-semibold text-white">
                No movies found
              </h3>
              <p className="mt-2 text-gray-400">
                Try adjusting your filters to find more results.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MoviesPage;
