import React, { useState } from 'react';
import { 
  Check, 
  Circle, 
  Map, 
  BookOpen, 
  Clock, 
  ExternalLink,
  Milestone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function LearningRoadmap({ analysis, completedRoadmapItems, onToggleRoadmapItem }) {
  const { roadmapPhases } = analysis;
  const [expandedPhase, setExpandedPhase] = useState(0);

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Page Header */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            <Map size={20} className="text-accent-primary" /> Expanded Learning Curriculum
          </h2>
          <p className="text-xs text-secondary mt-1">
            An 8-phase structural learning path tailored for this career track. Check milestones to save progress.
          </p>
        </div>
      </div>

      {/* Accordion / Timeline Phases */}
      <div className="flex flex-col gap-4 relative pl-4 border-l border-light">
        {roadmapPhases.map((phase, index) => {
          const isExpanded = expandedPhase === index;
          const isCompleted = phase.percentage === 100;
          
          return (
            <div 
              key={phase.title} 
              className={`glass-panel p-5 relative transition-all duration-300 ${
                isCompleted ? 'border-success/20 bg-success-glow-subtle' : 'border-light'
              }`}
            >
              {/* Timeline Indicator Node */}
              <div 
                className={`absolute left-[-21px] top-[26px] w-[13px] h-[13px] rounded-full border-2 transition-all ${
                  isCompleted 
                    ? 'bg-success border-success' 
                    : phase.percentage > 0 
                      ? 'bg-accent-primary border-accent-primary' 
                      : 'bg-primary-glow border-light'
                }`}
              />

              {/* Accordion Header Toggle */}
              <div 
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setExpandedPhase(isExpanded ? null : index)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] text-muted font-bold tracking-wider uppercase">Phase {index + 1}</span>
                    <h3 className="text-sm font-bold text-primary">{phase.title}</h3>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-light text-muted font-semibold">
                      {phase.estimatedHours} Hours
                    </span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed max-w-2xl">{phase.desc}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] text-muted block">Completion</span>
                    <span className="text-xs font-bold text-primary">{phase.percentage}%</span>
                  </div>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {/* Accordion Body Content */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-light grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
                  
                  {/* Skills lists */}
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <div>
                      <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold flex items-center gap-1">
                        <BookOpen size={12} /> Target Skills to Master
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.length > 0 ? (
                          phase.skills.map(s => (
                            <div 
                              key={s.id}
                              className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                                s.possessed 
                                  ? 'bg-success-glow border-success/30 text-success' 
                                  : 'bg-subtle border-light text-secondary'
                              }`}
                            >
                              {s.possessed ? <Check size={10} /> : <Circle size={8} />}
                              {s.name}
                            </div>
                          ))
                        ) : (
                          <span className="text-xs text-muted">No specific skill checkpoints mapped to this phase.</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold flex items-center gap-1">
                        <Milestone size={12} /> Workspace Milestones
                      </span>
                      <div className="flex flex-col gap-2">
                        {phase.milestones.map((milestone, mIdx) => {
                          const itemId = `rm_phase_${index}_ms_${mIdx}`;
                          const checked = !!completedRoadmapItems[itemId];
                          return (
                            <div 
                              key={mIdx}
                              className={`p-3 rounded-lg border flex items-start gap-3 cursor-pointer transition-all ${
                                checked ? 'bg-success-glow-subtle border-success/20' : 'bg-subtle border-light hover:border-accent-primary/20'
                              }`}
                              onClick={() => onToggleRoadmapItem(itemId)}
                            >
                              <input 
                                type="checkbox" 
                                checked={checked} 
                                onChange={() => {}} // handled by click
                                className="mt-0.5 cursor-pointer"
                              />
                              <div className="flex-1">
                                <span className={`text-xs font-semibold block ${checked ? 'text-success line-through' : 'text-primary'}`}>
                                  {milestone}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Prerequisites and resources */}
                  <div className="flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-light pt-4 lg:pt-0 lg:pl-6">
                    <div>
                      <span className="text-[10px] uppercase text-muted tracking-wider block mb-1 font-bold">Prerequisites</span>
                      <span className="text-xs text-primary">{phase.prerequisites}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold">Recommended Resources</span>
                      <div className="flex flex-col gap-2">
                        {phase.resources.map((res, rIdx) => (
                          <a 
                            key={rIdx} 
                            href={res.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-subtle border border-light rounded-lg flex items-center justify-between text-xs text-secondary hover:border-accent-primary hover:text-primary transition-all"
                          >
                            <span className="truncate">{res.name}</span>
                            <ExternalLink size={12} className="opacity-60 flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
