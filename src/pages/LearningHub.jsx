import React, { useState } from 'react';
import { 
  BookOpen, 
  Youtube, 
  Code, 
  Award, 
  Clock, 
  Layers, 
  ExternalLink 
} from 'lucide-react';

export default function LearningHub({ analysis }) {
  const { role } = analysis;

  // Flatten all skills to show in list
  const allSkillsList = [
    ...(role.skills.foundations || []),
    ...(role.skills.core || []),
    ...(role.skills.projects || []),
    ...(role.skills.interview || [])
  ];

  const [activeSkillId, setActiveSkillId] = useState(allSkillsList[0]?.id || '');

  const activeSkill = allSkillsList.find(s => s.id === activeSkillId) || allSkillsList[0];

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-primary flex items-center gap-2">
          <BookOpen size={20} className="text-accent-primary" /> Skill Reference & Learning Hub
        </h2>
        <p className="text-xs text-secondary mt-1">
          Select a skill to inspect official docs, free tutorials, certifications, and mini-project ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Side: Skills Catalog list */}
        <div className="glass-panel p-4 flex flex-col gap-2 max-h-[500px] overflow-y-auto lg:col-span-1 pr-2">
          <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold">Skills Catalog</span>
          {allSkillsList.map((skill, index) => (
            <button
              key={skill.id}
              onClick={() => setActiveSkillId(skill.id)}
              className={`p-2.5 rounded-lg text-left transition-all text-xs font-semibold flex items-center justify-between ${
                activeSkillId === skill.id 
                  ? 'bg-primary text-primary border border-accent-primary/20 shadow' 
                  : 'text-secondary hover:bg-subtle hover:text-primary'
              }`}
            >
              <span className="truncate">{skill.name}</span>
              <span className="text-[9px] text-muted flex-shrink-0">#{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Skill detail board */}
        {activeSkill ? (
          <div className="glass-panel p-6 lg:col-span-3 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-4">
              
              {/* Header block */}
              <div className="flex justify-between items-start flex-wrap gap-2 border-b border-light pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] uppercase font-bold text-accent-primary tracking-wider">{activeSkill.category}</span>
                    <span className="text-[10px] text-muted">• Priority: {activeSkill.priority}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{activeSkill.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted bg-subtle p-2 rounded-lg border border-light">
                  <Clock size={14} className="text-accent-secondary" />
                  <span>Est: {activeSkill.hours} learning hours</span>
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase text-muted tracking-wider block mb-1 font-bold">Skill Description</span>
                  <p className="text-xs text-secondary leading-relaxed">{activeSkill.description || 'No description seed found.'}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-muted tracking-wider block mb-1 font-bold">Importance in Industry</span>
                  <p className="text-xs text-secondary leading-relaxed">{activeSkill.importance || 'High market relevance.'}</p>
                </div>
              </div>

              {/* Recommended Resources List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-light pt-4">
                <div>
                  <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold">Free Materials & Tutorials</span>
                  <div className="flex flex-col gap-2">
                    <a 
                      href={activeSkill.docUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-subtle border border-light rounded-lg flex items-center justify-between text-xs text-secondary hover:border-accent-primary hover:text-primary transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Code size={14} className="text-accent-primary" /> Official Documentation
                      </span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>

                    <a 
                      href={activeSkill.ytUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-subtle border border-light rounded-lg flex items-center justify-between text-xs text-secondary hover:border-accent-primary hover:text-primary transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Youtube size={14} className="text-danger" /> Free YouTube Tutorial
                      </span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold">Practice & Credentials</span>
                  <div className="flex flex-col gap-2">
                    <a 
                      href={activeSkill.practiceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-subtle border border-light rounded-lg flex items-center justify-between text-xs text-secondary hover:border-accent-primary hover:text-primary transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Layers size={14} className="text-accent-secondary" /> Practice Sandbox Website
                      </span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>

                    <div className="p-2.5 bg-success-glow border border-success/10 rounded-lg flex items-center gap-2 text-xs text-success">
                      <Award size={14} className="flex-shrink-0" />
                      <div className="truncate">
                        <span className="font-bold block">Free Certification Path:</span>
                        <span className="text-[10px] opacity-75">{activeSkill.certName || 'Google Foundations Credential'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mini Project Suggestion */}
            <div className="mt-6 p-4 bg-primary-glow border border-accent-primary/10 rounded-lg">
              <span className="text-[9px] uppercase font-bold text-accent-primary tracking-wider block mb-1">Recommended Mini-Project Blueprint</span>
              <h4 className="text-xs font-bold text-primary mb-1">Sandbox Demo: {activeSkill.name} integration</h4>
              <p className="text-[11px] text-secondary leading-relaxed">
                Build a self-contained command script or simple layout dashboard element that targets the usage parameters of {activeSkill.name}. Commit this to your version control within 2 hours.
              </p>
            </div>

          </div>
        ) : (
          <div className="glass-panel p-12 text-center text-xs text-muted lg:col-span-3">
            No active skill loaded.
          </div>
        )}
      </div>

    </div>
  );
}
