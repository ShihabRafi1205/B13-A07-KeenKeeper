import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-[100px] md:text-[140px] font-bold text-[#184f41] leading-none">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-4">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          Oops! The page you are looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

    
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#184f41] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#123a30] transition"
          >
            <FaHome /> Back to Home
          </Link>

          <Link
            href="/timeline"
            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            <FaSearch /> Go to Timeline
          </Link>
        </div>
      </div>
    </div>
  );
}
