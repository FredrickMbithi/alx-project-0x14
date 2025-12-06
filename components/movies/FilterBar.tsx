import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import type { FilterBarProps } from "@/interfaces";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const years = Array.from({ length: 30 }, (_, i) => 2024 - i);

const FilterBar = ({ filters, onFilterChange, onReset }: FilterBarProps) => {
  const hasFilters = filters.year || filters.genre;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <FontAwesomeIcon icon={faFilter} className="h-4 w-4" />
        <span className="hidden sm:inline">Filter by:</span>
      </div>

      {/* Year Select */}
      <select
        value={filters.year || ""}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            year: e.target.value ? parseInt(e.target.value) : undefined,
          })
        }
        className="h-10 px-3 rounded-lg bg-background-secondary border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* Genre Select */}
      <select
        value={filters.genre || ""}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            genre: e.target.value || undefined,
          })
        }
        className="h-10 px-3 rounded-lg bg-background-secondary border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      >
        <option value="">Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Clear Filters Button */}
      {hasFilters && (
        <button
          onClick={onReset}
          className="flex items-center gap-2 h-10 px-3 text-sm text-gray-400 hover:text-primary transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} className="h-3 w-3" />
          Clear filters
        </button>
      )}
    </div>
  );
};

export default FilterBar;
