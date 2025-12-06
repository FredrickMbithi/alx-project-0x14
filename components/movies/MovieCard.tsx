import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCalendar } from "@fortawesome/free-solid-svg-icons";
import type { MovieCardProps } from "@/interfaces";

const MovieCard = ({ movie, index = 0 }: MovieCardProps) => {
  return (
    <article
      className="group relative overflow-hidden rounded-xl bg-background-card card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-DEFAULT via-background-DEFAULT/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Rating Badge */}
        {movie.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-lg bg-background-DEFAULT/90 px-2 py-1 backdrop-blur-sm">
            <FontAwesomeIcon
              icon={faStar}
              className="h-3 w-3 text-primary"
            />
            <span className="text-xs font-semibold text-white">
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
            <p className="line-clamp-3 text-xs text-gray-400">
              {movie.description}
            </p>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-white line-clamp-1 transition-colors group-hover:text-primary">
          {movie.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
          <FontAwesomeIcon icon={faCalendar} className="h-3 w-3" />
          <span>{movie.year}</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
