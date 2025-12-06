import { ArrowRight, Play, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import MovieCard from "@/components/movies/MovieCard";
import { mockMovies } from "@/data/mockMovies";

const Index = () => {
  const featuredMovies = mockMovies.slice(0, 4);
  const trendingMovies = mockMovies.slice(4, 8);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-8 opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                <TrendingUp className="h-4 w-4" />
                <span>Discover trending films</span>
              </div>

              <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Find Your Next
                <br />
                <span className="text-gradient-gold">Cinematic</span>
                <br />
                Experience
              </h1>

              <p className="max-w-md text-lg text-muted-foreground">
                Explore thousands of movies, filter by genre and year, 
                and discover hidden gems that match your taste.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/movies">
                  <Button variant="hero" size="lg" className="gap-2">
                    Explore Movies
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="gap-2">
                  <Play className="h-4 w-4" />
                  Watch Trailer
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-display text-3xl font-bold text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Movies</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Genres</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-foreground">4.9</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Cards */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {featuredMovies.map((movie, idx) => (
                  <div
                    key={movie.id}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${300 + idx * 150}ms` }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Trending Now
              </h2>
              <p className="mt-2 text-muted-foreground">
                The most popular films this week
              </p>
            </div>
            <Link to="/movies">
              <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {trendingMovies.map((movie, idx) => (
              <MovieCard key={movie.id} movie={movie} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Ready to explore?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of movie enthusiasts discovering their next favorite film every day.
              </p>
              <div className="mt-8">
                <Link to="/movies">
                  <Button variant="gold" size="lg" className="gap-2">
                    Start Exploring
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
