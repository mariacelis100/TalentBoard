export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="bg-white shadow-md border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-stone-200 rounded-xl"></div>
              <div className="w-32 h-8 bg-stone-200 rounded"></div>
            </div>
            <div className="hidden lg:flex space-x-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-6 bg-stone-200 rounded"></div>
              ))}
            </div>
            <div className="hidden lg:flex space-x-4">
              <div className="w-24 h-10 bg-stone-200 rounded-lg"></div>
              <div className="w-28 h-10 bg-stone-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-96 h-16 bg-stone-200 rounded mx-auto mb-8"></div>
            <div className="w-80 h-8 bg-stone-200 rounded mx-auto mb-16"></div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-16 bg-stone-200 rounded-xl"></div>
                <div className="h-16 bg-stone-200 rounded-xl"></div>
                <div className="h-16 bg-stone-200 rounded-xl"></div>
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              <div className="w-40 h-14 bg-stone-200 rounded-xl"></div>
              <div className="w-48 h-14 bg-stone-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function JobCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 animate-pulse">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-stone-200 rounded-xl"></div>
          <div>
            <div className="w-48 h-6 bg-stone-200 rounded mb-2"></div>
            <div className="w-32 h-4 bg-stone-200 rounded"></div>
          </div>
        </div>
        <div className="w-10 h-10 bg-stone-200 rounded-full"></div>
      </div>

      <div className="space-y-4 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center">
            <div className="w-5 h-5 bg-stone-200 rounded mr-3"></div>
            <div className="w-32 h-4 bg-stone-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-20 h-6 bg-stone-200 rounded-full"></div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
        <div className="w-24 h-4 bg-stone-200 rounded"></div>
        <div className="w-32 h-8 bg-stone-200 rounded-lg"></div>
      </div>
    </div>
  );
}

export function FilterSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-8 animate-pulse">
      <div className="mb-8">
        <div className="w-40 h-6 bg-stone-200 rounded mb-2"></div>
        <div className="w-64 h-4 bg-stone-200 rounded"></div>
      </div>

      {[1, 2, 3, 4].map((section) => (
        <div key={section} className="mb-8">
          <div className="w-32 h-5 bg-stone-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-stone-200 rounded mr-3"></div>
                  <div className="w-32 h-4 bg-stone-200 rounded"></div>
                </div>
                <div className="w-12 h-5 bg-stone-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="w-full h-12 bg-stone-200 rounded-xl mt-8"></div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="text-center">
          <div className="w-20 h-10 bg-stone-200 rounded mx-auto mb-2"></div>
          <div className="w-32 h-4 bg-stone-200 rounded mx-auto"></div>
        </div>
      ))}
    </div>
  );
}
