import React from "react";
import { NAV_ITEMS } from "./Sidebar";

import { useLocation } from "react-router-dom";

const ROUTE_LABELS = {
  "/dashboard":          "Dashboard",
  "/dashboard/dsa":      "DSA Progress",
  "/dashboard/projects": "Projects",
  "/dashboard/profile":  "Profile",
};

export default function TopBar() {
  const { pathname } = useLocation();
  const label = ROUTE_LABELS[pathname] ?? "Dashboard";
  return (
    <header className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-base font-bold text-white">{label}</h1>
        <p className="text-xs text-slate-500">Tuesday, 23 June 2026</p>
      </div>
      <button className="text-xs bg-indigo-500 hover:bg-indigo-400 transition-colors text-white font-semibold px-4 py-1.5 rounded-lg">
        Log activity
      </button>
    </header>
  );
}

