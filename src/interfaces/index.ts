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

export interface MovieCardProps {
  movie: Movie;
  index?: number;
}

export interface MoviesResponse {
  results: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export interface FilterOptions {
  year?: number;
  genre?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface LoadingProps {
  count?: number;
}

export interface ButtonVariant {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'hero' | 'gold';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}
