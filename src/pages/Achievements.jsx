import React from 'react';
import { Trophy, Award, Sparkles, Star, Flame, Lock } from 'lucide-react';

export default function Achievements({ analysis }) {
  const { growthMetrics } = analysis;
  const { badges, level, totalPoints, streak } = growthMetrics;

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            <Trophy size={20} className="text-warning" /> Gamified Achievements & Level Status
          </h2>
          <p className="text-xs text-secondary mt-1">
            Complete milestones, log checklist drills, and build projects to unlock premium badges and levels.
          </p>
        </div>

        {/* Level stats */}
        <div className="flex items-center gap-4 relative z-10 bg-subtle p-3 rounded-lg border border-light">
          <div className="w-12 h-12 rounded-full bg-warning-glow border-2 border-warning flex items-center justify-center text-sm font-black text-warning">
            {level}
          </div>
          <div>
            <span className="text-[10px] text-muted block uppercase font-bold">Pilot Status</span>
            <span className="text-xs font-semibold text-secondary">
              Level {level} Professional
            </span>
          </div>
        </div>
        <div className="welcome-glow" />
      </div>

      {/* Grid: Badges list */}
      <div className="flex flex-col gap-4">
        <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Your Badge Achievements</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map(badge => (
            <div 
              key={badge.id} 
              className={`p-5 rounded-lg border flex items-start gap-4 transition-all duration-300 ${
                badge.unlocked 
                  ? 'bg-subtle border-light hover:border-accent-primary/20 hover:translate-y-[-2px]' 
                  : 'bg-subtle/50 border-light/40 opacity-60'
              }`}
            >
              {/* Badge Icon Node */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner ${
                badge.unlocked ? 'bg-primary-glow border border-accent-primary/20' : 'bg-light border border-light'
              }`}>
                {badge.unlocked ? badge.icon : <Lock size={16} className="text-muted" />}
              </div>

              {/* Detail */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-primary">{badge.title}</h4>
                  {badge.unlocked ? (
                    <span className="text-[8px] text-success font-bold uppercase tracking-wider bg-success-glow px-1.5 py-0.5 rounded border border-success/15">Unlocked</span>
                  ) : (
                    <span className="text-[8px] text-muted font-bold uppercase tracking-wider bg-light px-1.5 py-0.5 rounded border border-light">Locked</span>
                  )}
                </div>
                <p className="text-[11px] text-secondary leading-relaxed mt-1">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone status tracker */}
      <div className="glass-panel p-5">
        <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <Star size={14} className="text-accent-secondary" /> Growth Metric Progression
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between text-xs font-semibold text-primary mb-1">
              <span>Next Level (LVL {level} → {level + 1})</span>
              <span>{Math.round((totalPoints % 400) / 4)}%</span>
            </div>
            <div className="w-full bg-light h-1.5 rounded-full overflow-hidden">
              <div className="bg-accent-gradient h-full rounded-full" style={{ width: `${(totalPoints % 400) / 4}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-primary mb-1">
              <span>Streak Milestone Progress</span>
              <span>{Math.min(100, Math.round((streak / 30) * 100))}%</span>
            </div>
            <div className="w-full bg-light h-1.5 rounded-full overflow-hidden">
              <div className="bg-success h-full rounded-full" style={{ width: `${Math.min(100, (streak / 30) * 100)}%` }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
