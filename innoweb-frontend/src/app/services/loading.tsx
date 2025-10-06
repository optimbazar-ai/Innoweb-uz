export default function ServicesLoading() {
  return (
    <div className="py-12 px-4 animate-pulse">
      {/* Header Skeleton */}
      <div className="text-center mb-12">
        <div className="h-12 w-80 bg-gray-200 rounded mx-auto mb-4"></div>
        <div className="h-6 w-96 bg-gray-200 rounded mx-auto"></div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border-2 border-gray-200 rounded-xl p-6">
            <div className="h-8 w-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-48 bg-gray-200 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Skeleton */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="h-64 bg-gray-200 rounded-2xl"></div>
      </div>
    </div>
  );
}
