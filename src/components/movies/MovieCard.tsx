import { Star, Calendar } from "lucide-react";
import type { MovieCardProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const MovieCard = ({ movie, index = 0 }: MovieCardProps) => {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Rating Badge */}
        {movie.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-lg bg-background/90 px-2 py-1 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-semibold text-foreground">
              {movie.rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Hover Content */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          {movie.genre && movie.genre.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-1">
              {movie.genre.slice(0, 2).map((g) => (
                <span
                  key={g}
                  className="rounded-md bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {g}
                </span>
              ))}
            </div>
          )}
          {movie.description && (
            <p className="line-clamp-3 text-xs text-muted-foreground">
              {movie.description}
            </p>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-foreground line-clamp-1 transition-colors group-hover:text-primary">
          {movie.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{movie.year}</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
