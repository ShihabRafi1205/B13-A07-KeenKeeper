"use client";

import React from "react";
import { FaPhone, FaCommentDots, FaVideo } from "react-icons/fa";
import toast from "react-hot-toast";
import { useTimeline } from "@/context/TimelineContext";

const QuickCheckIn = ({ friendName, friendId }) => {
  const { addEntry } = useTimeline();

  const handleInteraction = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      friendName,
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toISOString(),
    };

    addEntry(newEntry);

    const messages = {
      Call: `📞 Call with ${friendName} logged!`,
      Text: `💬 Text with ${friendName} logged!`,
      Video: `🎥 Video with ${friendName} logged!`,
    };
    toast.success(messages[type]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h3 className="text-sm font-semibold text-[#1e293b] mb-4">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => handleInteraction("Call")}
          className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-lg py-5 hover:bg-gray-50 hover:border-gray-300 transition"
        >
          <FaPhone className="text-lg text-gray-700" />
          <span className="text-xs font-medium text-gray-700">Call</span>
        </button>

        <button
          onClick={() => handleInteraction("Text")}
          className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-lg py-5 hover:bg-gray-50 hover:border-gray-300 transition"
        >
          <FaCommentDots className="text-lg text-gray-700" />
          <span className="text-xs font-medium text-gray-700">Text</span>
        </button>

        <button
          onClick={() => handleInteraction("Video")}
          className="flex flex-col items-center justify-center gap-2 border border-gray-200 rounded-lg py-5 hover:bg-gray-50 hover:border-gray-300 transition"
        >
          <FaVideo className="text-lg text-gray-700" />
          <span className="text-xs font-medium text-gray-700">Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
