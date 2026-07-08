import React from 'react'
import { useState } from "react";
import {USER, STATS, STRENGTHS, IMPROVEMENTS } from "../data/mockData";
import {NAV_ITEMS} from "../components/Sidebar";
import CareerReadinessCard from "../components/CareerReadinessCard";
import ProjectsCard from "../components/ProjectsCard";
import DSACard from "../components/DSACard";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import ProfilePage from './ProfilePage';
import DSAProgressPage from './DsaPage';
import ProjectsPage from './ProjectsPage';
import Layout from "../components/Layout";

// PLACEHOLDER VIEW (non-dashboard pages)

function PlaceholderView({ label }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center space-y-2">
        <p className="text-4xl">🚧</p>
        <p className="text-sm font-semibold text-slate-300">{label}</p>
        <p className="text-xs text-slate-600">This page is on the roadmap</p>
      </div>
    </div>
  );
}

// DASHBOARD VIEW

function DashboardView() {
  return (
    <div className="px-8 py-7 space-y-5">
      <CareerReadinessCard
        score={STATS.careerScore}
        dsaScore={STATS.dsaScore}
        projectScore={STATS.projectScore}
        strengths={STRENGTHS}
        improvements={IMPROVEMENTS}
      />
      <div className="grid grid-cols-2 gap-5">
        <DSACard
          solved={STATS.problemsSolved}
          target={STATS.targetProblems}
          streak={STATS.currentStreak}
        />
        <ProjectsCard
          done={STATS.projectsDone}
          target={STATS.targetProjects}
        />
      </div>
    </div>
  );
}


// ROOT COMPONENT

export default function DashboardPage() {
  return <DashboardView />;
}
