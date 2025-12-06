import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterOptions } from "@/interfaces";

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onReset: () => void;
}

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
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span className="hidden sm:inline">Filter by:</span>
      </div>

      <Select
        value={filters.year?.toString() || ""}
        onValueChange={(value) =>
          onFilterChange({ ...filters, year: value ? parseInt(value) : undefined })
        }
      >
        <SelectTrigger className="w-[120px] bg-secondary/50 border-border">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.genre || ""}
        onValueChange={(value) =>
          onFilterChange({ ...filters, genre: value || undefined })
        }
      >
        <SelectTrigger className="w-[140px] bg-secondary/50 border-border">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent>
          {genres.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-muted-foreground hover:text-primary"
        >
          Clear filters
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
