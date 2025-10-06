export default function PortfolioLoading() {
  return (
    <div className="py-12 px-4">
      {/* Header Skeleton */}
      <div className="text-center mb-12 animate-pulse">
        <div className="h-12 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
        <div className="h-6 w-96 bg-gray-200 rounded mx-auto"></div>
      </div>

      {/* Filter Skeleton */}
      <div className="flex justify-center gap-3 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"></div>
        ))}
      </div>

      {/* Grid Skeleton */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">
            <div className="h-56 bg-gray-200"></div>
            <div className="p-6 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="flex gap-2 mt-4">
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
