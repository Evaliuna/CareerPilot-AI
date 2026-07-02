import React, { useState } from 'react';
import { Compass, ExternalLink, Sparkles, Filter, Award, Code2, Users2, Landmark, Search } from 'lucide-react';

export default function OpportunityHub({ analysis }) {
  const { opportunitiesList } = analysis;
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Generic global opportunities to append
  const globalOpportunities = [
    { title: "GitHub Good First Issues", type: "Open Source", provider: "GitHub", link: "https://github.com/topics/good-first-issue", description: "Start contributing to open source repositories by tackling beginner-friendly verified tickets." },
    { title: "Devpost Global AI Hackathon Series", type: "Hackathon", provider: "Devpost", link: "https://devpost.com/hackathons", description: "Compete with designers, builders, and engineers globally in themed software challenges." },
    { title: "Google Developers Program Certifications", type: "Certification", provider: "Google", link: "https://developers.google.com", description: "Free certification courses covering Android, Flutter, TensorFlow, Cloud, and Web performance." },
    { title: "Open Source Contribution Guides", type: "Open Source", provider: "First Contributions", link: "https://github.com/firstcontributions/first-contributions", description: "Learn how to contribute to open-source project layouts with step-by-step Git repository walkthroughs." }
  ];

  const allOpportunities = [...opportunitiesList, ...globalOpportunities];

  // Apply filters
  const filtered = allOpportunities.filter(opp => {
    const matchesCategory = selectedFilter === 'all' || 
                            opp.type.toLowerCase().includes(selectedFilter.toLowerCase()) || 
                            opp.provider.toLowerCase().includes(selectedFilter.toLowerCase());
    
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getIcon = (type) => {
    if (type.includes('Fellowship')) return <Landmark size={16} className="text-accent-primary" />;
    if (type.includes('Hackathon')) return <Sparkles size={16} className="text-warning" />;
    if (type.includes('Open Source')) return <Code2 size={16} className="text-accent-secondary" />;
    if (type.includes('Certification')) return <Award size={16} className="text-success" />;
    return <Users2 size={16} className="text-muted" />;
  };

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            <Compass size={20} className="text-accent-primary" /> Curated Opportunities Hub
          </h2>
          <p className="text-xs text-secondary mt-1">
            Access active fellowships, hackathons, open source repositories, certifications, and remote internships.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search bar */}
          <div className="relative flex items-center bg-subtle border border-light rounded-lg px-2.5 py-1.5 w-60">
            <Search size={13} className="text-muted mr-1.5 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search opportunities..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 outline-none text-xs text-primary w-full"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-subtle p-1.5 rounded-lg border border-light">
            <Filter size={12} className="text-muted ml-1" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-transparent text-xs font-bold text-primary border-0 focus:outline-none cursor-pointer pr-4"
            >
              <option value="all">All Opportunities</option>
              <option value="fellowship">Fellowships</option>
              <option value="hackathon">Hackathons</option>
              <option value="open source">Open Source</option>
              <option value="internship">Internships</option>
              <option value="certification">Certifications</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.length > 0 ? (
          filtered.map((opp, idx) => (
            <div key={idx} className="glass-panel p-5 flex flex-col justify-between gap-4 transition-all hover:translate-y-[-2px]">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold text-accent-secondary tracking-wider">{opp.provider}</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-light text-muted font-bold">{opp.type}</span>
                </div>
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-1">
                  {getIcon(opp.type)} {opp.title}
                </h4>
                <p className="text-xs text-secondary leading-relaxed">{opp.description}</p>
              </div>

              <div className="border-t border-light/50 pt-3 flex justify-between items-center text-xs">
                <span className="text-muted">Target: Global Candidates</span>
                <a 
                  href={opp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-primary font-bold hover:underline flex items-center gap-1"
                >
                  Apply / View Details <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-panel p-12 text-center text-xs text-muted col-span-2">
            No matching opportunities found.
          </div>
        )}
      </div>

    </div>
  );
}
