import React, { useState } from 'react';
import { 
  BookOpen, 
  Youtube, 
  Code, 
  Award, 
  Clock, 
  Layers, 
  ExternalLink,
  Search,
  Filter
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter skills list based on search and category choice
  const filteredSkills = allSkillsList.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                            skill.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const [activeSkillId, setActiveSkillId] = useState(allSkillsList[0]?.id || '');
  const activeSkill = allSkillsList.find(s => s.id === activeSkillId) || filteredSkills[0] || allSkillsList[0];

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
        
        {/* Left Side: Skills Catalog list + Search & Filters */}
        <div className="glass-panel p-4 flex flex-col gap-3 lg:col-span-1 max-h-[580px] overflow-y-auto pr-2">
          <span className="text-[10px] uppercase text-muted tracking-wider block font-bold">Skills Catalog</span>
          
          {/* Search bar */}
          <div className="relative flex items-center bg-primary border border-light rounded-lg px-2.5 py-1.5">
            <Search size={14} className="text-muted mr-1.5 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search skills..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 outline-none text-xs text-primary w-full"
            />
          </div>

          {/* Category Dropdown Filter */}
          <div className="flex items-center gap-1.5 bg-primary border border-light rounded-lg px-2 py-1.5">
            <Filter size={12} className="text-muted mr-1 flex-shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent border-0 outline-none text-xs text-primary w-full cursor-pointer pr-4"
            >
              <option value="all">All Categories</option>
              <option value="foundations">Foundations</option>
              <option value="core">Core Skills</option>
              <option value="projects">Projects</option>
              <option value="interview">Interview Prep</option>
            </select>
          </div>

          {/* Filtered Skills List */}
          <div className="flex flex-col gap-2 mt-1">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
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
              ))
            ) : (
              <span className="text-xs text-muted text-center py-4">No skills found.</span>
            )}
          </div>
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
                      className="p-3 bg-subtle border border-light rounded-lg flex items-center justify-between group hover:border-accent-primary/20 transition-all text-xs font-semibold text-secondary hover:text-primary"
                    >
                      <span className="flex items-center gap-2">
                        <Code size={14} className="text-accent-primary" /> Official Technical Docs
                      </span>
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>

                    <a 
                      href={activeSkill.ytUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-subtle border border-light rounded-lg flex items-center justify-between group hover:border-danger/20 transition-all text-xs font-semibold text-secondary hover:text-primary"
                    >
                      <span className="flex items-center gap-2">
                        <Youtube size={14} className="text-danger" /> YouTube video tutorial
                      </span>
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-muted tracking-wider block mb-2 font-bold">Certificate & Practices</span>
                  <div className="flex flex-col gap-2">
                    <a 
                      href={activeSkill.practiceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-subtle border border-light rounded-lg flex items-center justify-between group hover:border-accent-secondary/20 transition-all text-xs font-semibold text-secondary hover:text-primary"
                    >
                      <span className="flex items-center gap-2">
                        <Award size={14} className="text-accent-secondary" /> Practice Sandboxes
                      </span>
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>

                    <div className="p-3 bg-primary-glow border border-accent-primary/10 rounded-lg text-xs">
                      <span className="text-[10px] text-accent-primary font-bold uppercase tracking-wider block mb-1">Target Credential</span>
                      <span className="font-semibold text-primary">{activeSkill.certName}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="glass-panel p-12 text-center text-xs text-muted lg:col-span-3">
            No active skill loaded or matches found.
          </div>
        )}
      </div>

    </div>
  );
}
