import React from 'react';
import { CAREER_ROLES } from '../services/dataStore.js';
import { Sparkles, BarChart2, DollarSign, BrainCircuit, Shield } from 'lucide-react';

export default function JobRoleExplorer({ currentRoleId, onSelectRole }) {
  const rolesList = Object.values(CAREER_ROLES);

  const getDifficultyBadge = (diff) => {
    if (diff === 'Medium') return 'badge-success';
    if (diff === 'Hard') return 'badge-warning';
    return 'badge-danger';
  };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Job Role Explorer
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Switch between target career roles. Your Skill Gap analysis, Roadmap, Study Planner, and Projects update instantly.
        </p>
      </div>

      <div className="explorer-roles-grid">
        {rolesList.map((role) => {
          const isActive = currentRoleId === role.id;
          const diffClass = getDifficultyBadge(role.difficulty);

          return (
            <div 
              key={role.id} 
              className={`glass-panel role-explorer-card ${isActive ? 'active' : ''}`}
              onClick={() => onSelectRole(role.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)' }}>
                  {role.title}
                </h3>
                {isActive && (
                  <span className="badge badge-primary">
                    <Sparkles size={10} style={{ marginRight: '2px' }} /> Target Role
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '60px', marginBottom: '1.25rem' }}>
                {role.description}
              </p>

              <div className="role-meta-grid">
                <div className="role-meta-item">
                  <span>Difficulty</span>
                  <span style={{ display: 'block', marginTop: '2px' }}>
                    <span className={`badge ${diffClass}`}>{role.difficulty}</span>
                  </span>
                </div>
                
                <div className="role-meta-item">
                  <span>Market Demand</span>
                  <strong style={{ color: 'var(--text-primary)', marginTop: '2px' }}>{role.marketDemand}</strong>
                </div>

                <div className="role-meta-item" style={{ gridColumn: 'span 2', marginTop: '6px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <DollarSign size={12} style={{ color: 'var(--color-success)' }} /> Expected Salary Range:
                  </span>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginTop: '2px' }}>
                    {role.salaryRange}
                  </strong>
                </div>
              </div>

              <button 
                type="button" 
                className="role-select-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Avoid triggering card click twice
                  onSelectRole(role.id);
                }}
              >
                {isActive ? 'Active Target Workspace' : 'Set as Target Role'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
