"use client";

import React, { useState } from "react";
import { FaPhone, FaCommentDots, FaVideo, FaHandshake } from "react-icons/fa";
import { useTimeline } from "@/context/TimelineContext";

const TimelinePage = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredEntries =
    filter === "all"
      ? entries
      : entries.filter((entry) => entry.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <FaPhone className="text-gray-600" />;
      case "Text":
        return <FaCommentDots className="text-gray-600" />;
      case "Video":
        return <FaVideo className="text-gray-600" />;
      case "Meetup":
        return <FaHandshake className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0f172a] mb-6">Timeline</h1>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-64 border border-gray-200 rounded-md px-3 py-2 text-sm bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#184f41]"
          >
            <option value="all">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>

        {filteredEntries.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            No timeline entries yet. Go to a friend's page and check in!
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-lg border border-gray-100 shadow-sm px-4 py-4 flex items-center gap-4 hover:shadow-md transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50">
                  {getIcon(entry.type)}
                </div>

                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#0f172a]">
                      {entry.type}
                    </span>{" "}
                    with {entry.friendName}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(entry.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
