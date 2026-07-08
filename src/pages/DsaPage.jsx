import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import { MOCK_ACTIVITY } from "../data/mockData";

export function StatChip({ label, value, accent = "#6366f1" }) {
  return (
    <div className="flex flex-col items-center bg-slate-800/60 rounded-xl px-5 py-3 gap-0.5">
      <span className="text-xl font-black" style={{ color: accent }}>{value}</span>
      <span className="text-[11px] text-slate-500 text-center leading-tight">{label}</span>
    </div>
  );
}

export default function DSAProgressPage({ stats }) {
  const { targetProblems, currentStreak } = stats;

  const [activity, setActivity] = useState([
    { date: "Jun 23", solved: 5 },
    { date: "Jun 22", solved: 3 },
    { date: "Jun 21", solved: 7 },
    { date: "Jun 20", solved: 2 },
    { date: "Jun 19", solved: 6 },
    { date: "Jun 18", solved: 4 },
    { date: "Jun 17", solved: 8 },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ date: "", solved: "" });

  const problemsSolved = activity.reduce((sum, e) => sum + e.solved, 0);
  const pct = Math.min(100, Math.round((problemsSolved / targetProblems) * 100));
  const remaining = Math.max(0, targetProblems - problemsSolved);

  function handleAdd() {
    const count = parseInt(form.solved, 10);
    if (!form.date || isNaN(count) || count < 1) return;
    const formattedDate = new Date(form.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    setActivity([{ date: formattedDate, solved: count }, ...activity]);
    setForm({ date: "", solved: "" });
    setShowModal(false);
  }

  return (
    <div className="px-8 py-7 space-y-5">

      {/* ── Hero stats ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">DSA Progress</p>
        <div className="flex gap-4">
          <StatChip label="Problems Solved"  value={problemsSolved} />
          <StatChip label="Target Problems"  value={targetProblems} />
          <StatChip label="Current Streak"   value={`${currentStreak}d`} />
        </div>
      </div>

      {/* ── Progress card ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Toward Target</p>
        <div className="flex justify-between text-xs text-slate-400">
          <span>{pct}% complete</span>
          <span>{remaining} problems remaining</span>
        </div>
        <ProgressBar value={pct} height={10} />
        <p className="text-xs text-slate-600">
          Target: {targetProblems} problems · {remaining} to go
        </p>
      </div>

      {/* ── Activity log ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Recent Activity</p>
          <button
            onClick={() => setShowModal(true)}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            + Add Activity
          </button>
        </div>
        <div className="space-y-1">
          {activity.map((entry, i) => (
            <div
              key={entry.date}
              className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0"
            >
              <span className="text-sm text-slate-300">{entry.date}</span>
              <span className="text-sm text-slate-400">
                Solved <span className="text-indigo-400 font-semibold">{entry.solved}</span> problems
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* ── Add Activity modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-80 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5 shadow-xl">
            <p className="text-sm font-bold text-white">Log Activity</p>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Problems Solved</label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 5"
                  value={form.solved}
                  onChange={(e) => setForm({ ...form, solved: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={() => { setShowModal(false); setForm({ date: "", solved: "" }); }}
                className="flex-1 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
    
  );
}