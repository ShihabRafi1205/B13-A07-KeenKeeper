import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaPhone,
  FaCommentDots,
  FaVideo,
  FaClock,
  FaArchive,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";
import QuickCheckIn from "@/components/friends/QuickCheckIn";


const getFriend = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/friends/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();

  
    if (!data || !data.id) return null;

    return data;
  } catch (error) {
    console.error("Failed to fetch friend:", error);
    return null;
  }
};

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  const friend = await getFriend(id);


  if (!friend) {
    notFound();
  }

  const statusColors = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-green-500 text-white",
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-5"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover mx-auto"
              />

              <h2 className="mt-3 text-lg font-bold text-[#1e293b]">
                {friend.name}
              </h2>

          
              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase ${
                  statusColors[friend.status] || "bg-gray-400 text-white"
                }`}
              >
                {friend.status}
              </span>

     
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {friend.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#dff5e8] px-2 py-1 text-[10px] font-medium text-[#26734d] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

       
              <p className="mt-1 text-[11px] text-gray-400">
                Preferred: {friend.email}
              </p>
            </div>

        
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition">
                <FaClock className="text-gray-500" /> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition">
                <FaArchive className="text-gray-500" /> Archive
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition">
                <FaTrash className="text-red-500" /> Delete
              </button>
            </div>
          </div>

       
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-5 text-center">
                <h3 className="text-2xl font-bold text-[#1e293b]">
                  {friend.days_since_contact}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5 text-center">
                <h3 className="text-2xl font-bold text-[#1e293b]">
                  {friend.goal}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5 text-center">
                <h3 className="text-2xl font-bold text-[#1e293b]">
                  {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Next Due</p>
              </div>
            </div>

         
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#1e293b]">
                  Relationship Goal
                </h3>
                <button className="text-xs border border-gray-200 rounded px-3 py-1 hover:bg-gray-50 transition">
                  Edit
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Connect every{" "}
                <span className="font-bold text-[#1e293b]">
                  {friend.goal} days
                </span>
              </p>
            </div>

       
            <QuickCheckIn friendName={friend.name} friendId={friend.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
