import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import DSAPage from "./pages/DsaPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { USER, STATS } from "./data/mockData";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="dsa"      element={<DSAPage stats={STATS} />} />
        <Route path="projects" element={<ProjectsPage stats={STATS} />} />
        <Route path="profile"  element={<ProfilePage user={USER} stats={STATS} />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}