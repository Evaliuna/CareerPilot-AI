import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  ShieldAlert,
  BarChart,
  Map,
  BookOpen,
  Calendar,
  FlaskConical,
  Briefcase,
  Compass,
  LineChart,
  Trophy,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'assessment', name: 'Assessment', icon: ShieldAlert },
  { id: 'skillIntel', name: 'Skill Intelligence', icon: BarChart },
  { id: 'roadmap', name: 'Curriculum Roadmap', icon: Map },
  { id: 'learningHub', name: 'Learning Hub', icon: BookOpen },
  { id: 'studyPlanner', name: 'Study Planner', icon: Calendar },
  { id: 'projectsLab', name: 'Portfolio Lab', icon: FlaskConical },
  { id: 'interview', name: 'Interview Center', icon: Briefcase },
  { id: 'opportunities', name: 'Opportunity Hub', icon: Compass },
  { id: 'analytics', name: 'Progress Analytics', icon: LineChart },
  { id: 'achievements', name: 'Achievements', icon: Trophy }
];

export default function Sidebar({
  activeTab,
  setActiveTab,
  currentRole,
  roleTitle,
  skillsText,
  onSkillsUpdate
}) {
  const [localSkills, setLocalSkills] = useState(skillsText);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep the local textarea in sync if skills are updated elsewhere (e.g. role switch)
  useEffect(() => {
    setLocalSkills(skillsText);
  }, [skillsText]);

  // Close the mobile drawer on Escape for keyboard users
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSkillsUpdate(localSkills);
  };

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar: visible only on small screens (see dashboard.css) */}
      <div className="mobile-topbar">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="app-sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="mobile-topbar-brand">
          <div className="sidebar-logo sidebar-logo-sm">C</div>
          <span className="sidebar-title">CareerPilot OS</span>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {mobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        id="app-sidebar"
        className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}
      >
        <div className="sidebar-header">
          <div className="sidebar-logo">C</div>
          <span className="sidebar-title">CareerPilot OS</span>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="sidebar-section-label">Navigation Workstation</div>
        <nav className="sidebar-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={14} aria-hidden="true" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-section-label">Workspace Config</div>
          <div className="skills-config-box">
            <label className="skills-config-target-label">
              <Sparkles size={12} className="text-gradient" aria-hidden="true" /> Target Track:
            </label>
            <span className="skills-config-role-value">
              {roleTitle}
            </span>

            <form onSubmit={handleSubmit}>
              <label htmlFor="sidebar-skills-input" className="skills-config-input-label">
                Your Current Skills:
              </label>
              <textarea
                id="sidebar-skills-input"
                className="skills-config-input"
                value={localSkills}
                onChange={(e) => setLocalSkills(e.target.value)}
                placeholder="e.g. HTML, CSS, JavaScript"
              />
              <button type="submit" className="skills-config-btn">
                Compile Custom OS
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}
