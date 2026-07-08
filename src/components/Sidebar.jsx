import react from "react";
import { BoxIcon, GridIcon, CodeIcon, UserIcon } from "./icons";
import { USER } from "../data/mockData";
import { NavLink } from "react-router-dom";

export const NAV_ITEMS = [
  { path: "/dashboard",          label: "Dashboard",    icon: <GridIcon /> },
  { path: "/dashboard/dsa",      label: "DSA Progress", icon: <CodeIcon /> },
  { path: "/dashboard/projects", label: "Projects",     icon: <BoxIcon />  },
  { path: "/dashboard/profile",  label: "Profile",      icon: <UserIcon /> },
];

export default function Sidebar() {
  return (
    <aside className="w-52 shrink-0 flex flex-col border-r border-slate-800 bg-slate-950 py-5 px-3">
      {/* Logo */}
      <div className="px-3 mb-8 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-black tracking-tight">C</span>
        </div>
        <span className="font-bold text-[15px] tracking-tight text-white">
          Career<span className="text-indigo-400">OS</span>
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-0.5">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}  // exact match for index route only
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-500/15 text-indigo-300"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`
            }
          >
            <span className="w-4 text-center">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User chip */}
      <div className="mt-4 pt-4 border-t border-slate-800">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
            {USER.initials}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-200 truncate">{USER.name}</p>
            <p className="text-[10px] text-slate-500 truncate">{USER.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
