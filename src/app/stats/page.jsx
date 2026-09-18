"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

const StatsPage = () => {
  const { entries } = useTimeline();

 
  const callCount = entries.filter((e) => e.type === "Call").length;
  const textCount = entries.filter((e) => e.type === "Text").length;
  const videoCount = entries.filter((e) => e.type === "Video").length;


  const data = [
    { name: "Text", value: textCount, color: "#9333ea" }, 
    { name: "Call", value: callCount, color: "#184f41" }, 
    { name: "Video", value: videoCount, color: "#22c55e" },
  ];

 
  const hasData = callCount + textCount + videoCount > 0;

  const chartData = hasData
    ? data
    : [
        { name: "Text", value: 1, color: "#e5e7eb" },
        { name: "Call", value: 1, color: "#d1d5db" },
        { name: "Video", value: 1, color: "#9ca3af" },
      ];

  return (
    <div className="bg-[#f8fafc] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
   
        <h1 className="text-3xl font-bold text-[#0f172a] mb-8">
          Friendship Analytics
        </h1>

       
        <div className="bg-white rounded-lg shadow-sm p-6">
          
          <p className="text-sm text-gray-500 mb-8">By Interaction Type</p>

         
          <div className="w-full h-[350px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                  cornerRadius={6}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#1e293b",
                    border: "none",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

    
          <div className="flex justify-center items-center gap-6 mt-6">
            {data.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
