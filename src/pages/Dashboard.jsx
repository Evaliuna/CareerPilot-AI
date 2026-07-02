import React from 'react';
import { 
  Trophy, 
  Target, 
  Flame, 
  Sparkles, 
  CalendarDays,
  ChevronRight,
  BookOpen,
  CheckSquare,
  Square,
  AlertCircle,
  Briefcase
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
    weaknesses,
    projectsList
  } = analysis;

  const { streak, level, totalPoints, badges } = growthMetrics;

  // Calculate current daily drills progress
  const dailyTasks = studyPlanner?.daily || [];
  const completedDailyCount = dailyTasks.filter(task => completedStudyItems[task.id]).length;
  const totalDailyCount = dailyTasks.length;
  const dailyProgressPct = totalDailyCount > 0 ? Math.round((completedDailyCount / totalDailyCount) * 100) : 0;

  // Determine top priority skill gap
  const priorityGap = weaknesses?.find(w => w.priority === 'High') || weaknesses?.[0];

  // SVG Gauge calculations
  const radius = 38;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readinessScore / 100) * circumference;

  // Calculate project completions
  const activeProjects = projectsList?.filter(p => p.status === 'In Progress') || [];
  const completedProjects = projectsList?.filter(p => p.status === 'Completed') || [];

  return (
    <div className="animate-fade-in flex flex-col gap-5">
      
      {/* 🚀 Sleek Compact Hero Header */}
      <div className="glass-panel welcome-card p-5 flex flex-col sm:flex-row justify-between items-center gap-4 relative overflow-hidden">
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`badge ${statusClass} flex items-center gap-1 text-[10px]`}>
              <Sparkles size={10} /> {tier}
            </span>
            <span className="text-secondary text-xs font-medium">/ Targeting {role.title}</span>
          </div>
          <h2 className="text-xl font-bold text-primary mb-1">Welcome back, Pilot</h2>
          <p className="text-secondary text-xs leading-relaxed max-w-lg">
            {tierDesc} Resolve priority skill gaps and log drills to elevate your profile.
          </p>
        </div>

        {/* Compact Readiness Ring */}
        <div className="relative z-10 flex items-center gap-4 bg-primary/20 p-3 rounded-lg border border-light flex-shrink-0">
          <div className="relative flex items-center justify-center w-[90px] h-[90px]">
            <svg width="90" height="90" className="rotate-[-90deg]">
              <circle 
                cx="45" 
                cy="45" 
                r={radius} 
                stroke="rgba(255,255,255,0.02)" 
                strokeWidth={strokeWidth} 
                fill="none" 
              />
              <circle 
                cx="45" 
                cy="45" 
                r={radius} 
                stroke="url(#heroGrad)" 
                strokeWidth={strokeWidth} 
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none" 
              />
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-primary)" />
                  <stop offset="100%" stopColor="var(--accent-secondary)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-lg font-black text-primary leading-none">{readinessScore}%</span>
              <span className="text-[8px] uppercase text-muted tracking-wider font-bold">Ready</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] text-muted uppercase font-bold block">Consolidated Status</span>
            <span className="text-xs text-primary font-bold">{readinessScore >= 65 ? 'Ready to Apply' : 'Developing Skills'}</span>
          </div>
        </div>
        <div className="welcome-glow" />
      </div>

      {/* 📊 Unified SaaS Metric Command strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-4 flex items-center gap-3">
          <div className="card-icon-container bg-primary-glow text-accent-primary">
            <Flame size={18} />
          </div>
          <div>
            <span className="text-muted text-[10px] font-bold uppercase tracking-wider block">Streak</span>
            <span className="text-sm font-bold text-primary">{streak} Days</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-3">
          <div className="card-icon-container bg-success-glow text-success">
            <Trophy size={18} />
          </div>
          <div>
            <span className="text-muted text-[10px] font-bold uppercase tracking-wider block">Total XP</span>
            <span className="text-sm font-bold text-primary">{totalPoints} XP</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-3">
          <div className="card-icon-container bg-warning-glow text-warning">
            <Target size={18} />
          </div>
          <div>
            <span className="text-muted text-[10px] font-bold uppercase tracking-wider block">Pilot Level</span>
            <span className="text-sm font-bold text-primary">Level {level}</span>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center gap-3">
          <div className="card-icon-container bg-subtle text-accent-secondary">
            <BookOpen size={18} />
          </div>
          <div>
            <span className="text-muted text-[10px] font-bold uppercase tracking-wider block">Weekly Goal</span>
            <span className="text-sm font-bold text-primary">15 Hours</span>
          </div>
        </div>
      </div>

      {/* 🗺️ Reorganized Grid Layout */}
      <div className="grid grid-workspace">
        
        {/* Left Side: Today's Mission & Project Trackers */}
        <div className="flex flex-col gap-5">
          
          {/* Today's Mission - Elevated Primary Section */}
          <div className="glass-panel p-5 flex flex-col gap-4 border border-accent-primary/20 bg-primary-glow/10">
            <div className="flex justify-between items-center border-b border-light pb-3">
              <div>
                <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                  <CalendarDays size={16} className="text-accent-primary" /> Today's Mission
                </h3>
                <span className="text-muted text-[10px] mt-0.5 block">Log daily drills to extend your active streak</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-muted font-bold block">Drills Logged</span>
                <span className="text-xs font-bold text-accent-primary">{completedDailyCount} / {totalDailyCount}</span>
              </div>
            </div>

            {/* Drill Progress Bar */}
            <div>
              <div className="w-full bg-primary h-2 rounded-full overflow-hidden border border-light">
                <div 
                  className="bg-accent-gradient h-full rounded-full transition-all duration-500" 
                  style={{ width: `${dailyProgressPct}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="flex flex-col gap-2.5">
              {dailyTasks.map((task) => {
                const isChecked = !!completedStudyItems[task.id];
                return (
                  <div 
                    key={task.id}
                    onClick={() => onToggleStudyItem(task.id)}
                    className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-all duration-200 ${
                      isChecked 
                        ? 'bg-success-glow-subtle border-success/15 hover:border-success/30' 
                        : 'bg-subtle border-light hover:border-accent-primary/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isChecked ? (
                        <CheckSquare size={16} className="text-success" />
                      ) : (
                        <Square size={16} className="text-muted" />
                      )}
                      <span className={`text-xs font-semibold ${isChecked ? 'text-muted line-through' : 'text-primary'}`}>
                        {task.task}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted">{task.duration}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Skills & Projects Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Category Performance Scores */}
            <div className="glass-panel p-4 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-2">Category Readiness</span>
                <div className="flex flex-col gap-2.5">
                  <div>
                    <div className="flex justify-between text-[11px] text-secondary mb-1">
                      <span>Foundations</span>
                      <span className="font-bold text-primary">{categoryScores.foundations}%</span>
                    </div>
                    <div className="w-full bg-primary h-1 rounded-full overflow-hidden">
                      <div className="bg-accent-primary h-full rounded-full" style={{ width: `${categoryScores.foundations}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-secondary mb-1">
                      <span>Core Skills</span>
                      <span className="font-bold text-primary">{categoryScores.core}%</span>
                    </div>
                    <div className="w-full bg-primary h-1 rounded-full overflow-hidden">
                      <div className="bg-accent-secondary h-full rounded-full" style={{ width: `${categoryScores.core}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-secondary mb-1">
                      <span>Projects</span>
                      <span className="font-bold text-primary">{categoryScores.projects}%</span>
                    </div>
                    <div className="w-full bg-primary h-1 rounded-full overflow-hidden">
                      <div className="bg-success h-full rounded-full" style={{ width: `${categoryScores.projects}%` }} />
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('roadmap')}
                className="text-[11px] text-accent-primary font-bold hover:underline flex items-center gap-0.5 mt-2"
              >
                Expand Pathway Roadmap <ChevronRight size={12} />
              </button>
            </div>

            {/* Active Projects Panel */}
            <div className="glass-panel p-4 flex flex-col justify-between gap-3">
              <div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-2">Active Blueprints</span>
                
                <div className="flex justify-between items-center border-b border-light pb-2 mb-2">
                  <span className="text-xs text-secondary font-medium flex items-center gap-1.5">
                    <Briefcase size={12} className="text-accent-secondary" /> In Progress
                  </span>
                  <span className="text-xs font-bold text-accent-primary">{activeProjects.length}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-secondary font-medium flex items-center gap-1.5">
                    <Trophy size={12} className="text-success" /> Completed Blueprints
                  </span>
                  <span className="text-xs font-bold text-success">{completedProjects.length}</span>
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('projectsLab')}
                className="text-[11px] text-accent-secondary font-bold hover:underline flex items-center gap-0.5 mt-2"
              >
                Open Portfolio Workbench <ChevronRight size={12} />
              </button>
            </div>

          </div>

        </div>

        {/* Right Side: What to do next, priority skill gaps, achievements */}
        <div className="flex flex-col gap-5">
          
          {/* Priority Blockers & Gaps */}
          <div className="glass-panel p-5 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <AlertCircle size={15} className="text-warning" /> Next Recommended Action
            </h3>

            {/* Priority Skill Gap Warning */}
            {priorityGap && (
              <div className="p-3 bg-danger-glow border border-danger/15 rounded-lg">
                <span className="text-[9px] uppercase font-bold text-danger tracking-wider block mb-1">Target Skill Gap</span>
                <span className="text-xs font-bold text-primary">{priorityGap.name}</span>
                <p className="text-[10px] text-secondary leading-relaxed mt-1">
                  Mastering this skill is critical to unlock advanced roadmap benchmarks.
                </p>
              </div>
            )}

            {/* Recommendations */}
            <div className="flex flex-col gap-2">
              {improvementActions?.slice(0, 2).map((act, idx) => (
                <div key={act.id} className="p-3 bg-subtle border border-light rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] uppercase font-bold text-accent-primary tracking-wider">{act.tag}</span>
                    <span className="text-[9px] text-muted">0{idx + 1}</span>
                  </div>
                  <h4 className="text-xs font-bold text-primary">{act.title}</h4>
                  <p className="text-[10px] text-secondary leading-relaxed mt-0.5">{act.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Preview */}
          <div className="glass-panel p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                <Trophy size={15} className="text-warning" /> Badges Cabinet
              </h3>
              <button 
                onClick={() => setActiveTab('achievements')} 
                className="text-[11px] text-accent-primary font-bold hover:underline"
              >
                Inspect
              </button>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mt-1">
              {badges?.slice(0, 5).map(b => (
                <div 
                  key={b.id} 
                  title={`${b.title}: ${b.desc}`} 
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm border transition-all ${
                    b.unlocked 
                      ? 'bg-primary-glow border-accent-primary/20 scale-105' 
                      : 'bg-subtle border-light opacity-30'
                  }`}
                >
                  {b.unlocked ? b.icon : '🔒'}
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Progress Timeline (Activity Log) */}
          <div className="glass-panel p-5 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <Target size={15} className="text-accent-secondary" /> Activity Log
            </h3>
            
            <div className="flex flex-col gap-3 relative pl-3 border-l border-light mt-1">
              <div className="relative">
                <div className="absolute left-[-16px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-primary border-2 border-primary" />
                <span className="text-[9px] text-muted uppercase block font-bold">Workspace Active</span>
                <p className="text-[11px] text-secondary leading-relaxed">
                  Streak extended to <strong className="text-primary">{streak} days</strong>. Today's focus session locked.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[-16px] top-1.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-primary" />
                <span className="text-[9px] text-muted uppercase block font-bold">Progress Milestone</span>
                <p className="text-[11px] text-secondary leading-relaxed">
                  Earned <strong className="text-primary">{totalPoints} total XP</strong> on target roadmap pathway.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
