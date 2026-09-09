import React from "react";

const FriendsBanner = () => {
  return (
    <section className="bg-[#f8fafc] px-4 pt-16 pb-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#1e293b]">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-5 text-[#64748b]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="mt-6 rounded-sm bg-[#245443] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4638]">
          + Add a Friend
        </button>
      </div>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex h-[108px] flex-col items-center justify-center rounded-md bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-[#245443]">10</h2>
          <p className="mt-2 text-sm text-[#64748b]">Total Friends</p>
        </div>
        <div className="flex h-[108px] flex-col items-center justify-center rounded-md bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-[#245443]">3</h2>
          <p className="mt-2 text-sm text-[#64748b]">On Track</p>
        </div>
        <div className="flex h-[108px] flex-col items-center justify-center rounded-md bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-[#245443]">6</h2>
          <p className="mt-2 text-sm text-[#64748b]">Need Attention</p>
        </div>
        <div className="flex h-[108px] flex-col items-center justify-center rounded-md bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-[#245443]">12</h2>
          <p className="mt-2 text-sm text-[#64748b]">Interactions This Month</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-4xl border-b border-slate-200"></div>
    </section>
  );
};

export default FriendsBanner;
