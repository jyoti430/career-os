import react from "react";
import ProgressBar from "./ProgressBar";
import { CodeIcon } from "./icons";

export function StatChip({ label, value, accent = "#6366f1" }) {
  return (
    <div className="flex flex-col items-center bg-slate-800/60 rounded-xl px-5 py-3 gap-0.5">
      <span className="text-xl font-black" style={{ color: accent }}>{value}</span>
      <span className="text-[11px] text-slate-500 text-center leading-tight">{label}</span>
    </div>
  );
}

function DSACard({ solved, target, streak }) {
  const pct = Math.round((solved / target) * 100);
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">DSA Progress</p>
          <p className="text-2xl font-black text-white mt-1">
            {solved} <span className="text-base text-slate-500 font-normal">/ {target} problems</span>
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          <CodeIcon />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-slate-500">
          <span>{pct}% of target</span>
          <span>{target - solved} to go</span>
        </div>
        <ProgressBar value={pct} height={8} />
      </div>

      <div className="flex gap-3">
        <StatChip label="Current streak" value={`${streak}d`} />
        <StatChip label="Problems solved" value={solved} />
      </div>

      <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium text-left transition-colors">
        Log today's problems →
      </button>
    </div>
  );
}
export default DSACard;