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
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(null);

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

  function handleEdit() {
    setForm({ ...user }); // copy current user into form
    setIsEditing(true);
  }

  function handleCancel() {
    setForm(null);        // discard any edits
    setIsEditing(false);
  }

  async function handleSave() {
    // Supabase update goes here later:
    const { error } =  await supabase.from("profiles").update(form).eq("id", user.id);
    if (error) {
      console.error(error);
      return;
    }

    setUser({
      ...user,
      ...form,
    });
    
    setIsEditing(false);
  }

  if (!user) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        Loading profile...
      </div>
    );
  }
const activeData = isEditing ? form : user;

return (
  <div className="px-8 py-7 space-y-5">

    {/* ── Identity card ── */}
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-xl font-black text-white shrink-0">
          {getInitials(activeData.name)}
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-bold text-white">{activeData.name}</p>
          <p className="text-sm text-slate-400">{activeData.target_role}</p>
        </div>
      </div>

      {/* Edit / Save / Cancel buttons */}
      {!isEditing ? (
        <button
          onClick={handleEdit}
          className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
        >
          Edit
        </button>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={handleCancel}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-colors"
          >
            Save
          </button>
        </div>
      )}
    </div>

    {/* ── Targets card ── */}
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-6">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Targets</p>

      <div className="grid grid-cols-2 gap-x-10 gap-y-6">

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Name</p>
          {isEditing ? (
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
            />
          ) : (
            <p className="text-sm font-medium text-slate-200">{user.name}</p>
          )}
        </div>

        {/* Target Role */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Target Role</p>
          {isEditing ? (
            <input
              value={form.target_role}
              onChange={(e) => setForm({ ...form, target_role: e.target.value })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
            />
          ) : (
            <p className="text-sm font-medium text-slate-200">{user.target_role}</p>
          )}
        </div>

        {/* Target Problems */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Target Problems</p>
          {isEditing ? (
            <input
              type="number"
              min="1"
              value={form.target_problems}
              onChange={(e) => setForm({ ...form, target_problems: parseInt(e.target.value, 10) })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
            />
          ) : (
            <p className="text-sm font-medium text-slate-200">{user.target_problems} problems</p>
          )}
        </div>

        {/* Target Projects */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Target Projects</p>
          {isEditing ? (
            <input
              type="number"
              min="1"
              value={form.target_projects}
              onChange={(e) => setForm({ ...form, target_projects: parseInt(e.target.value, 10) })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
            />
          ) : (
            <p className="text-sm font-medium text-slate-200">{user.target_projects} projects</p>
          )}
        </div>

      </div>
    </div>
  </div>
);
}