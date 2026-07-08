export const USER = {
  name: "Jyoti",
  role: "SDE Aspirant",
  initials: "J",
  targetProblems: 450,
  targetProjects: 5,
};

export const STATS = {
  careerScore: 74,       // 0-100, derived: (dsaScore * 0.5) + (projectScore * 0.5)
  dsaScore: 68,          // 0-100, derived from problems solved vs target
  problemsSolved: 312,
  targetProblems: 450,
  currentStreak: 9,      // days
  projectScore: 80,      // 0-100, derived from completed vs target
  projectsDone: 4,
  targetProjects: 5,
};

export const STRENGTHS = [
  "Consistent DSA practice (9-day streak)",
  "Multiple projects completed",
];

export const IMPROVEMENTS = [
  "Deploy projects publicly",
  "Solve more Hard-level problems",
  "Add README to each project",
];

export const PROJECTS = [
  { name: "E-Commerce Platform", tech: "React · Node.js", deployed: true },
  { name: "DSA Visualizer",      tech: "TypeScript · D3", deployed: true },
  { name: "AI Resume Builder",   tech: "Python · FastAPI", deployed: false },
  { name: "Portfolio Site",      tech: "Next.js",          deployed: false },
];

export const MOCK_ACTIVITY = [
  { date: "Jun 23", solved: 5 },
  { date: "Jun 22", solved: 3 },
  { date: "Jun 21", solved: 7 },
  { date: "Jun 20", solved: 2 },
  { date: "Jun 19", solved: 6 },
  { date: "Jun 18", solved: 4 },
  { date: "Jun 17", solved: 8 },
];

export const MOCK_PROJECTS = [
  { name: "E-Commerce Platform", tech: "React · Node.js",  status: "Completed" },
  { name: "DSA Visualizer",      tech: "TypeScript · D3",  status: "Completed" },
  { name: "AI Resume Builder",   tech: "Python · FastAPI", status: "Building"  },
  { name: "Portfolio Site",      tech: "Next.js",          status: "Planned"   },
];

export const STATUS_STYLES = {
  Completed: { dot: "bg-emerald-400", text: "text-emerald-400", bg: "bg-emerald-500/10" },
  Building:  { dot: "bg-amber-400",   text: "text-amber-400",   bg: "bg-amber-500/10"  },
  Planned:   { dot: "bg-slate-600",   text: "text-slate-500",   bg: "bg-slate-800/60"  },
};