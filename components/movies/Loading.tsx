import type { LoadingProps } from "@/interfaces";

const MovieCardSkeleton = () => {
  return (
    <div className="rounded-xl bg-background-card overflow-hidden">
      {/* Image skeleton */}
      <div className="aspect-[2/3] skeleton" />
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 skeleton rounded" />
        <div className="h-3 w-1/2 skeleton rounded" />
      </div>
    </div>
  );
};

const Loading = ({ count = 8 }: LoadingProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, idx) => (
        <MovieCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export { MovieCardSkeleton };
export default Loading;
