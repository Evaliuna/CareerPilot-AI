import React, { useState, useEffect, useMemo } from 'react';
import { Sun, Moon } from 'lucide-react';
import { generateCareerAnalysis } from './services/localEngine.js';
import { CAREER_ROLES } from './services/dataStore.js';
import Sidebar from './components/Sidebar.jsx';
import LandingPage from './components/LandingPage.jsx';

// Pages
import Dashboard from './pages/Dashboard.jsx';
import CareerAssessment from './pages/CareerAssessment.jsx';
import SkillIntelligence from './pages/SkillIntelligence.jsx';
import LearningRoadmap from './pages/LearningRoadmap.jsx';
import LearningHub from './pages/LearningHub.jsx';
import StudyPlanner from './pages/StudyPlanner.jsx';
import PortfolioLab from './pages/PortfolioLab.jsx';
import InterviewCenter from './pages/InterviewCenter.jsx';
import OpportunityHub from './pages/OpportunityHub.jsx';
import ProgressAnalytics from './pages/ProgressAnalytics.jsx';
import Achievements from './pages/Achievements.jsx';

import './styles/app.css';
import './styles/dashboard.css';
import './styles/variables.css';
import './styles/components.css';
import './styles/utilities.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('cp_theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  // Apply the theme to the document root so all CSS variables (see variables.css) update
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('cp_theme', theme);
    } catch (e) {
      // localStorage unavailable; theme will simply reset next visit
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // --- Active Streak: real, date-based tracking ---------------------------
  // Tracks consecutive CALENDAR DAYS the workspace has been opened, not how
  // many checklist items have ever been completed (the previous behavior).
  // Visiting again on the same day keeps the streak unchanged; visiting the
  // very next calendar day increments it by 1; skipping a day resets it to 1.
  const getLocalDateStr = (d) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const [streakData, setStreakData] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_streak_data');
      return stored ? JSON.parse(stored) : { lastActiveDate: null, currentStreak: 0 };
    } catch (e) {
      return { lastActiveDate: null, currentStreak: 0 };
    }
  });

  // Evaluate the streak once per app load (mount), against today's date.
  useEffect(() => {
    const today = new Date();
    const todayStr = getLocalDateStr(today);

    setStreakData(prev => {
      if (prev.lastActiveDate === todayStr) {
        // Already recorded today — no change.
        return prev;
      }

      let nextStreak = 1;
      if (prev.lastActiveDate) {
        const prevDate = new Date(`${prev.lastActiveDate}T00:00:00`);
        const todayMidnight = new Date(`${todayStr}T00:00:00`);
        const diffDays = Math.round((todayMidnight - prevDate) / 86400000);
        if (diffDays === 1) {
          // Consecutive day — extend the streak.
          nextStreak = prev.currentStreak + 1;
        }
        // diffDays > 1 (a day was skipped) or diffDays <= 0 (clock skew) both
        // fall through to nextStreak = 1, i.e. the streak restarts.
      }

      return { lastActiveDate: todayStr, currentStreak: nextStreak };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cp_streak_data', JSON.stringify(streakData));
    } catch (e) {
      // localStorage unavailable; streak will simply reset next visit
    }
  }, [streakData]);

  const [profile, setProfile] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_profile');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error("Error reading cp_profile:", e);
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState(() => {
    try {
      return localStorage.getItem('cp_active_tab') || 'dashboard';
    } catch (e) {
      return 'dashboard';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cp_active_tab', activeTab);
    } catch (e) {
      // localStorage unavailable; tab selection will simply reset next visit
    }
  }, [activeTab]);

  const [completedRoadmapItems, setCompletedRoadmapItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_completed_roadmap');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  const [completedStudyPlannerItems, setCompletedStudyPlannerItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_completed_study');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  const [projectStatuses, setProjectStatuses] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_project_statuses');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  // Sync to LocalStorage
  useEffect(() => {
    if (profile) {
      localStorage.setItem('cp_profile', JSON.stringify(profile));
    } else {
      localStorage.removeItem('cp_profile');
    }
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('cp_completed_roadmap', JSON.stringify(completedRoadmapItems));
  }, [completedRoadmapItems]);

  useEffect(() => {
    localStorage.setItem('cp_completed_study', JSON.stringify(completedStudyPlannerItems));
  }, [completedStudyPlannerItems]);

  useEffect(() => {
    localStorage.setItem('cp_project_statuses', JSON.stringify(projectStatuses));
  }, [projectStatuses]);

  // Launch workspace from landing page
  const handleLaunchWorkspace = (roleId, skills) => {
    setProfile({
      roleId,
      skillsText: skills,
      weeklyStudyHours: '15 hours/week'
    });
    setActiveTab('dashboard');
  };

  // Reset Profile
  const handleResetProfile = () => {
    if (window.confirm("Are you sure you want to reset your Workspace Profile? All completion progress will be saved, but you will return to the setup page.")) {
      setProfile(null);
    }
  };

  // Update skills text
  const handleUpdateSkills = (newSkillsText) => {
    setProfile(prev => ({
      ...prev,
      skillsText: newSkillsText
    }));
  };

  // Update weekly study hours goal (drives the Dashboard's "Weekly Study Goal" stat)
  const handleUpdateStudyHours = (newStudyHours) => {
    setProfile(prev => ({
      ...prev,
      weeklyStudyHours: newStudyHours
    }));
  };

  // Switch role path
  const handleSwitchRole = (newRoleId) => {
    setProfile(prev => ({
      ...prev,
      roleId: newRoleId
    }));
    setActiveTab('dashboard');
  };

  // Toggle roadmap item
  const handleToggleRoadmapItem = (itemId) => {
    setCompletedRoadmapItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Toggle study checklist item
  const handleToggleStudyPlannerItem = (itemId) => {
    setCompletedStudyPlannerItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Update project status selection
  const handleUpdateProjectStatus = (projectId, status) => {
    setProjectStatuses(prev => ({
      ...prev,
      [projectId]: status
    }));
  };

  // If no profile exists, show Landing Setup configuration page
  if (!profile) {
    return <LandingPage onLaunchWorkspace={handleLaunchWorkspace} theme={theme} onToggleTheme={toggleTheme} />;
  }

  const activeRoleData = CAREER_ROLES[profile.roleId] || CAREER_ROLES.frontend;

  return (
    <AppWorkspace
      profile={profile}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      activeRoleData={activeRoleData}
      completedRoadmapItems={completedRoadmapItems}
      completedStudyPlannerItems={completedStudyPlannerItems}
      projectStatuses={projectStatuses}
      onUpdateSkills={handleUpdateSkills}
      onUpdateStudyHours={handleUpdateStudyHours}
      onSwitchRole={handleSwitchRole}
      onToggleRoadmapItem={handleToggleRoadmapItem}
      onToggleStudyPlannerItem={handleToggleStudyPlannerItem}
      onUpdateProjectStatus={handleUpdateProjectStatus}
      onResetProfile={handleResetProfile}
      theme={theme}
      onToggleTheme={toggleTheme}
      currentStreak={streakData.currentStreak}
    />
  );
}

/**
 * AppWorkspace renders the authenticated-less "logged in" workspace shell.
 * Split out from App so the (potentially expensive) career analysis is only
 * ever computed once a profile exists, and is memoized against the exact
 * inputs it depends on rather than recalculated on every render.
 */
function AppWorkspace({
  profile,
  activeTab,
  setActiveTab,
  activeRoleData,
  completedRoadmapItems,
  completedStudyPlannerItems,
  projectStatuses,
  onUpdateSkills,
  onUpdateStudyHours,
  onSwitchRole,
  onToggleRoadmapItem,
  onToggleStudyPlannerItem,
  onUpdateProjectStatus,
  onResetProfile,
  theme,
  onToggleTheme,
  currentStreak
}) {
  // Compile active career metrics using agents. Memoized so the (fairly
  // heavy) multi-agent computation only re-runs when one of its actual
  // inputs changes, instead of on every keystroke/state update in the app.
  const analysis = useMemo(
    () =>
      generateCareerAnalysis(
        profile.roleId,
        profile.skillsText,
        completedRoadmapItems,
        completedStudyPlannerItems,
        projectStatuses,
        currentStreak
      ),
    [profile.roleId, profile.skillsText, completedRoadmapItems, completedStudyPlannerItems, projectStatuses, currentStreak]
  );

  return (
    <div className="app-container">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRole={profile.roleId}
        roleTitle={activeRoleData.title}
        skillsText={profile.skillsText}
        onSkillsUpdate={onUpdateSkills}
      />

      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1 className="dashboard-header-title">
              {activeRoleData.title} Command Station
            </h1>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <button
              className="dashboard-reset-btn"
              onClick={onResetProfile}
            >
              Reset Workspace Profile
            </button>
          </div>
        </header>

        <div className="dashboard-workspace">
          {activeTab === 'dashboard' && (
            <Dashboard 
              analysis={analysis} 
              setActiveTab={setActiveTab}
              onToggleStudyItem={onToggleStudyPlannerItem}
              completedStudyItems={completedStudyPlannerItems}
              weeklyStudyHours={profile.weeklyStudyHours || '15 hours/week'}
            />
          )}

          {activeTab === 'assessment' && (
            <CareerAssessment 
              analysis={analysis}
              onUpdateSkills={onUpdateSkills}
              roleId={profile.roleId}
              CAREER_ROLES={CAREER_ROLES}
              onSwitchRole={onSwitchRole}
              studyHours={profile.weeklyStudyHours || '15 hours/week'}
              onUpdateStudyHours={onUpdateStudyHours}
            />
          )}

          {activeTab === 'skillIntel' && (
            <SkillIntelligence analysis={analysis} />
          )}

          {activeTab === 'roadmap' && (
            <LearningRoadmap 
              analysis={analysis} 
              completedRoadmapItems={completedRoadmapItems}
              onToggleRoadmapItem={onToggleRoadmapItem}
            />
          )}

          {activeTab === 'learningHub' && (
            <LearningHub analysis={analysis} />
          )}

          {activeTab === 'studyPlanner' && (
            <StudyPlanner 
              analysis={analysis}
              completedStudyPlannerItems={completedStudyPlannerItems}
              onToggleStudyPlannerItem={onToggleStudyPlannerItem}
            />
          )}

          {activeTab === 'projectsLab' && (
            <PortfolioLab 
              analysis={analysis}
              projectStatuses={projectStatuses}
              onUpdateProjectStatus={onUpdateProjectStatus}
            />
          )}

          {activeTab === 'interview' && (
            <InterviewCenter analysis={analysis} />
          )}

          {activeTab === 'opportunities' && (
            <OpportunityHub analysis={analysis} />
          )}

          {activeTab === 'analytics' && (
            <ProgressAnalytics analysis={analysis} />
          )}

          {activeTab === 'achievements' && (
            <Achievements analysis={analysis} />
          )}
        </div>
      </main>
    </div>
  );
}
