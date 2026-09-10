import Image from "next/image";
import React from "react";

const FriendsCard = ({ friend }) => {
  return (
    <div className="w-full rounded-lg bg-white p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
     
      <div className="flex justify-center">
        <Image
          src={friend.picture}
          alt={friend.name || "Friend"}
          width={62}
          height={62}
          className="h-[62px] w-[62px] rounded-full object-cover"
        />
      </div>

      
      <h2 className="mt-3 text-base font-semibold text-[#1e293b] truncate w-full">
        {friend.name}
      </h2>

      
      <p className="mt-1 text-[11px] text-[#64748b]">
        {friend.days_since_contact}d ago
      </p>

      
      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {friend.tags?.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-[#dff5e8] px-2 py-1 text-[10px] font-medium text-[#26734d] uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

    
      <div className="mt-3">
        <span
          className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-medium text-white ${
            friend.status?.toLowerCase() === "overdue"
              ? "bg-red-400"
              : friend.status?.toLowerCase() === "on-track"
                ? "bg-green-400"
                : friend.status?.toLowerCase() === "almost due"
                  ? "bg-[#f2a93b]"
                  : "bg-gray-400" 
          }`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendsCard;
