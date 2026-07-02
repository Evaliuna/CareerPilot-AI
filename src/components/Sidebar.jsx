import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  currentRole, 
  roleTitle,
  skillsText, 
  onSkillsUpdate 
}) {
  const [localSkills, setLocalSkills] = useState(skillsText);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSkillsUpdate(localSkills);
  };

  const navItems = [
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

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">C</div>
        <span className="sidebar-title">CareerPilot OS</span>
      </div>

      <div className="sidebar-section-label">Navigation Workstation</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={14} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-section-label">Workspace Config</div>
        <div className="skills-config-box">
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
            <Sparkles size={12} className="text-gradient" /> Target Track:
          </label>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', display: 'block', marginBottom: '12px', paddingLeft: '4px' }}>
            {roleTitle}
          </span>
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="sidebar-skills-input" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              Your Current Skills:
            </label>
            <textarea
              id="sidebar-skills-input"
              className="skills-config-input"
              value={localSkills}
              onChange={(e) => setLocalSkills(e.target.value)}
              placeholder="e.g. HTML, CSS, JavaScript"
              style={{ minHeight: '60px', padding: '6px' }}
            />
            <button type="submit" className="skills-config-btn">
              Compile Custom OS
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
