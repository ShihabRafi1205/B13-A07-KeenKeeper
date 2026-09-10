import React from "react";
import FriendsCard from "@/components/friends/FriendsCard";

const Friends = async () => {
  const friendsData = await fetch("http://localhost:5000/friends");
  const friends = await friendsData.json();

  return (
    <div className="mb-8 bg-[#f8fafc]">
      <div className="max-w-[1000px] mx-auto px-4 py-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Your Friends</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friends.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
