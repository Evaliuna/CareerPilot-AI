import React from 'react';
import { BarChart3, LineChart, Flame, Trophy, Award, Target, CalendarDays } from 'lucide-react';

export default function ProgressAnalytics({ analysis }) {
  const { readinessScore, growthMetrics, categoryScores, skillsIntel } = analysis;

  // Mock historical data compiled deterministically based on readiness
  const historyPoints = [
    { label: 'Week 1', score: Math.round(readinessScore * 0.4) },
    { label: 'Week 2', score: Math.round(readinessScore * 0.6) },
    { label: 'Week 3', score: Math.round(readinessScore * 0.8) },
    { label: 'Week 4', score: readinessScore }
  ];

  // SVG dimensions for chart
  const width = 450;
  const height = 150;
  const padding = 30;

  // Convert points to SVG polyline coordinate path strings
  const getCoordinates = () => {
    const xStep = (width - padding * 2) / (historyPoints.length - 1);
    return historyPoints.map((pt, i) => {
      const x = padding + i * xStep;
      // Flip Y axis (0 is top in SVG coordinates)
      const y = height - padding - (pt.score / 100) * (height - padding * 2);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Page Header */}
      <div>
        <h2 className="text-lg font-bold text-primary flex items-center gap-2">
          <BarChart3 size={20} className="text-accent-primary" /> Progress Analytics & Insights
        </h2>
        <p className="text-xs text-secondary mt-1">
          Monitor your study hour velocity, relative category performance scores, and readiness trend histories.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Line Graph */}
        <div className="glass-panel p-5 lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-primary flex items-center gap-2 mb-3">
              <LineChart size={16} className="text-accent-secondary" /> Career Readiness Score Trend
            </h3>
            <p className="text-xs text-secondary leading-relaxed mb-4">
              Your overall readiness score has improved dynamically as you check off curriculum goals.
            </p>
          </div>

          {/* SVG Line Graph */}
          <div className="relative w-full flex justify-center py-4 bg-subtle rounded-lg border border-light">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[480px]">
              {/* Grid Lines */}
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              
              {/* Polyline path */}
              <polyline
                fill="none"
                stroke="url(#chartLineGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                points={getCoordinates()}
              />

              {/* Dots on coordinate intersections */}
              {historyPoints.map((pt, i) => {
                const xStep = (width - padding * 2) / (historyPoints.length - 1);
                const cx = padding + i * xStep;
                const cy = height - padding - (pt.score / 100) * (height - padding * 2);
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="6" fill="var(--background)" stroke="var(--accent-primary)" strokeWidth="2.5" />
                    <text x={cx} y={cy - 12} textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="bold">
                      {pt.score}%
                    </text>
                  </g>
                );
              })}

              {/* X Axis Labels */}
              {historyPoints.map((pt, i) => {
                const xStep = (width - padding * 2) / (historyPoints.length - 1);
                const x = padding + i * xStep;
                return (
                  <text key={i} x={x} y={height - 10} textAnchor="middle" fill="var(--text-muted)" fontSize="8">
                    {pt.label}
                  </text>
                );
              })}

              <defs>
                <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent-primary)" />
                  <stop offset="100%" stopColor="var(--accent-secondary)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right Column: Category completion bars */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <Target size={16} className="text-success" /> Category Strengths Index
          </h3>
          <p className="text-xs text-secondary leading-relaxed mb-2">
            Your readiness score is weighted across foundations, core frameworks, projects, and interview preparation.
          </p>

          <div className="flex flex-col gap-3.5">
            {Object.entries(categoryScores).map(([key, val]) => (
              <div key={key}>
                <div className="flex justify-between text-xs font-semibold text-primary mb-1">
                  <span className="capitalize">{key === 'core' ? 'Core Skills' : key}</span>
                  <span>{val}%</span>
                </div>
                <div className="w-full bg-light h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-accent-gradient h-full rounded-full transition-all duration-500" 
                    style={{ width: `${val}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Gamification Level Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-panel p-5 flex items-center gap-4">
          <div className="card-icon-container bg-primary-glow text-accent-primary">
            <Flame size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">Streak Resilience</span>
            <span className="text-base font-bold text-primary">{growthMetrics.streak} Days Streak</span>
            <span className="text-[10px] text-muted block mt-0.5">Keep check-off habits active daily.</span>
          </div>
        </div>

        <div className="glass-panel p-5 flex items-center gap-4">
          <div className="card-icon-container bg-success-glow text-success">
            <Trophy size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">Experience Points</span>
            <span className="text-base font-bold text-primary">{growthMetrics.totalPoints} Points</span>
            <span className="text-[10px] text-muted block mt-0.5">Points accumulate via completions.</span>
          </div>
        </div>

        <div className="glass-panel p-5 flex items-center gap-4">
          <div className="card-icon-container bg-warning-glow text-warning">
            <Award size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">Current Level</span>
            <span className="text-base font-bold text-primary">Level {growthMetrics.level} / 10</span>
            <span className="text-[10px] text-muted block mt-0.5">Pass milestones to level up.</span>
          </div>
        </div>

      </div>

    </div>
  );
}
