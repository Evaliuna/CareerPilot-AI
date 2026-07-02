import React from 'react';
import { Check, CheckSquare, Square, ExternalLink, Link2, Circle, HelpCircle } from 'lucide-react';

export default function CareerRoadmap({ 
  analysis, 
  completedRoadmapItems, 
  onToggleRoadmapItem 
}) {
  const { role, roadmapPhases } = analysis;

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Guided Learning Roadmap
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Complete the foundational, core, project, and interview preparation phases. Your progress updates dynamically.
        </p>
      </div>

      <div className="roadmap-timeline">
        {roadmapPhases.map((phase) => {
          const isActive = phase.percentage > 0 && phase.percentage < 100;
          const isCompleted = phase.percentage === 100;
          
          let cardClass = "roadmap-phase-card glass-panel";
          if (isCompleted) cardClass += " completed";
          if (isActive) cardClass += " active";

          return (
            <div key={phase.key} className={cardClass}>
              <div className="roadmap-phase-dot" />
              
              <div className="phase-header">
                <div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Phase Completion: {phase.percentage}%
                  </span>
                </div>
                <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${phase.percentage}%`, 
                    height: '100%', 
                    background: isCompleted ? 'var(--color-success)' : 'var(--accent-gradient)',
                    transition: 'width 0.4s ease'
                  }} />
                </div>
              </div>

              {/* Skills List in Phase */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Skills Analyzed in this Phase:
                </span>
                <div className="phase-skills-list">
                  {phase.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className={`phase-skills-item ${skill.possessed ? 'possessed' : ''}`}
                    >
                      {skill.possessed ? <Check size={12} /> : <Circle size={10} />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid-2" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                {/* Milestone Targets */}
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Workspace Milestones:
                  </span>
                  <ul className="phase-goals-list">
                    {phase.goals.map((goal, idx) => {
                      const itemId = `${role.id}_${phase.key}_goal_${idx}`;
                      const isItemChecked = !!completedRoadmapItems[itemId];
                      return (
                        <li 
                          key={idx} 
                          className="phase-goals-item"
                          onClick={() => onToggleRoadmapItem(itemId)}
                          style={{ cursor: 'pointer', userSelect: 'none' }}
                        >
                          {isItemChecked ? (
                            <CheckSquare size={16} style={{ color: 'var(--color-success)' }} />
                          ) : (
                            <Square size={16} style={{ color: 'var(--text-muted)' }} />
                          )}
                          <span style={{ textDecoration: isItemChecked ? 'line-through' : 'none', color: isItemChecked ? 'var(--text-muted)' : 'var(--text-secondary)' }}>
                            {goal}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Resource links */}
                <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Recommended Learning Resources:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {role.resources && role.resources.slice(0, 3).map((res, rIdx) => (
                      <a 
                        key={rIdx} 
                        href={res.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          background: 'rgba(255,255,255,0.01)',
                          border: '1px solid var(--border-light)',
                          borderRadius: '6px',
                          fontSize: '0.82rem',
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          transition: 'var(--transition-fast)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent-primary)';
                          e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border-light)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Link2 size={12} style={{ color: 'var(--accent-primary)' }} />
                          {res.name}
                        </span>
                        <ExternalLink size={12} style={{ opacity: 0.6 }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
