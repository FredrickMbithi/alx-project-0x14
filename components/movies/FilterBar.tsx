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