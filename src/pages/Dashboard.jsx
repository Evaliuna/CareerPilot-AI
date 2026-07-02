import React from 'react';
import { 
  Trophy, 
  Target, 
  Clock, 
  Flame, 
  ArrowUpRight, 
  Sparkles, 
  CalendarDays,
  Play,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export default function Dashboard({ 
  analysis, 
  setActiveTab, 
  onToggleStudyItem, 
  completedStudyItems 
}) {
  const { 
    role, 
    readinessScore, 
    tier, 
    tierDesc,
    statusClass,
    studyPlanner,
    growthMetrics,
    improvementActions,
    categoryScores,
    roadmapPhases,
    weaknesses,
    projectsList
  } = analysis;

  const { streak, level, totalPoints, badges } = growthMetrics;

  // Determine current active phase & upcoming milestones
  const activePhaseIndex = roadmapPhases.findIndex(phase => phase.percentage < 100);
  const currentPhase = activePhaseIndex !== -1 ? roadmapPhases[activePhaseIndex] : roadmapPhases[roadmapPhases.length - 1];
  const upcomingMilestones = currentPhase ? currentPhase.milestones : [];

  // Determine priority skill gap
  const priorityGap = weaknesses.find(w => w.priority === 'High') || weaknesses[0];

  // SVG Gauge calculations
  const radius = 54;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

  // Calculate project stats
  const activeProjectsCount = projectsList.filter(p => p.status === 'In Progress').length;
  const completedProjectsCount = projectsList.filter(p => p.status === 'Completed').length;

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* 🚀 Top Command Console: Welcome & Status Overview */}
      <div className="glass-panel welcome-card p-6 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`badge ${statusClass} flex items-center gap-1`}>
              <Sparkles size={11} /> {tier}
            </span>
            <span className="text-muted text-xs font-semibold">Targeting {role.title} Path</span>
          </div>
          <h2 className="text-2xl font-black text-primary mb-1">Welcome Back, Pilot!</h2>
          <p className="text-secondary text-sm leading-relaxed max-w-xl">
            {tierDesc} Complete focus drills, close priority gaps, and publish portfolio blueprints to level up.
          </p>

          {/* Level Progress Bar */}
          <div className="mt-4 max-w-md">
            <div className="flex justify-between text-xs font-semibold text-secondary mb-1">
              <span>Level Progress (LVL {level} → {level + 1})</span>
              <span>{totalPoints % 400} / 400 XP</span>
            </div>
            <div className="w-full bg-primary/40 h-2 rounded-full overflow-hidden border border-light">
              <div 
                className="bg-accent-gradient h-full rounded-full transition-all duration-500" 
                style={{ width: `${((totalPoints % 400) / 400) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Readiness Gauge Overlay */}
        <div className="readiness-gauge-container relative z-10 flex items-center justify-center flex-shrink-0">
          <svg width="130" height="130" className="rotate-[-90deg]">
            <circle 
              cx="65" 
              cy="65" 
              r={radius} 
              stroke="rgba(255,255,255,0.02)" 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
            <circle 
              cx="65" 
              cy="65" 
              r={radius} 
              stroke="url(#dashGrad)" 
              strokeWidth={strokeWidth} 
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none" 
            />
            <defs>
              <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" />
                <stop offset="100%" stopColor="var(--accent-secondary)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-primary">{readinessScore}%</span>
            <span className="text-[9px] uppercase text-muted tracking-wider font-bold">Ready</span>
          </div>
        </div>
        <div className="welcome-glow" />
      </div>

      {/* 📊 Core SaaS Metrics Dashboard Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-primary-glow text-accent-primary">
            <Flame size={18} />
          </div>
          <div>
            <span className="text-muted text-[11px] font-semibold uppercase tracking-wider block">Active Streak</span>
            <span className="text-base font-bold text-primary">{streak} Days</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-success-glow text-success">
            <Trophy size={18} />
          </div>
          <div>
            <span className="text-muted text-[11px] font-semibold uppercase tracking-wider block">XP Progress</span>
            <span className="text-base font-bold text-primary">{totalPoints} XP</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-warning-glow text-warning">
            <Target size={18} />
          </div>
          <div>
            <span className="text-muted text-[11px] font-semibold uppercase tracking-wider block">Level Progress</span>
            <span className="text-base font-bold text-primary">LVL {level}</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-4">
          <div className="card-icon-container bg-subtle text-accent-secondary">
            <Clock size={18} />
          </div>
          <div>
            <span className="text-muted text-[11px] font-semibold uppercase tracking-wider block">Weekly Goal</span>
            <span className="text-base font-bold text-primary">15 Hours</span>
          </div>
        </div>
      </div>

      {/* 🗺️ Main Workspace Grid */}
      <div className="grid-workspace">
        
        {/* Left Side: Where am I, study drills, projects */}
        <div className="flex flex-col gap-6">
          
          {/* Section 1: Where am I now? (Current Phase & Category bars) */}
          <div className="glass-panel p-5">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Current active phase</span>
                <h3 className="text-sm font-bold text-primary">
                  {currentPhase ? currentPhase.title : 'Mastery Achieved'}
                </h3>
              </div>
              <button 
                onClick={() => setActiveTab('roadmap')}
                className="text-xs text-accent-primary font-bold hover:underline flex items-center gap-0.5"
              >
                Full Pathway <ChevronRight size={14} />
              </button>
            </div>

            {/* Category Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <div className="flex justify-between text-xs text-secondary mb-1">
                  <span>Foundations</span>
                  <span className="font-bold text-primary">{categoryScores.foundations}%</span>
                </div>
                <div className="w-full bg-subtle border border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent-primary h-full rounded-full" style={{ width: `${categoryScores.foundations}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-secondary mb-1">
                  <span>Core Technologies</span>
                  <span className="font-bold text-primary">{categoryScores.core}%</span>
                </div>
                <div className="w-full bg-subtle border border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent-secondary h-full rounded-full" style={{ width: `${categoryScores.core}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-secondary mb-1">
                  <span>Projects</span>
                  <span className="font-bold text-primary">{categoryScores.projects}%</span>
                </div>
                <div className="w-full bg-subtle border border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-success h-full rounded-full" style={{ width: `${categoryScores.projects}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-secondary mb-1">
                  <span>Interview Prep</span>
                  <span className="font-bold text-primary">{categoryScores.interview}%</span>
                </div>
                <div className="w-full bg-subtle border border-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-warning h-full rounded-full" style={{ width: `${categoryScores.interview}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: What should I study today? (Today's Mission) */}
          <div className="glass-panel p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <CalendarDays size={16} className="text-accent-primary" /> Today's Mission & Checklists
              </h3>
              <button className="text-xs text-accent-primary font-bold hover:underline" onClick={() => setActiveTab('studyPlanner')}>
                Open Planner
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {studyPlanner.daily.map((task) => {
                const checked = !!completedStudyItems[task.id];
                return (
                  <div 
                    key={task.id} 
                    className={`p-3 rounded-lg border flex items-start gap-3 cursor-pointer transition-all duration-200 ${
                      checked ? 'bg-success-glow-subtle border-success/15' : 'bg-subtle border-light hover:border-accent-primary/20'
                    }`}
                    onClick={() => onToggleStudyItem(task.id)}
                  >
                    <input 
                      type="checkbox" 
                      checked={checked} 
                      onChange={() => {}} 
                      className="mt-1 cursor-pointer"
                    />
                    <div className="flex-grow">
                      <span className={`text-xs font-semibold block ${checked ? 'text-muted line-through' : 'text-primary'}`}>
                        {task.task}
                      </span>
                      <span className="text-[10px] text-muted">{task.duration} • Focus Session</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Active Projects & Upcoming Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Active Projects Panel */}
            <div className="glass-panel p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-2">Active Projects</span>
                <div className="flex justify-between items-center border-b border-light pb-2 mb-2">
                  <span className="text-xs text-secondary font-medium">In Progress</span>
                  <span className="text-xs font-bold text-accent-primary">{activeProjectsCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-secondary font-medium">Completed Blueprints</span>
                  <span className="text-xs font-bold text-success">{completedProjectsCount}</span>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('projectsLab')}
                className="text-xs text-accent-secondary font-bold hover:underline flex items-center gap-0.5 mt-4"
              >
                Go to Portfolio Lab <ChevronRight size={14} />
              </button>
            </div>

            {/* Upcoming Milestones Panel */}
            <div className="glass-panel p-4 flex flex-col gap-2">
              <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-1">Upcoming Milestones</span>
              <div className="flex flex-col gap-2">
                {upcomingMilestones.length > 0 ? (
                  upcomingMilestones.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[10px] bg-accent-secondary/10 text-accent-secondary font-bold px-1.5 py-0.5 rounded mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-secondary leading-relaxed">{m}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-muted">All milestones cleared!</span>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Right Side: What to do next, priority gap, timelines, achievements */}
        <div className="flex flex-col gap-6">
          
          {/* Section 1: Recommended Next Action & Priority Gap */}
          <div className="glass-panel p-5 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <AlertTriangle size={15} className="text-warning" /> What is blocking progress?
            </h3>
            
            {/* Priority Skill Gap */}
            {priorityGap && (
              <div className="p-3 bg-danger-glow border border-danger/15 rounded-lg flex flex-col gap-1">
                <span className="text-[9px] uppercase font-bold text-danger tracking-wider">Priority Skill Gap</span>
                <span className="text-xs font-bold text-primary">{priorityGap.name}</span>
                <p className="text-[10px] text-secondary leading-relaxed">
                  Possession of this skill is critical for target milestone execution. Learn this next.
                </p>
              </div>
            )}

            {/* Next Recommended Actions */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Recommended Next Action</span>
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

          {/* Section 2: Achievement Preview */}
          <div className="glass-panel p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <Award size={16} className="text-warning" /> Badges Cabinet
              </h3>
              <button onClick={() => setActiveTab('achievements')} className="text-xs text-accent-primary font-bold hover:underline">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mt-1">
              {badges.map(b => (
                <div 
                  key={b.id} 
                  title={`${b.title}: ${b.desc}`} 
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-base border transition-all ${
                    b.unlocked 
                      ? 'bg-primary-glow border-accent-primary/25 cursor-pointer scale-105' 
                      : 'bg-subtle border-light opacity-30'
                  }`}
                >
                  {b.unlocked ? b.icon : '🔒'}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Recent Activity Timeline */}
          <div className="glass-panel p-5 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <BookOpen size={16} className="text-accent-secondary" /> Activity Log
            </h3>
            <div className="flex flex-col gap-3 relative pl-3 border-l border-light mt-2">
              <div className="relative">
                <div className="absolute left-[-16px] top-1.5 w-2 h-2 rounded-full bg-accent-primary" />
                <span className="text-[9px] text-muted uppercase block font-bold">Today</span>
                <p className="text-xs text-secondary leading-relaxed">
                  Streak extended to <strong className="text-primary">{streak} days</strong>. Logged study checklists.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-[-16px] top-1.5 w-2 h-2 rounded-full bg-success" />
                <span className="text-[9px] text-muted uppercase block font-bold">Active Segment</span>
                <p className="text-xs text-secondary leading-relaxed">
                  Analyzed profile skillset gaps for <strong className="text-primary">{role.title}</strong> path.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
