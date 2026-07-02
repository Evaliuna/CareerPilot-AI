import React, { useState, useEffect } from 'react';
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
import './styles/components.css';

export default function App() {
  const [profile, setProfile] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_profile');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error("Error reading cp_profile:", e);
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState('dashboard');

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
      skillsText: skills
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
    return <LandingPage onLaunchWorkspace={handleLaunchWorkspace} />;
  }

  // Compile active career metrics using agents
  const analysis = generateCareerAnalysis(
    profile.roleId, 
    profile.skillsText,
    completedRoadmapItems,
    completedStudyPlannerItems,
    projectStatuses
  );
  
  const activeRoleData = CAREER_ROLES[profile.roleId] || CAREER_ROLES.frontend;

  return (
    <div className="app-container">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRole={profile.roleId}
        roleTitle={activeRoleData.title}
        skillsText={profile.skillsText}
        onSkillsUpdate={handleUpdateSkills}
      />

      <main className="main-content">
        <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {activeRoleData.title} Command Station
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Kaggle Capstone Professional Console / Active Segment: {activeTab.toUpperCase()}
            </p>
          </div>
          <div>
            <button 
              onClick={handleResetProfile}
              style={{
                background: 'rgba(255, 68, 68, 0.08)',
                border: '1px solid rgba(255, 68, 68, 0.2)',
                color: 'var(--color-danger)',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 68, 68, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 68, 68, 0.08)'}
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
              onToggleStudyItem={handleToggleStudyPlannerItem}
              completedStudyItems={completedStudyPlannerItems}
            />
          )}

          {activeTab === 'assessment' && (
            <CareerAssessment 
              analysis={analysis}
              onUpdateSkills={handleUpdateSkills}
              roleId={profile.roleId}
              CAREER_ROLES={CAREER_ROLES}
              onSwitchRole={handleSwitchRole}
            />
          )}

          {activeTab === 'skillIntel' && (
            <SkillIntelligence analysis={analysis} />
          )}

          {activeTab === 'roadmap' && (
            <LearningRoadmap 
              analysis={analysis} 
              completedRoadmapItems={completedRoadmapItems}
              onToggleRoadmapItem={handleToggleRoadmapItem}
            />
          )}

          {activeTab === 'learningHub' && (
            <LearningHub analysis={analysis} />
          )}

          {activeTab === 'studyPlanner' && (
            <StudyPlanner 
              analysis={analysis}
              completedStudyPlannerItems={completedStudyPlannerItems}
              onToggleStudyPlannerItem={handleToggleStudyPlannerItem}
            />
          )}

          {activeTab === 'projectsLab' && (
            <PortfolioLab 
              analysis={analysis}
              projectStatuses={projectStatuses}
              onUpdateProjectStatus={handleUpdateProjectStatus}
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
