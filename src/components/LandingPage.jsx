import React, { useState } from 'react';
import { CAREER_ROLES } from '../services/dataStore.js';
import { Compass, Sparkles, Code2, BarChart3, Zap, Sun, Moon } from 'lucide-react';
import '../styles/landing.css';

const FEATURE_CARDS = [
  { icon: Code2, title: "Structured Curriculum Maps", desc: "Gain visual insight into specific skill boundaries across Foundations, Core, Projects, and Interview prep." },
  { icon: Zap, title: "Adaptive Study Planners", desc: "Your study milestones, daily drills, and monthly review checklists customize automatically based on gaps." },
  { icon: BarChart3, title: "Local Readiness Metrics", desc: "Monitor your career profile qualifications with direct SVG progress dials and manual audit checklists." },
  { icon: Compass, title: "Project Laboratories", desc: "Discover intermediate and advanced portfolio blueprints to build real credibility in your domain." }
];

export default function LandingPage({ onLaunchWorkspace, theme, onToggleTheme }) {
  const [selectedRole, setSelectedRole] = useState('frontend');
  const [skillsText, setSkillsText] = useState('HTML, CSS, Git');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLaunchWorkspace(selectedRole, skillsText);
  };

  return (
    <div className="landing-outer-container">
      {/* Decorative Glow Elements */}
      <div className="landing-glow-1" aria-hidden="true" />
      <div className="landing-glow-2" aria-hidden="true" />

      <header className="landing-header">
        <div className="landing-brand">
          <div className="sidebar-logo">C</div>
          <span className="landing-brand-name">
            CareerPilot AI
          </span>
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
          <span className="badge badge-primary">Career OS v1.0.0</span>
        </div>
      </header>

      <main className="landing-main">
        {/* Hero Section */}
        <section className="landing-hero animate-fade-in">
          <span className="badge badge-primary landing-hero-badge">
            <Sparkles size={12} aria-hidden="true" /> Dynamic Career OS Workspace
          </span>
          <h1 className="landing-title">
            Navigate Your Professional Journey with <span className="text-gradient">CareerPilot AI</span>
          </h1>
          <p className="landing-subtitle">
            Identify specific target gaps, build targeted portfolio projects, and construct structured learning schedules. Completely self-contained.
          </p>
        </section>

        {/* Central Configuration Form */}
        <section className="landing-form-container glass-panel animate-fade-in">
          <h2 className="landing-form-title">
            Configure Your Workstation
          </h2>
          
          <form onSubmit={handleSubmit} className="landing-form">
            <div>
              <label className="form-label" htmlFor="role-select">Select Your Target Career Path:</label>
              <select 
                id="role-select"
                className="form-select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                {Object.values(CAREER_ROLES).map(role => (
                  <option key={role.id} value={role.id}>{role.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="skills-input">Enter Your Current Skills (Comma Separated):</label>
              <textarea 
                id="skills-input"
                className="form-textarea"
                value={skillsText}
                onChange={(e) => setSkillsText(e.target.value)}
                placeholder="e.g. HTML, CSS, JavaScript, Python"
                required
              />
              <span className="form-help">
                List software packages, programming languages, concepts, or frameworks you already know.
              </span>
            </div>

            <button type="submit" className="form-submit-btn">
              Compile Custom Workspace
            </button>
          </form>
        </section>

        {/* Feature Grid */}
        <section className="landing-features-grid animate-fade-in" aria-label="Key features">
          {FEATURE_CARDS.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="glass-panel feature-card-item">
                <div className="card-icon-container feature-card-icon">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="feature-card-title">
                  {feat.title}
                </h3>
                <p className="feature-card-desc">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </section>
      </main>

      <footer className="landing-footer">
        <p>© 2026 CareerPilot AI. Built for students, builders, and engineers.</p>
      </footer>
    </div>
  );
}
