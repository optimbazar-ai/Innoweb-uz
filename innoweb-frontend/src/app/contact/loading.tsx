export default function ContactLoading() {
  return (
    <div className="py-12 px-4 animate-pulse">
      <div className="max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-4"></div>
          <div className="h-6 w-[32rem] bg-gray-200 rounded mx-auto"></div>
        </div>

        {/* Content Skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Skeleton */}
          <div className="space-y-4">
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Info Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
