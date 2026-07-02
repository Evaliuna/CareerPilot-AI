import React from 'react';
import { CheckCircle2, AlertCircle, ArrowUpRight, Award, Compass, ShieldAlert } from 'lucide-react';

export default function Overview({ analysis }) {
  const { role, readinessScore, strengths, weaknesses, improvementActions } = analysis;

  // SVG Geometry for Readiness Gauge
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

  // Get dynamic readiness tier messages
  const getReadinessStatus = (score) => {
    if (score < 30) return { title: "Starter Phase", desc: "You are setting the roots. Prioritize mastering foundational syntax and tool definitions to gain momentum.", class: "badge-danger" };
    if (score < 65) return { title: "Developing Tier", desc: "Solid progress! You are gaining core mechanics. Focus on framework bindings and API routing configurations next.", class: "badge-warning" };
    if (score < 85) return { title: "Market Ready", desc: "Job candidate status! You have a broad skill set. Focus on deployment setups, system performance, and algorithm practice.", class: "badge-primary" };
    return { title: "Elite Expert", desc: "Premium developer preparation! You meet all primary parameters. Seek active fellowships, open-source maintainer status, or submit job apps.", class: "badge-success" };
  };

  const statusInfo = getReadinessStatus(readinessScore);

  return (
    <div className="animate-fade-in">
      <div className="grid-workspace">
        {/* Left Column: Dashboard metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* 1. Score & Status Board */}
          <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
            <div className="readiness-container">
              <svg width="180" height="180" className="readiness-ring">
                <defs>
                  <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-primary)" />
                    <stop offset="100%" stopColor="var(--accent-secondary)" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="90" 
                  cy="90" 
                  r={radius} 
                  className="readiness-bg-circle" 
                />
                <circle 
                  cx="90" 
                  cy="90" 
                  r={radius} 
                  className="readiness-progress-circle" 
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
              <div className="readiness-text-overlay">
                <span className="readiness-number">{readinessScore}%</span>
                <span className="readiness-label">Ready</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                <span className={`badge ${statusInfo.class}`}>{statusInfo.title}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Target: {role.title}</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-title)' }}>
                Career Assessment Status
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {statusInfo.desc}
              </p>
            </div>
          </div>

          {/* 2. Strengths & Weaknesses side-by-side */}
          <div className="grid-2">
            
            {/* Strengths card */}
            <div className="glass-panel">
              <div className="card-header-with-icon">
                <div className="card-icon-container" style={{ color: 'var(--color-success)', background: 'var(--success-glow)' }}>
                  <Award size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Your Strengths</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Matched target requirements</span>
                </div>
              </div>
              <div className="strengths-gaps-list">
                {strengths.length > 0 ? (
                  strengths.map(s => (
                    <div key={s.id} className="status-list-item strength">
                      <CheckCircle2 size={14} style={{ color: 'var(--color-success)' }} />
                      <span style={{ fontWeight: 500 }}>{s.name}</span>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    No skills matched yet. Update your skills in the sidebar config!
                  </div>
                )}
              </div>
            </div>

            {/* Gaps card */}
            <div className="glass-panel">
              <div className="card-header-with-icon">
                <div className="card-icon-container" style={{ color: 'var(--color-warning)', background: 'var(--warning-glow)' }}>
                  <Compass size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Target Gaps</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Skills to develop</span>
                </div>
              </div>
              <div className="strengths-gaps-list">
                {weaknesses.length > 0 ? (
                  weaknesses.slice(0, 5).map(w => (
                    <div key={w.id} className="status-list-item gap">
                      <AlertCircle size={14} style={{ color: 'var(--color-warning)' }} />
                      <span style={{ fontWeight: 500 }}>{w.name}</span>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-success)', fontSize: '0.85rem' }}>
                    🎉 Zero skill gaps identified! You are fully prepped for this role.
                  </div>
                )}
                {weaknesses.length > 5 && (
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', display: 'block', marginTop: '4px' }}>
                    + {weaknesses.length - 5} more skill gaps (view Skill Progress tab)
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Key Actions */}
        <div className="glass-panel" style={{ height: '100%' }}>
          <div className="card-header-with-icon">
            <div className="card-icon-container">
              <ArrowUpRight size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Improvement Actions</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Top 3 recommended activities</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {improvementActions.map((action, idx) => (
              <div 
                key={action.id} 
                className="glass-panel" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.01)', 
                  border: '1px solid var(--border-light)', 
                  padding: '1.25rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {action.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    0{idx + 1}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  {action.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
