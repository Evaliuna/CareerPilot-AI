import React, { useState } from 'react';
import { 
  FlaskConical, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Bookmark, 
  AlertCircle,
  Play
} from 'lucide-react';

export default function PortfolioLab({ 
  analysis, 
  projectStatuses, 
  onUpdateProjectStatus 
}) {
  const { projectsList } = analysis;
  const [activeProjId, setActiveProjId] = useState(projectsList[0]?.id || '');
  const [completedSubtasks, setCompletedSubtasks] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_lab_subtasks');
      return stored ? JSON.parse(stored) : {};
    } catch(e) { return {}; }
  });

  const activeProj = projectsList.find(p => p.id === activeProjId) || projectsList[0];

  const handleToggleSubtask = (subtaskId) => {
    const next = { ...completedSubtasks, [subtaskId]: !completedSubtasks[subtaskId] };
    setCompletedSubtasks(next);
    localStorage.setItem('cp_lab_subtasks', JSON.stringify(next));
  };

  const getDifficultyColor = (diff) => {
    if (diff === 'Beginner') return 'text-success bg-success-glow border-success/20';
    if (diff === 'Intermediate') return 'text-accent-primary bg-primary-glow border-accent-primary/20';
    return 'text-danger bg-danger-glow border-danger/20';
  };

  // Helper to calculate progress percentage for a project card
  const calculateProjectProgress = (proj) => {
    const gitLen = proj.githubChecklist?.length || 0;
    const depLen = proj.deployChecklist?.length || 0;
    const total = gitLen + depLen;
    if (total === 0) return 0;

    let completed = 0;
    for (let i = 0; i < gitLen; i++) {
      if (completedSubtasks[`task_${proj.id}_git_${i}`]) completed++;
    }
    for (let i = 0; i < depLen; i++) {
      if (completedSubtasks[`task_${proj.id}_dep_${i}`]) completed++;
    }

    return Math.round((completed / total) * 100);
  };

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-primary flex items-center gap-2">
          <FlaskConical size={20} className="text-accent-primary" /> Portfolio Laboratory Workstation
        </h2>
        <p className="text-xs text-secondary mt-1">
          Develop portfolio blueprints that validate your expertise. Update project status and check off repository settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Projects List */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Recommended Blueprints</span>
          <div className="flex flex-col gap-3">
            {projectsList.map(proj => {
              const currentStatus = projectStatuses[proj.id] || 'Not Started';
              const isSelected = activeProjId === proj.id;
              const progressPct = calculateProjectProgress(proj);
              
              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjId(proj.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all flex flex-col gap-2 ${
                    isSelected 
                      ? 'bg-primary border-accent-primary/40 shadow-lg shadow-accent-primary/5' 
                      : 'bg-subtle border-light hover:border-accent-primary/20'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-xs font-bold text-primary truncate">{proj.title}</h4>
                    <span className={`text-[8px] uppercase font-bold px-2 py-0.5 rounded-full border ${getDifficultyColor(proj.difficulty)}`}>
                      {proj.difficulty}
                    </span>
                  </div>
                  
                  <span className="text-[10px] text-secondary line-clamp-2">{proj.description}</span>

                  {/* Project Progress Bar */}
                  <div className="mt-1">
                    <div className="flex justify-between text-[9px] text-muted mb-1">
                      <span>Tasks Done</span>
                      <span>{progressPct}%</span>
                    </div>
                    <div className="w-full bg-primary/50 h-1 rounded-full overflow-hidden border border-light">
                      <div className="bg-accent-gradient h-full rounded-full" style={{ width: `${progressPct}%` }} />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-light/50 text-[10px]">
                    <span className="text-muted">{proj.timeEstimate}</span>
                    <span className={`font-semibold ${
                      currentStatus === 'Completed' 
                        ? 'text-success' 
                        : currentStatus === 'In Progress' 
                          ? 'text-accent-primary' 
                          : 'text-muted'
                    }`}>
                      {currentStatus}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Columns: Active project blueprint workbench */}
        {activeProj ? (
          <div className="glass-panel p-6 lg:col-span-2 flex flex-col gap-6">
            
            {/* Workbench header */}
            <div className="flex justify-between items-start flex-wrap gap-4 border-b border-light pb-4">
              <div>
                <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-full border ${getDifficultyColor(activeProj.difficulty)}`}>
                  {activeProj.difficulty} Tier
                </span>
                <h3 className="text-base font-bold text-primary mt-2">{activeProj.title}</h3>
                <span className="text-xs text-muted block mt-1">Skills Gained: {activeProj.skillsGained}</span>
              </div>

              {/* Status Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-muted font-bold uppercase tracking-wider block">Status</label>
                <select
                  value={projectStatuses[activeProj.id] || 'Not Started'}
                  onChange={(e) => onUpdateProjectStatus(activeProj.id, e.target.value)}
                  className="form-select text-xs py-1.5 px-3"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Description & Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase text-muted tracking-wider block mb-1 font-bold">Blueprint Description</span>
                <p className="text-xs text-secondary leading-relaxed">{activeProj.description}</p>
              </div>
              <div className="p-3 bg-primary-glow border border-accent-primary/10 rounded-lg">
                <span className="text-[10px] uppercase text-accent-primary tracking-wider block mb-1 font-bold">Resume & Portfolio Impact</span>
                <p className="text-xs text-secondary leading-relaxed">{activeProj.resumeImpact}</p>
              </div>
            </div>

            {/* Checklists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-light pt-6">
              
              {/* GitHub Settings */}
              <div>
                <span className="text-[10px] uppercase text-muted tracking-wider block mb-3 font-bold flex items-center gap-1.5">
                  <Github size={14} className="text-primary" /> Repository Checklist
                </span>
                <div className="flex flex-col gap-2.5">
                  {activeProj.githubChecklist && activeProj.githubChecklist.map((task, idx) => {
                    const taskId = `task_${activeProj.id}_git_${idx}`;
                    const checked = !!completedSubtasks[taskId];
                    return (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 cursor-pointer text-xs text-secondary"
                        onClick={() => handleToggleSubtask(taskId)}
                      >
                        <input 
                          type="checkbox" 
                          checked={checked} 
                          onChange={() => {}} 
                          className="cursor-pointer"
                        />
                        <span className={checked ? 'text-muted line-through' : 'text-secondary'}>{task}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deployment Settings */}
              <div>
                <span className="text-[10px] uppercase text-muted tracking-wider block mb-3 font-bold flex items-center gap-1.5">
                  <ExternalLink size={14} className="text-accent-secondary" /> Deploy Checklist
                </span>
                <div className="flex flex-col gap-2.5">
                  {activeProj.deployChecklist && activeProj.deployChecklist.map((task, idx) => {
                    const taskId = `task_${activeProj.id}_dep_${idx}`;
                    const checked = !!completedSubtasks[taskId];
                    return (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 cursor-pointer text-xs text-secondary"
                        onClick={() => handleToggleSubtask(taskId)}
                      >
                        <input 
                          type="checkbox" 
                          checked={checked} 
                          onChange={() => {}} 
                          className="cursor-pointer"
                        />
                        <span className={checked ? 'text-muted line-through' : 'text-secondary'}>{task}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        ) : (
          <div className="glass-panel p-12 text-center text-xs text-muted lg:col-span-2">
            No active project loaded.
          </div>
        )}
      </div>

    </div>
  );
}
