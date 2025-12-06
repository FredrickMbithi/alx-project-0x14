import type { LoadingProps } from "@/interfaces";

const MovieCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-card card-shadow">
      <div className="relative aspect-[2/3] bg-muted animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
      </div>
      <div className="p-4 space-y-2">
        <div className="h-5 w-3/4 rounded bg-muted animate-pulse" />
        <div className="h-3 w-1/3 rounded bg-muted animate-pulse" />
      </div>
    </div>
  );
};

const MovieCardSkeletonGrid = ({ count = 8 }: LoadingProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
};

export { MovieCardSkeleton, MovieCardSkeletonGrid };
