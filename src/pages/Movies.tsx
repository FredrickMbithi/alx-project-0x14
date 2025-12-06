import { useState, useEffect } from "react";
import { Film } from "lucide-react";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/movies/MovieCard";
import { MovieCardSkeletonGrid } from "@/components/movies/MovieCardSkeleton";
import FilterBar from "@/components/movies/FilterBar";
import Pagination from "@/components/movies/Pagination";
import { getPaginatedMovies } from "@/data/mockMovies";
import type { FilterOptions, MoviesResponse } from "@/interfaces";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesData, setMoviesData] = useState<MoviesResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({});

  const fetchMovies = async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    try {
      const data = getPaginatedMovies(currentPage, 8, filters);
      setMoviesData(data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
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
      <section className="border-b border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary glow-gold">
              <Film className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Movies
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Browse our collection of films. Use filters to find movies by year or genre.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border/50 py-4">
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
          {isLoading ? (
            <MovieCardSkeletonGrid count={8} />
          ) : moviesData && moviesData.results.length > 0 ? (
            <>
              {/* Results Count */}
              <p className="mb-6 text-sm text-muted-foreground">
                Showing {moviesData.results.length} of {moviesData.totalResults} movies
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
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Film className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                No movies found
              </h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your filters to find more results.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Movies;
