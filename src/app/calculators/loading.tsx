export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb skeleton */}
      <div className="mb-6 flex items-center gap-2">
        <div className="h-4 w-10 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-3 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-3 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Heading skeleton */}
      <div className="mb-8 space-y-3">
        <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-full max-w-xl animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-3/4 max-w-xl animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Ad slot skeleton */}
      <div className="mb-8 flex justify-center">
        <div className="h-20 w-full max-w-2xl animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800" />
      </div>

      {/* Calculator card skeletons */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="h-96 animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800" />
        <div className="h-96 animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800" />
      </div>
    </div>
  );
}
