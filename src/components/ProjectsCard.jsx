import ProgressBar from "./ProgressBar";
import { PROJECTS } from "../data/mockData";
import { BoxIcon, GridIcon } from "./icons";

function ProjectsCard({ done, target }) {
  const pct = Math.round((done / target) * 100);
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Projects</p>
          <p className="text-2xl font-black text-white mt-1">
            {done} <span className="text-base text-slate-500 font-normal">/ {target} completed</span>
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          <BoxIcon />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-slate-500">
          <span>{pct}% of target</span>
          <span>{target - done} more recommended</span>
        </div>
        <ProgressBar value={pct} height={8} />
      </div>

      <div className="space-y-2">
        {PROJECTS.map((p) => (
          <div key={p.name} className="flex items-center gap-3 py-2 border-b border-slate-800 last:border-0">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.deployed ? "bg-emerald-400" : "bg-slate-600"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-200 truncate">{p.name}</p>
              <p className="text-[10px] text-slate-500">{p.tech}</p>
            </div>
            <span className={`text-[10px] font-semibold shrink-0 ${p.deployed ? "text-emerald-500" : "text-slate-600"}`}>
              {p.deployed ? "Deployed" : "Local"}
            </span>
          </div>
        ))}
      </div>

      <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium text-left transition-colors">
        Add a project →
      </button>
    </div>
  );
}
export default ProjectsCard;