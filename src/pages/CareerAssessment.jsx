import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Award, 
  Sparkles, 
  BookOpen, 
  Hourglass, 
  LineChart, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';

export default function CareerAssessment({ analysis, onUpdateSkills, roleId, CAREER_ROLES, onSwitchRole }) {
  const { 
    role, 
    readinessScore, 
    strengths, 
    weaknesses, 
    improvementActions, 
    skillsIntel 
  } = analysis;

  const [experience, setExperience] = useState('Entry-Level (0-2 years)');
  const [education, setEducation] = useState('Self-Taught / Bootcamps');
  const [studyHours, setStudyHours] = useState('10 hours/week');
  const [skillsInput, setSkillsInput] = useState(analysis.role.skills.foundations.map(s => s.name).slice(0, 2).join(', '));

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      {/* Target Setting Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Form: Profile Parameters */}
        <div className="glass-panel p-5 flex flex-col gap-4 lg:col-span-1">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2 mb-2">
            <Briefcase size={16} className="text-accent-primary" /> Target Profile Configurations
          </h3>

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-muted text-xs font-semibold block mb-1">Target Professional Role</label>
              <select 
                className="form-select w-full"
                value={roleId}
                onChange={(e) => onSwitchRole(e.target.value)}
              >
                {Object.values(CAREER_ROLES).map(r => (
                  <option key={r.id} value={r.id}>{r.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-muted text-xs font-semibold block mb-1">Professional Experience</label>
              <select 
                className="form-select w-full"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option>Entry-Level (0-2 years)</option>
                <option>Mid-Level (2-5 years)</option>
                <option>Senior (5+ years)</option>
              </select>
            </div>

            <div>
              <label className="text-muted text-xs font-semibold block mb-1">Education Level</label>
              <select 
                className="form-select w-full"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                <option>Self-Taught / Bootcamps</option>
                <option>Bachelor's in Computer Science</option>
                <option>Master's / Ph.D.</option>
              </select>
            </div>

            <div>
              <label className="text-muted text-xs font-semibold block mb-1">Weekly Study Allocation</label>
              <select 
                className="form-select w-full"
                value={studyHours}
                onChange={(e) => setStudyHours(e.target.value)}
              >
                <option>5 hours/week</option>
                <option>10 hours/week</option>
                <option>20 hours/week</option>
                <option>40 hours/week (Full time)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Report: Stats Heatmap & Gaps */}
        <div className="glass-panel p-6 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <LineChart size={16} className="text-accent-secondary" /> Readiness Assessment Report
              </h3>
              <span className="text-xs text-muted">XP Multiplier: 1.0x</span>
            </div>
            
            <p className="text-xs text-secondary leading-relaxed mb-6">
              Based on your target role as a <strong className="text-primary">{role.title}</strong>, your current skills indicate a readiness score of <strong className="text-accent-primary">{readinessScore}%</strong>. Below is a density matrix representing target requirement matches.
            </p>

            {/* Heatmap Grid */}
            <div className="mb-6">
              <span className="text-[10px] uppercase text-muted tracking-wider block mb-3 font-bold">Requirement Heatmap</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {skillsIntel.allSkills.map(skill => {
                  const possessed = strengths.some(s => s.id === skill.id);
                  return (
                    <div 
                      key={skill.id}
                      className={`p-2.5 rounded-lg border text-center transition-all duration-300 ${
                        possessed 
                          ? 'bg-success-glow border-success/30 text-success' 
                          : 'bg-danger-glow border-danger/20 text-danger/80'
                      }`}
                    >
                      <span className="text-[10px] font-bold block truncate">{skill.name}</span>
                      <span className="text-[8px] opacity-75">{possessed ? 'POSSESSED' : 'MISSING GAP'}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick recommendations */}
          <div className="border-t border-light pt-4 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-xs">
                <span className="text-muted block">Current Gaps</span>
                <span className="text-sm font-bold text-primary">{weaknesses.length} Missing</span>
              </div>
              <div className="text-xs border-l border-light pl-3">
                <span className="text-muted block">Domain Strength</span>
                <span className="text-sm font-bold text-primary">{strengths.length} Matched</span>
              </div>
            </div>
            <button className="form-submit-btn text-xs py-2 px-4 w-auto" onClick={() => onUpdateSkills(analysis.role.skills.foundations.map(s => s.name).join(', '))}>
              Auto-complete Foundations
            </button>
          </div>

        </div>
      </div>

      {/* Strengths and Weaknesses Detailed View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strengths */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <Award size={16} className="text-success" /> Key Profile Strengths
          </h3>
          <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-2">
            {strengths.length > 0 ? (
              strengths.map(s => (
                <div key={s.id} className="p-3 bg-subtle border border-light rounded-lg flex items-center gap-2">
                  <CheckCircleIcon />
                  <div>
                    <span className="text-xs font-bold text-primary block">{s.name}</span>
                    <span className="text-[10px] text-muted">{s.category} • Priority: {s.priority}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-xs text-muted p-8">
                List current skills in the sidebar config to populate your profile strengths.
              </div>
            )}
          </div>
        </div>

        {/* Weaknesses / Priority Gaps */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <ShieldAlert size={16} className="text-warning" /> High-Priority Skill Gaps
          </h3>
          <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-2">
            {weaknesses.length > 0 ? (
              weaknesses.map(w => (
                <div key={w.id} className="p-3 bg-subtle border border-light rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <WarningCircleIcon />
                    <div>
                      <span className="text-xs font-bold text-primary block">{w.name}</span>
                      <span className="text-[10px] text-muted">{w.category} • Priority: {w.priority || 'Medium'}</span>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-warning-glow text-warning font-semibold">
                    {w.priority === 'High' ? 'CRITICAL' : 'DEVELOP'}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center text-xs text-success font-bold p-8">
                🎉 Excellent work! No skill gaps identified for your target career role.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

// Minimal icons
const CheckCircleIcon = () => (
  <svg className="text-success" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarningCircleIcon = () => (
  <svg className="text-warning" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
