import React from "react";
import ProgressBar from "./ProgressBar";

// ARC METER  (the signature element)
// Half-circle SVG gauge showing career score
function ArcMeter({ value }) {
  const W = 240, CX = 120, CY = 128, R = 100, SW = 14;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const arc = (cx, cy, r, startDeg, endDeg) => {
    const s = toRad(startDeg), e = toRad(endDeg);
    return `M ${cx + r * Math.cos(s)} ${cy + r * Math.sin(s)}
            A ${r} ${r} 0 0 1 ${cx + r * Math.cos(e)} ${cy + r * Math.sin(e)}`;
  };

  // Arc spans 180° → -180 to 0 (left to right across top)
  const startDeg = 180, endDeg = 0;
  const fillEnd = 180 - (value / 100) * 180; // progress from left

  return (
    <svg viewBox={`0 0 ${W} 134`} width="240" height="134" aria-label={`Career readiness: ${value} out of 100`}>
      {/* Track */}
      <path d={arc(CX, CY, R, startDeg, endDeg)} fill="none" stroke="#1e293b" strokeWidth={SW} strokeLinecap="round" />
      {/* Fill */}
      <path
        d={arc(CX, CY, R, startDeg, fillEnd)}
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth={SW}
        strokeLinecap="round"
        style={{ transition: "d 1s ease" }}
      />
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      {/* Score label */}
      <text x={CX} y={CY - 22} textAnchor="middle" fill="white" fontSize="40" fontWeight="800" fontFamily="system-ui, sans-serif">
        {value}
      </text>
      <text x={CX} y={CY - 4} textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="system-ui, sans-serif">
        out of 100
      </text>
      {/* End labels */}
      <text x="8"  y={CY + 20} fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">0</text>
      <text x={W - 16} y={CY + 20} fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">100</text>
    </svg>
  );
}

function CareerReadinessCard({ score, dsaScore, projectScore, strengths, improvements }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(99,102,241,0.12), transparent)",
        }}
      />

      <div className="relative flex flex-col lg:flex-row gap-8 items-start">

        {/* ── Left: arc + score label ── */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Career Readiness
          </p>
          <ArcMeter value={score} />
          <p className="text-sm text-slate-400 -mt-1">
            {score >= 80 ? "Placement ready 🎉" : score >= 60 ? "Getting there — keep going" : "Early stage — build the basics"}
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="hidden lg:block w-px self-stretch bg-slate-800" />

        {/* ── Right: breakdown + feedback ── */}
        <div className="flex-1 flex flex-col gap-6 justify-center">

          {/* Score breakdown */}
          <div className="space-y-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Score Breakdown</p>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">DSA Practice</span>
                  <span className="text-slate-400">{dsaScore}/100</span>
                </div>
                <ProgressBar value={dsaScore} color="#6366f1" />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Projects</span>
                  <span className="text-slate-400">{projectScore}/100</span>
                </div>
                <ProgressBar value={projectScore} color="#6366f1" />
              </div>
            </div>
          </div>

          {/* Strengths + improvements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">Strengths</p>
              <ul className="space-y-1.5">
                {strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">To Improve</p>
              <ul className="space-y-1.5">
                {improvements.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default CareerReadinessCard;