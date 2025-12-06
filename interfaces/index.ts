// Movie interface for API response
export interface Movie {
  id: string;
  title: string;
  year: number;
  image: string;
  rating?: number;
  genre?: string[];
  description?: string;
  releaseDate?: string;
}

// Props for MovieCard component
export interface MovieCardProps {
  movie: Movie;
  index?: number;
}

// API response structure from MoviesDatabase
export interface MoviesApiResponse {
  page: number;
  next: string | null;
  entries: number;
  results: ApiMovie[];
}

// Raw movie data from MoviesDatabase API
export interface ApiMovie {
  _id: string;
  id: string;
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
    };
  } | null;
  titleType: {
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
  };
  titleText: {
    text: string;
  };
  originalTitleText: {
    text: string;
  };
  releaseYear: {
    year: number;
    endYear: number | null;
  } | null;
  releaseDate: {
    day: number | null;
    month: number | null;
    year: number | null;
  } | null;
}

// Transformed response for frontend
export interface MoviesResponse {
  results: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

// Filter options for movies
export interface FilterOptions {
  year?: number;
  genre?: string;
}

// Pagination props
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Header component props
export interface HeaderProps {
  className?: string;
}

// Footer component props
export interface FooterProps {
  className?: string;
}

// Layout component props
export interface LayoutProps {
  children: React.ReactNode;
}

// Loading component props
export interface LoadingProps {
  count?: number;
}

// Filter bar props
export interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onReset: () => void;
}

// Button variants
export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
