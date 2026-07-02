import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle, 
  HelpCircle, 
  HelpCircle as QuestionIcon, 
  ShieldAlert, 
  CheckSquare, 
  Square,
  Sparkles
} from 'lucide-react';

export default function InterviewCenter({ analysis }) {
  const { interviewData } = analysis;
  const { behavioral, technical, systemDesign, readinessScore } = interviewData;

  const [activeSubTab, setActiveSubTab] = useState('technical');
  const [resumeChecklist, setResumeChecklist] = useState(() => {
    try {
      const stored = localStorage.getItem('cp_interview_resume');
      return stored ? JSON.parse(stored) : {};
    } catch(e) { return {}; }
  });

  const toggleResumeItem = (id) => {
    const next = { ...resumeChecklist, [id]: !resumeChecklist[id] };
    setResumeChecklist(next);
    localStorage.setItem('cp_interview_resume', JSON.stringify(next));
  };

  const resumeItems = [
    { id: "res_1", label: "Include target role title at top of resume profile summary" },
    { id: "res_2", label: "Provide links to 2 production-grade deployed portfolio projects" },
    { id: "res_3", label: "Outline concrete performance improvements (e.g. reduced load times by 20%)" },
    { id: "res_4", label: "List core domain technical skills matching recruiters target requirements" }
  ];

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Header and readiness ring */}
      <div className="glass-panel p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            <Briefcase size={20} className="text-accent-primary" /> Technical Interview Preparation Center
          </h2>
          <p className="text-xs text-secondary mt-1">
            Rehearse common programming questions, mock behavioral screens, system design queries, and check your resume readiness.
          </p>
        </div>

        {/* Interview Readiness ring */}
        <div className="flex items-center gap-4 bg-subtle p-3 rounded-lg border border-light">
          <div className="w-12 h-12 rounded-full border-4 border-accent-primary/20 flex items-center justify-center text-xs font-black text-primary">
            {readinessScore}%
          </div>
          <div>
            <span className="text-[10px] text-muted block uppercase font-bold">Interview Readiness</span>
            <span className="text-xs font-semibold text-secondary">
              {readinessScore > 75 ? 'Ready for Screenings' : 'More Practice Required'}
            </span>
          </div>
        </div>
      </div>

      {/* Grid: Q&As + Resume checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Columns: Question tabs */}
        <div className="glass-panel p-5 lg:col-span-2 flex flex-col gap-4">
          <div className="flex gap-2 border-b border-light pb-2 overflow-x-auto">
            {['technical', 'behavioral', 'systemDesign'].map(tab => (
              <button
                key={tab}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeSubTab === tab 
                    ? 'bg-primary text-primary border border-light' 
                    : 'text-muted hover:text-secondary'
                }`}
                onClick={() => setActiveSubTab(tab)}
              >
                {tab === 'systemDesign' ? 'System Design' : `${tab} Qs`}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {activeSubTab === 'technical' && technical.map((item, idx) => (
              <QuestionCard key={idx} index={idx} item={item} />
            ))}
            {activeSubTab === 'behavioral' && behavioral.map((item, idx) => (
              <QuestionCard key={idx} index={idx} item={item} />
            ))}
            {activeSubTab === 'systemDesign' && systemDesign.map((item, idx) => (
              <QuestionCard key={idx} index={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Right Column: Resume checklist */}
        <div className="glass-panel p-5 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary flex items-center gap-2">
            <Sparkles size={16} className="text-warning" /> Resume Audit Checklist
          </h3>
          <p className="text-xs text-secondary leading-relaxed">
            Ensure your CV matches high-speed ATS parsing standards and passes human engineering manager screenings.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            {resumeItems.map(item => {
              const checked = !!resumeChecklist[item.id];
              return (
                <div 
                  key={item.id} 
                  className="flex items-start gap-2.5 cursor-pointer text-xs text-secondary"
                  onClick={() => toggleResumeItem(item.id)}
                >
                  <span className="mt-0.5">
                    {checked ? (
                      <CheckSquare size={14} className="text-success" />
                    ) : (
                      <Square size={14} className="text-muted" />
                    )}
                  </span>
                  <span className={checked ? 'text-muted line-through' : 'text-secondary'}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

// Micro questioncard component
const QuestionCard = ({ item, index }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="p-4 bg-subtle border border-light rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-start gap-2">
        <span className="text-[9px] uppercase font-bold text-accent-secondary tracking-wider">{item.topic}</span>
        <span className="text-[9px] text-muted">Q{index + 1}</span>
      </div>
      <h4 className="text-xs font-bold text-primary">{item.q}</h4>
      
      <button 
        onClick={() => setRevealed(!revealed)}
        className="text-[10px] text-accent-primary font-bold text-left mt-1 hover:underline"
      >
        {revealed ? 'Hide Sample Key Answer Guidance' : 'Reveal Sample Key Answer Guidance'}
      </button>

      {revealed && (
        <div className="mt-2 p-3 bg-primary-glow border border-accent-primary/10 rounded text-[11px] text-secondary leading-relaxed animate-fade-in">
          <strong>Key Answer Points:</strong> {item.guidance || "Structure your response using the STAR model (Situation, Task, Action, Result). Mention specific technologies, bottlenecks encountered, and quantitative output results (e.g. memory footprints or load latency)."}
        </div>
      )}
    </div>
  );
};
