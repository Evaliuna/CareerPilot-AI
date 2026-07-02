import React from 'react';
import { Clock, Calendar, CheckSquare, Square, Target, FileText } from 'lucide-react';

export default function StudyPlanner({ 
  analysis, 
  completedStudyPlannerItems, 
  onToggleStudyPlannerItem 
}) {
  const { role, studyPlanner } = analysis;
  const { dailyTasks, weeklyGoals, monthlyPlan } = studyPlanner;

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          Workspace Study Planner
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Review and execute your adaptive learning tasks. These targets adjust automatically to bridge your current skill gaps.
        </p>
      </div>

      <div className="study-planner-grid">
        {/* Left Column: Daily Tasks & Weekly Milestones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Daily Tasks */}
          <div className="glass-panel planner-card">
            <div className="card-header-with-icon">
              <div className="card-icon-container">
                <Clock size={16} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Daily Skills Practice</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Focused daily micro-learning</span>
              </div>
            </div>

            <div className="planner-task-list">
              {dailyTasks.map((task) => {
                const itemId = `study_daily_${role.id}_${task.id}`;
                const isChecked = !!completedStudyPlannerItems[itemId];
                return (
                  <div key={task.id} className="planner-task-item">
                    <div className="planner-checkbox-container">
                      <button 
                        type="button" 
                        className="planner-checkbox" 
                        onClick={() => onToggleStudyPlannerItem(itemId)}
                        aria-label={`Mark task "${task.task}" as ${isChecked ? 'incomplete' : 'complete'}`}
                        style={{ background: isChecked ? 'var(--accent-primary)' : 'transparent', borderColor: isChecked ? 'var(--accent-primary)' : 'var(--border-medium)' }}
                      >
                        {isChecked && <span style={{ color: 'white', fontSize: '9px', fontWeight: 'bold' }}>✓</span>}
                      </button>
                    </div>
                    <div className="planner-task-content">
                      <h4 className={`planner-task-title ${isChecked ? 'completed' : ''}`}>
                        {task.task}
                      </h4>
                      <p className="planner-task-desc">{task.description}</p>
                      <span className="planner-task-duration">{task.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekly Goals */}
          <div className="glass-panel planner-card">
            <div className="card-header-with-icon">
              <div className="card-icon-container" style={{ color: 'var(--color-success)', background: 'var(--success-glow)' }}>
                <Target size={16} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Weekly Milestones</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Project pacing and milestones</span>
              </div>
            </div>

            <div className="planner-task-list">
              {weeklyGoals.map((goal) => {
                const itemId = `study_weekly_${role.id}_${goal.id}`;
                const isChecked = !!completedStudyPlannerItems[itemId];
                return (
                  <div key={goal.id} className="planner-task-item">
                    <div className="planner-checkbox-container">
                      <button 
                        type="button" 
                        className="planner-checkbox" 
                        onClick={() => onToggleStudyPlannerItem(itemId)}
                        aria-label={`Mark goal "${goal.goal}" as ${isChecked ? 'incomplete' : 'complete'}`}
                        style={{ background: isChecked ? 'var(--accent-primary)' : 'transparent', borderColor: isChecked ? 'var(--accent-primary)' : 'var(--border-medium)' }}
                      >
                        {isChecked && <span style={{ color: 'white', fontSize: '9px', fontWeight: 'bold' }}>✓</span>}
                      </button>
                    </div>
                    <div className="planner-task-content">
                      <h4 className={`planner-task-title ${isChecked ? 'completed' : ''}`}>
                        {goal.goal}
                      </h4>
                      <p className="planner-task-desc">{goal.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Monthly Roadmap Targets */}
        <div className="glass-panel planner-card">
          <div className="card-header-with-icon">
            <div className="card-icon-container" style={{ color: 'var(--accent-secondary)', background: 'rgba(168, 85, 247, 0.1)' }}>
              <Calendar size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Monthly Roadmap</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Key objectives for the next 30 days</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {monthlyPlan.map((plan) => {
              const itemId = `study_monthly_${role.id}_${plan.id}`;
              const isChecked = !!completedStudyPlannerItems[itemId];
              return (
                <div 
                  key={plan.id}
                  className="glass-panel" 
                  onClick={() => onToggleStudyPlannerItem(itemId)}
                  style={{ 
                    background: isChecked ? 'rgba(16, 185, 129, 0.02)' : 'rgba(255, 255, 255, 0.01)', 
                    border: isChecked ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid var(--border-light)', 
                    padding: '1.25rem',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isChecked) e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isChecked) e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className={`badge ${isChecked ? 'badge-success' : 'badge-primary'}`}>
                      {plan.targetDate}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {isChecked ? (
                        <CheckSquare size={16} style={{ color: 'var(--color-success)' }} />
                      ) : (
                        <Square size={16} style={{ color: 'var(--text-muted)' }} />
                      )}
                    </div>
                  </div>
                  <h4 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 600, 
                    marginBottom: '6px', 
                    color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)',
                    textDecoration: isChecked ? 'line-through' : 'none'
                  }}>
                    {plan.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {plan.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
