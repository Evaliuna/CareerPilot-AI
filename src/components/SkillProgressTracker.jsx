import React from 'react';
import { Check, Plus, AlertCircle, TrendingUp, Award, Activity } from 'lucide-react';

export default function SkillProgressTracker({ analysis, onToggleSkill }) {
  const { role, strengths, weaknesses } = analysis;

  const categories = [
    { key: 'foundations', title: 'Foundations', skills: role.skills.foundations },
    { key: 'core', title: 'Core Skills', skills: role.skills.core },
    { key: 'projects', title: 'Projects Capability', skills: role.skills.projects },
    { key: 'interview', title: 'Interview & Pitching', skills: role.skills.interview }
  ];

  // Global skill counting
  const allSkills = [...role.skills.foundations, ...role.skills.core, ...role.skills.projects, ...role.skills.interview];
  const possessedCount = strengths.length;
  const totalCount = allSkills.length;
  const overallPercentage = totalCount > 0 ? Math.round((possessedCount / totalCount) * 100) : 0;

  return (
    <div className="animate-fade-in">
      <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Skills Acquired
          </span>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--color-success)', marginTop: '4px', fontFamily: 'var(--font-title)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Award size={20} /> {possessedCount} / {totalCount}
          </h3>
        </div>
        
        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Skills Gaps Remaining
          </span>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--color-warning)', marginTop: '4px', fontFamily: 'var(--font-title)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <AlertCircle size={20} /> {weaknesses.length}
          </h3>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Overall Coverage
          </span>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-primary)', marginTop: '4px', fontFamily: 'var(--font-title)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Activity size={20} /> {overallPercentage}%
          </h3>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {categories.map((cat) => {
          // Calculate matching skills in this category
          const categorySkillIds = cat.skills.map(s => s.id);
          const categoryPossessed = strengths.filter(s => categorySkillIds.includes(s.id));
          const catPct = cat.skills.length > 0 
            ? Math.round((categoryPossessed.length / cat.skills.length) * 100) 
            : 0;

          return (
            <div key={cat.key} className="glass-panel skill-tracker-category">
              <div className="skill-tracker-category-title">
                <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)' }}>
                  {cat.title}
                </h3>
                <span className="skill-tracker-category-pct">
                  {categoryPossessed.length} / {cat.skills.length} ({catPct}%)
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.skills.map((skill) => {
                  const isPossessed = strengths.some(s => s.id === skill.id);
                  return (
                    <div key={skill.id} className="skill-bar-row">
                      <div className="skill-bar-header">
                        <span className="skill-bar-name">{skill.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span 
                            className="skill-bar-status" 
                            style={{ color: isPossessed ? 'var(--color-success)' : 'var(--color-warning)' }}
                          >
                            {isPossessed ? 'Acquired' : 'Skill Gap'}
                          </span>
                          
                          <button
                            onClick={() => onToggleSkill(skill.name, isPossessed)}
                            style={{
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              background: isPossessed ? 'rgba(239, 68, 68, 0.08)' : 'rgba(16, 185, 129, 0.08)',
                              border: `1px solid ${isPossessed ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)'}`,
                              color: isPossessed ? 'var(--color-danger)' : 'var(--color-success)',
                              transition: 'var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.filter = 'brightness(1.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.filter = 'none';
                            }}
                          >
                            {isPossessed ? 'Mark Gap' : 'Mark Acquired'}
                          </button>
                        </div>
                      </div>

                      <div className="skill-bar-track">
                        <div 
                          className={`skill-bar-fill ${isPossessed ? 'possessed' : 'missing'}`}
                          style={{ width: isPossessed ? '100%' : '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
