import react from "react";
import ProgressBar from "../components/ProgressBar";
import { MOCK_PROJECTS, STATUS_STYLES } from "../data/mockData";

function StatChip({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-slate-800/60 rounded-xl px-6 py-4 gap-0.5 flex-1">
      <span className="text-2xl font-black text-indigo-400">{value}</span>
      <span className="text-[11px] text-slate-500 text-center leading-tight">{label}</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const s = STATUS_STYLES[status] ?? STATUS_STYLES.Planned;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
      {status}
    </span>
  );
}

function ProjectsPage({ stats, projects = MOCK_PROJECTS }) {
  const { projectsDone, targetProjects } = stats;
  const pct = Math.round((projectsDone / targetProjects) * 100);
  const remaining = targetProjects - projectsDone;

  return (
    <div className="px-8 py-7 space-y-5">

      {/* ── Hero stats ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Projects</p>
        <div className="flex gap-4">
          <StatChip label="Completed"   value={projectsDone} />
          <StatChip label="Target"      value={targetProjects} />
          <StatChip label="Completion"  value={`${pct}%`} />
        </div>
      </div>

      {/* ── Progress card ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Toward Target</p>
        <div className="flex justify-between text-xs text-slate-400">
          <span>{pct}% complete</span>
          <span>{remaining} project{remaining !== 1 ? "s" : ""} remaining</span>
        </div>
        <ProgressBar value={pct} height={10} />
        <p className="text-xs text-slate-600">Target: {targetProjects} projects · {remaining} to go</p>
      </div>

      {/* ── Projects list ── */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">All Projects</p>
        <div className="space-y-1">
          {projects.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-4 py-3.5 border-b border-slate-800 last:border-0"
            >
              <div className="flex-1 min-w-0 space-y-0.5">
                <p className="text-sm font-medium text-slate-200 truncate">{p.name}</p>
                <p className="text-[11px] text-slate-500">{p.tech}</p>
              </div>
              <StatusBadge status={p.status} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
export default ProjectsPage;