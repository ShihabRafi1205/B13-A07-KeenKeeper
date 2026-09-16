export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-4">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="w-48 h-7 bg-gray-200 rounded mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto"></div>
              <div className="w-24 h-4 bg-gray-200 rounded mx-auto mt-3"></div>
              <div className="w-16 h-3 bg-gray-200 rounded mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
