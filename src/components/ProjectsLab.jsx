import React from 'react';
import { Layers, CheckCircle2, PlayCircle, Circle, Hourglass } from 'lucide-react';

export default function ProjectsLab({ 
  analysis, 
  projectStatuses, 
  onUpdateProjectStatus 
}) {
  const { role } = analysis;

  const getDifficultyBadgeClass = (diff) => {
    if (diff === 'Beginner') return 'badge-success';
    if (diff === 'Intermediate') return 'badge-warning';
    return 'badge-danger';
  };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Portfolio Projects Lab
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Build targeted portfolio projects to bridge gaps and prove your competency. Update completion states to audit your work.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {role.projectsList.map((project) => {
          const currentStatus = projectStatuses[project.id] || 'not_started';
          const difficultyClass = getDifficultyBadgeClass(project.difficulty);

          return (
            <div key={project.id} className="glass-panel project-card">
              <div className="phase-header">
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {project.title}
                  </h3>
                  <div className="project-meta-row">
                    <span className={`badge ${difficultyClass}`}>
                      {project.difficulty}
                    </span>
                    <span className="badge badge-primary">
                      <Hourglass size={10} style={{ marginRight: '2px' }} /> {project.timeEstimate}
                    </span>
                  </div>
                </div>
                
                {/* Status Indicator Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {currentStatus === 'completed' && (
                    <CheckCircle2 size={20} style={{ color: 'var(--color-success)' }} />
                  )}
                  {currentStatus === 'in_progress' && (
                    <PlayCircle size={20} style={{ color: 'var(--color-warning)' }} />
                  )}
                  {currentStatus === 'not_started' && (
                    <Circle size={20} style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-skills-footer">
                <strong>Skills Earned:</strong> {project.skillsGained}
              </div>

              <div className="project-status-selector">
                <button
                  className={`project-status-btn ${currentStatus === 'not_started' ? 'active' : ''}`}
                  onClick={() => onUpdateProjectStatus(project.id, 'not_started')}
                >
                  Not Started
                </button>
                <button
                  className={`project-status-btn ${currentStatus === 'in_progress' ? 'active' : ''}`}
                  onClick={() => onUpdateProjectStatus(project.id, 'in_progress')}
                >
                  In Progress
                </button>
                <button
                  className={`project-status-btn ${currentStatus === 'completed' ? 'active' : ''}`}
                  onClick={() => onUpdateProjectStatus(project.id, 'completed')}
                >
                  Completed
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
