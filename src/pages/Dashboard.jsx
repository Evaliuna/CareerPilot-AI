import React from 'react';
import { 
  Trophy, 
  Target, 
  Clock, 
  Flame, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  CalendarDays,
  Play
} from 'lucide-react';

export default function Dashboard({ analysis, setActiveTab, onToggleStudyItem, completedStudyItems, weeklyStudyHours }) {
  const { 
    role, 
    readinessScore, 
    tier, 
    tierDesc,
    statusClass,
    studyPlanner,
    growthMetrics,
    improvementActions
  } = analysis;

  // Calculate SVG radius
  const radius = 64;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      {/* Welcome Banner */}
      <div className="glass-panel welcome-card flex justify-between items-center p-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className={`badge ${statusClass} flex items-center gap-1`}>
              <Sparkles size={12} /> {tier}
            </span>
            <span className="text-muted text-xs">Targeting {role.title}</span>
          </div>
          <h2 className="text-xl font-bold text-primary mb-1">Welcome Back, Pilot!</h2>
          <p className="text-secondary text-sm leading-relaxed max-w-lg">
            {tierDesc} Keep building projects and resolving skill gaps to elevate your readiness.
          </p>
        </div>
        
        {/* Readiness Gauge */}
        <div className="readiness-gauge-container relative z-10 flex items-center justify-center">
          <svg width="150" height="150" className="rotate-[-90deg]">
            <circle 
              cx="75" 
              cy="75" 
              r={radius} 
              stroke="rgba(255,255,255,0.03)" 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
            <circle 
              cx="75" 
              cy="75" 
              r={radius} 
              stroke="url(#dashReadinessGrad)" 
              strokeWidth={strokeWidth} 
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none" 
            />
            <defs>
              <linearGradient id="dashReadinessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" />
                <stop offset="100%" stopColor="var(--accent-secondary)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-primary">{readinessScore}%</span>
            <span className="text-[10px] uppercase text-muted tracking-wider">Ready</span>
          </div>
        </div>
        <div className="welcome-glow" />
      </div>

      {/* Grid: Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-primary-glow text-accent-primary">
            <Flame size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">Active Streak</span>
            <span className="text-lg font-bold text-primary">{growthMetrics.streak} Days</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-success-glow text-success">
            <Trophy size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">XP Earned</span>
            <span className="text-lg font-bold text-primary">{growthMetrics.totalPoints} XP</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-warning-glow text-warning">
            <Target size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">Career Level</span>
            <span className="text-lg font-bold text-primary">LVL {growthMetrics.level}</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-info-glow text-accent-secondary">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-muted text-xs block">Weekly Study Goal</span>
            <span className="text-lg font-bold text-primary">{weeklyStudyHours}</span>
          </div>
        </div>
      </div>

      {/* Grid: Daily drills, actions, milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Today's drills */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <CalendarDays size={16} className="text-accent-primary" /> Today's Focus Drills
            </h3>
            <button className="text-xs text-accent-primary hover:underline" onClick={() => setActiveTab('studyPlanner')}>
              Open Planner
            </button>
          </div>
          
          <div className="flex flex-col gap-3">
            {studyPlanner.daily.map((task) => {
              const checked = !!completedStudyItems[task.id];
              return (
                <div 
                  key={task.id} 
                  className={`p-3 rounded-lg border flex items-start gap-3 cursor-pointer transition-all duration-200 ${
                    checked ? 'bg-success-glow-subtle border-success/20' : 'bg-subtle border-light hover:border-accent-primary/20'
                  }`}
                  onClick={() => onToggleStudyItem(task.id)}
                >
                  <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={() => {}} // handled by div click
                    className="mt-1 cursor-pointer"
                  />
                  <div className="flex-1">
                    <span className={`text-xs font-semibold block ${checked ? 'text-success line-through' : 'text-primary'}`}>
                      {task.task}
                    </span>
                    <span className="text-[10px] text-muted">{task.duration} • Micro-session</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Column: Quick Actions */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <Play size={16} className="text-accent-secondary" /> Pilot Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button 
              className="glass-panel p-3 text-left hover:border-accent-primary/30 transition-all flex flex-col justify-between group"
              onClick={() => setActiveTab('assessment')}
            >
              <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Assessment</span>
              <span className="text-xs font-bold text-primary group-hover:text-accent-primary flex items-center gap-1">
                Audit Skills <ArrowUpRight size={12} />
              </span>
            </button>

            <button 
              className="glass-panel p-3 text-left hover:border-accent-secondary/30 transition-all flex flex-col justify-between group"
              onClick={() => setActiveTab('projectsLab')}
            >
              <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Portfolio</span>
              <span className="text-xs font-bold text-primary group-hover:text-accent-secondary flex items-center gap-1">
                Build Lab <ArrowUpRight size={12} />
              </span>
            </button>

            <button 
              className="glass-panel p-3 text-left hover:border-success/30 transition-all flex flex-col justify-between group"
              onClick={() => setActiveTab('roadmap')}
            >
              <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Roadmap</span>
              <span className="text-xs font-bold text-primary group-hover:text-success flex items-center gap-1">
                Next Phase <ArrowUpRight size={12} />
              </span>
            </button>

            <button 
              className="glass-panel p-3 text-left hover:border-warning/30 transition-all flex flex-col justify-between group"
              onClick={() => setActiveTab('interview')}
            >
              <span className="text-[10px] text-muted uppercase tracking-wider block mb-2">Interviews</span>
              <span className="text-xs font-bold text-primary group-hover:text-warning flex items-center gap-1">
                Prep Center <ArrowUpRight size={12} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Key Gaps & Top Recommendation */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary">Priority Action Required</h3>
          <div className="flex flex-col gap-3">
            {improvementActions.slice(0, 2).map((act, index) => (
              <div key={act.id} className="p-3 bg-subtle border border-light rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] uppercase font-bold text-accent-primary tracking-wider">{act.tag}</span>
                  <span className="text-[9px] text-muted">0{index + 1}</span>
                </div>
                <h4 className="text-xs font-bold text-primary mb-1">{act.title}</h4>
                <p className="text-[11px] text-secondary leading-relaxed">{act.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
