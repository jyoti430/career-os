import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}