import React, { useState } from 'react';
import { 
  BarChart, 
  HelpCircle, 
  ChevronsUp, 
  Layers, 
  Activity 
} from 'lucide-react';

export default function SkillIntelligence({ analysis }) {
  const { skillsIntel, role } = analysis;
  const { categorized, total, possessedCount, gapCount } = skillsIntel;
  
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Skill metrics stats banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel p-5">
          <span className="text-muted text-xs block mb-1">Total Target Skills</span>
          <div className="flex justify-between items-end">
            <span className="text-2xl font-bold text-primary">{total}</span>
            <span className="text-xs text-secondary mb-1">Required for {role.title}</span>
          </div>
        </div>

        <div className="glass-panel p-5">
          <span className="text-muted text-xs block mb-1">Skills Possessed</span>
          <div className="flex justify-between items-end">
            <span className="text-2xl font-bold text-success">{possessedCount}</span>
            <span className="text-xs text-success mb-1">
              {total > 0 ? Math.round((possessedCount / total) * 100) : 0}% Complete
            </span>
          </div>
        </div>

        <div className="glass-panel p-5">
          <span className="text-muted text-xs block mb-1">Pending Gaps</span>
          <div className="flex justify-between items-end">
            <span className="text-2xl font-bold text-warning">{gapCount}</span>
            <span className="text-xs text-warning mb-1">Requires study focus</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Filtering & Categorization List + Industry Demand */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Categorization */}
        <div className="glass-panel p-5 lg:col-span-2 flex flex-col gap-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h3 className="text-sm font-bold text-primary flex items-center gap-2">
              <Layers size={16} className="text-accent-primary" /> Active Skill Categorization
            </h3>
            
            {/* Filter buttons */}
            <div className="flex gap-1.5 bg-subtle p-0.5 rounded-lg border border-light">
              {['all', 'strong', 'intermediate', 'weak', 'missing'].map(filter => (
                <button
                  key={filter}
                  className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md transition-all ${
                    selectedFilter === filter 
                      ? 'bg-primary text-primary shadow' 
                      : 'text-muted hover:text-secondary'
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Strong */}
            {(selectedFilter === 'all' || selectedFilter === 'strong') && categorized.strong.length > 0 && (
              <div>
                <span className="text-[10px] font-bold text-success tracking-wide uppercase block mb-2">Strong Skills (Expert)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categorized.strong.map(s => (
                    <SkillCard key={s.id} skill={s} level="Strong" colorClass="border-success/20 bg-success-glow text-success" />
                  ))}
                </div>
              </div>
            )}

            {/* Intermediate */}
            {(selectedFilter === 'all' || selectedFilter === 'intermediate') && categorized.intermediate.length > 0 && (
              <div className="mt-2">
                <span className="text-[10px] font-bold text-accent-primary tracking-wide uppercase block mb-2">Intermediate Skills (Competent)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categorized.intermediate.map(s => (
                    <SkillCard key={s.id} skill={s} level="Intermediate" colorClass="border-accent-primary/20 bg-primary-glow text-accent-primary" />
                  ))}
                </div>
              </div>
            )}

            {/* Weak */}
            {(selectedFilter === 'all' || selectedFilter === 'weak') && categorized.weak.length > 0 && (
              <div className="mt-2">
                <span className="text-[10px] font-bold text-warning tracking-wide uppercase block mb-2">Weak Skills (Developing)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categorized.weak.map(s => (
                    <SkillCard key={s.id} skill={s} level="Weak" colorClass="border-warning/20 bg-warning-glow text-warning" />
                  ))}
                </div>
              </div>
            )}

            {/* Missing */}
            {(selectedFilter === 'all' || selectedFilter === 'missing') && categorized.missing.length > 0 && (
              <div className="mt-2">
                <span className="text-[10px] font-bold text-danger tracking-wide uppercase block mb-2">Missing Priority Gaps</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categorized.missing.map(s => (
                    <SkillCard key={s.id} skill={s} level="Missing" colorClass="border-danger/20 bg-danger-glow text-danger" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Industry Demand & Visual Chart */}
        <div className="glass-panel p-5 flex flex-col gap-4 justify-between">
          <div>
            <h3 className="text-sm font-bold text-primary flex items-center gap-2 mb-3">
              <Activity size={16} className="text-accent-secondary" /> Industry Demand Metrics
            </h3>
            
            <p className="text-xs text-secondary leading-relaxed mb-4">
              Market demands are compiled dynamically based on recruiters hiring benchmarks for the <strong className="text-primary">{role.title}</strong> role in global startup ecosystems.
            </p>

            <div className="flex flex-col gap-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-primary mb-1">
                  <span>Market Demand Level</span>
                  <span className="text-accent-primary">{role.marketDemand}</span>
                </div>
                <div className="w-full bg-light h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-accent-gradient h-full rounded-full" 
                    style={{ width: role.marketDemand === 'High' || role.marketDemand === 'Very High' ? '85%' : '60%' }} 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-primary mb-1">
                  <span>Median Salary Range</span>
                  <span className="text-success">{role.salaryRange}</span>
                </div>
                <div className="w-full bg-light h-1.5 rounded-full overflow-hidden">
                  <div className="bg-success h-full rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* SVG priority layout representation */}
          <div className="bg-subtle p-3 rounded-lg border border-light">
            <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold">Relative Priority Distribution</span>
            <div className="flex items-end justify-between h-24 pt-2">
              <div className="flex flex-col items-center gap-1 w-1/4">
                <div className="bg-accent-primary/20 hover:bg-accent-primary/40 transition-all rounded w-full" style={{ height: '70px' }} />
                <span className="text-[9px] text-muted">Found.</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-1/4">
                <div className="bg-accent-secondary/20 hover:bg-accent-secondary/40 transition-all rounded w-full" style={{ height: '85px' }} />
                <span className="text-[9px] text-muted">Core</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-1/4">
                <div className="bg-success/20 hover:bg-success/40 transition-all rounded w-full" style={{ height: '50px' }} />
                <span className="text-[9px] text-muted">Proj</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-1/4">
                <div className="bg-warning/20 hover:bg-warning/40 transition-all rounded w-full" style={{ height: '35px' }} />
                <span className="text-[9px] text-muted">Int.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Reusable micro-component
const SkillCard = ({ skill, level, colorClass }) => {
  const possessed = level === 'Strong' || level === 'Intermediate';
  return (
    <div className={`p-3 rounded-lg border flex flex-col justify-between transition-all hover:translate-y-[-2px] ${colorClass}`}>
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-bold text-primary block truncate">{skill.name}</span>
        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
          possessed ? 'bg-success-glow text-success border border-success/15' : 'bg-danger-glow text-danger border border-danger/15'
        }`}>
          {possessed ? '100% Mastered' : '0% Mastered'}
        </span>
      </div>
      <div className="flex justify-between items-center mt-2 pt-2 border-t border-light/10 text-[9px] opacity-75">
        <span>Priority: {skill.priority}</span>
        <span>{skill.hours} learning hrs</span>
      </div>
    </div>
  );
};
