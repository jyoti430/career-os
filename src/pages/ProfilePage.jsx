import React from "react";
import { USER, STATS } from "../data/mockData";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";


function ProfileField({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">{label}</p>
      <p className="text-sm font-medium text-slate-200">{value}</p>
    </div>
  );
}

function getInitials(name) {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

export default function ProfilePage() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const { data, error } = await supabase
        .from("profiles")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      setUser(data[0]);
    }

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        Loading profile...
      </div>
    );
  }
  return (
    <div className="px-8 py-7 space-y-5">
      {/* ── Identity card ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-xl font-black text-white shrink-0">
          {getInitials(user.name)}
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-bold text-white">{user.name}</p>
          <p className="text-sm text-slate-400">{user.target_role}</p>
        </div>
      </div>

      {/* ── Targets card ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Targets</p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
          <ProfileField label="Target Role"     value={user.target_role} />
          <ProfileField label="Target Problems" value={`${STATS.targetProblems} problems`} />
          <ProfileField label="Target Projects" value={`${STATS.targetProjects} projects`} />
        </div>
      </div>
    </div>
  );
}