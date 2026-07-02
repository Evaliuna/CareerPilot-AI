import React, { useState } from 'react';
import { Calendar, CheckSquare, Square, Clock, Target, CalendarRange, Landmark } from 'lucide-react';

export default function StudyPlanner({ 
  analysis, 
  completedStudyPlannerItems, 
  onToggleStudyPlannerItem 
}) {
  const { studyPlanner } = analysis;
  const [activeSubTab, setActiveSubTab] = useState('daily');

  const subTabs = [
    { id: 'daily', name: 'Daily Drills', icon: Clock },
    { id: 'weekly', name: 'Weekly Goals', icon: Target },
    { id: 'monthly', name: 'Monthly Milestones', icon: CalendarRange },
    { id: 'quarterly', name: 'Quarterly Reviews', icon: Landmark }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-primary flex items-center gap-2">
          <Calendar size={20} className="text-accent-primary" /> Study Planner & Checklists
        </h2>
        <p className="text-xs text-secondary mt-1">
          Plan, track, and complete daily drills, weekly goals, monthly milestones, and quarterly targets.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 border-b border-light pb-2 overflow-x-auto">
        {subTabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeSubTab === tab.id 
                  ? 'bg-primary text-primary border border-light shadow' 
                  : 'text-secondary hover:text-primary hover:bg-subtle'
              }`}
              onClick={() => setActiveSubTab(tab.id)}
            >
              <Icon size={14} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Checklist Panel */}
      <div className="glass-panel p-6">
        {activeSubTab === 'daily' && (
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Daily Drills (Repeatable Exercises)</span>
            <div className="flex flex-col gap-3">
              {studyPlanner.daily.map(item => {
                const checked = !!completedStudyPlannerItems[item.id];
                return (
                  <div 
                    key={item.id} 
                    className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                      checked ? 'bg-success-glow-subtle border-success/20' : 'bg-subtle border-light hover:border-accent-primary/20'
                    }`}
                    onClick={() => onToggleStudyPlannerItem(item.id)}
                  >
                    <div className="flex items-center gap-3">
                      {checked ? (
                        <CheckSquare size={16} className="text-success" />
                      ) : (
                        <Square size={16} className="text-muted" />
                      )}
                      <span className={`text-xs font-semibold block ${checked ? 'text-success line-through' : 'text-primary'}`}>
                        {item.task}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted">{item.duration}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSubTab === 'weekly' && (
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Weekly Milestones (Project & Concept Drills)</span>
            <div className="flex flex-col gap-3">
              {studyPlanner.weekly.map(item => {
                const checked = !!completedStudyPlannerItems[item.id];
                return (
                  <div 
                    key={item.id} 
                    className={`p-3.5 rounded-lg border flex items-start gap-3 cursor-pointer transition-all ${
                      checked ? 'bg-success-glow-subtle border-success/20' : 'bg-subtle border-light hover:border-accent-primary/20'
                    }`}
                    onClick={() => onToggleStudyPlannerItem(item.id)}
                  >
                    {checked ? (
                      <CheckSquare size={16} className="text-success mt-0.5" />
                    ) : (
                      <Square size={16} className="text-muted mt-0.5" />
                    )}
                    <div>
                      <span className={`text-xs font-semibold block ${checked ? 'text-success line-through' : 'text-primary'}`}>
                        {item.goal}
                      </span>
                      <span className="text-[10px] text-secondary leading-relaxed mt-1 block">{item.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSubTab === 'monthly' && (
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Monthly Strategy & Evaluations</span>
            <div className="flex flex-col gap-3">
              {studyPlanner.monthly.map(item => {
                const checked = !!completedStudyPlannerItems[item.id];
                return (
                  <div 
                    key={item.id} 
                    className={`p-4 rounded-lg border flex items-start justify-between gap-4 cursor-pointer transition-all ${
                      checked ? 'bg-success-glow-subtle border-success/20' : 'bg-subtle border-light hover:border-accent-primary/20'
                    }`}
                    onClick={() => onToggleStudyPlannerItem(item.id)}
                  >
                    <div className="flex items-start gap-3">
                      {checked ? (
                        <CheckSquare size={16} className="text-success mt-0.5" />
                      ) : (
                        <Square size={16} className="text-muted mt-0.5" />
                      )}
                      <div>
                        <span className={`text-xs font-bold block ${checked ? 'text-success line-through' : 'text-primary'}`}>
                          {item.title}
                        </span>
                        <span className="text-[10px] text-secondary leading-relaxed mt-1 block">{item.description}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-muted whitespace-nowrap mt-0.5">{item.targetDate}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSubTab === 'quarterly' && (
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Quarterly Roadmap & Outreach Goals</span>
            <div className="flex flex-col gap-3">
              {studyPlanner.quarterly.map(item => {
                const checked = !!completedStudyPlannerItems[item.id];
                return (
                  <div 
                    key={item.id} 
                    className={`p-4 rounded-lg border flex items-start justify-between gap-4 cursor-pointer transition-all ${
                      checked ? 'bg-success-glow-subtle border-success/20' : 'bg-subtle border-light hover:border-accent-primary/20'
                    }`}
                    onClick={() => onToggleStudyPlannerItem(item.id)}
                  >
                    <div className="flex items-start gap-3">
                      {checked ? (
                        <CheckSquare size={16} className="text-success mt-0.5" />
                      ) : (
                        <Square size={16} className="text-muted mt-0.5" />
                      )}
                      <div>
                        <span className={`text-xs font-bold block ${checked ? 'text-success line-through' : 'text-primary'}`}>
                          {item.milestone}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-muted whitespace-nowrap mt-0.5">{item.target}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
