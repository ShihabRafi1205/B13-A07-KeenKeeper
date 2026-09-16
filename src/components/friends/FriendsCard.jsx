import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCard = ({ friend }) => {
  return (
    <Link href={`/friends/${friend.id}`} >
      <div className="w-full rounded-lg bg-white p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="flex justify-center">
          <Image
            src={friend.picture}
            alt={friend.name || "Friend"}
            width={62}
            height={62}
            className="h-[62px] w-[62px] rounded-full object-cover"
          />
        </div>

        <h2 className="mt-3 text-base font-semibold text-[#1e293b] truncate">
          {friend.name}
        </h2>

        <p className="mt-1 text-[11px] text-[#64748b]">
          {friend.days_since_contact}d ago
        </p>

        <span className="mt-1 inline-block rounded-full bg-[#dff5e8] px-2 py-1 text-[10px] font-medium text-[#26734d]">
          WORK
        </span>

        <div className="mt-2">
          <span className="inline-block rounded-full bg-[#f2a93b] px-2.5 py-1 text-[10px] font-medium text-white">
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
