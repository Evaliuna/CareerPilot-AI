import { CAREER_ROLES } from './dataStore.js';

/**
 * Fuzzy matching helper to check if a user possesses a specific skill
 */
export const checkUserHasSkill = (userSkillsArray, targetSkill) => {
  const targetId = targetSkill.id.toLowerCase();
  const targetName = targetSkill.name.toLowerCase();

  return userSkillsArray.some(userSkill => {
    const cleanSkill = userSkill.trim().toLowerCase();
    if (!cleanSkill) return false;

    // Exact matches
    if (cleanSkill === targetId || cleanSkill === targetName) return true;

    // Common synonyms/aliases mapping
    if (cleanSkill === 'html' && targetId.includes('html')) return true;
    if (cleanSkill === 'css' && targetId.includes('css')) return true;
    if (cleanSkill === 'js' && targetId.includes('js_basics')) return true;
    if (cleanSkill === 'javascript' && targetId.includes('js_basics')) return true;
    if (cleanSkill === 'ts' && targetId.includes('typescript')) return true;
    if (cleanSkill === 'py' && targetId.includes('python')) return true;
    if (cleanSkill === 'docker' && targetId.includes('docker')) return true;
    if (cleanSkill === 'k8s' && targetId.includes('k8s')) return true;
    if (cleanSkill === 'ml' && targetId.includes('ml_scikit')) return true;
    if (cleanSkill === 'stats' && targetId.includes('statistics')) return true;
    if (cleanSkill === 'git' && targetId.includes('git')) return true;
    if (cleanSkill === 'aws' && targetId.includes('aws')) return true;

    // Substring matching (at least 3 characters)
    if (cleanSkill.length >= 3) {
      if (targetId.includes(cleanSkill) || targetName.includes(cleanSkill)) return true;
    }

    return false;
  });
};

/**
 * 1. Career Assessment Agent
 * Responsibilities: Calculate overall readiness score, identify general strengths & weaknesses, and make improvement suggestions.
 */
export const careerAssessmentAgent = (role, userSkillsArray) => {
  const strengths = [];
  const weaknesses = [];
  const categoryScores = { foundations: 0, core: 0, projects: 0, interview: 0 };
  const categories = ['foundations', 'core', 'projects', 'interview'];

  categories.forEach(cat => {
    const categorySkills = role.skills[cat] || [];
    if (categorySkills.length === 0) {
      categoryScores[cat] = 100;
      return;
    }

    let matchingCount = 0;
    categorySkills.forEach(skill => {
      const isPossessed = checkUserHasSkill(userSkillsArray, skill);
      if (isPossessed) {
        matchingCount++;
        strengths.push(skill);
      } else {
        weaknesses.push(skill);
      }
    });

    categoryScores[cat] = Math.round((matchingCount / categorySkills.length) * 100);
  });

  // Calculate Weighted readiness score
  // Foundations (40%), Core (35%), Projects (15%), Interview (10%)
  const weightedScore = 
    (categoryScores.foundations * 0.40) + 
    (categoryScores.core * 0.35) + 
    (categoryScores.projects * 0.15) + 
    (categoryScores.interview * 0.10);
  
  const readinessScore = Math.min(100, Math.round(weightedScore));

  // Determine readiness status tier
  let tier = "Starter Phase";
  let tierDesc = "Prioritize mastering foundational syntax and tool definitions to gain momentum.";
  let statusClass = "badge-danger";

  if (readinessScore >= 30 && readinessScore < 65) {
    tier = "Developing Tier";
    tierDesc = "Solid progress! Focus on framework bindings and API routing configurations next.";
    statusClass = "badge-warning";
  } else if (readinessScore >= 65 && readinessScore < 85) {
    tier = "Market Ready";
    tierDesc = "Job candidate status! Focus on deployment setups, system performance, and algorithm practice.";
    statusClass = "badge-primary";
  } else if (readinessScore >= 85) {
    tier = "Elite Expert";
    tierDesc = "Premium preparation! Seek active fellowships, open-source maintainer status, or submit job apps.";
    statusClass = "badge-success";
  }

  // Generate top 3 improvement actions
  const improvementActions = [];
  const firstGap = weaknesses[0];
  if (firstGap) {
    improvementActions.push({
      id: "act_1",
      title: `Master ${firstGap.name}`,
      description: `Target this immediate gap in your ${firstGap.category}. This is essential to unlock further advanced modules.`,
      tag: "Urgent Gap"
    });
  } else {
    improvementActions.push({
      id: "act_1",
      title: "Deepen Domain Proficiency",
      description: "You have covered all basic requirements! Focus on performance tuning and advanced practices.",
      tag: "Refinement"
    });
  }

  const secondGap = weaknesses.find(w => w.category === 'Core Skills' || w.category === 'Projects') || weaknesses[1];
  if (secondGap) {
    improvementActions.push({
      id: "act_2",
      title: `Build Project Integrating ${secondGap.name}`,
      description: `Create a hands-on project that directly applies this skill to prove practical competence to recruiters.`,
      tag: "Practice Project"
    });
  } else {
    improvementActions.push({
      id: "act_2",
      title: "Deploy Advanced Showcase Project",
      description: "Deploy the advanced tier project from the Portfolio Lab with custom analytics to show scaling mastery.",
      tag: "High Impact"
    });
  }

  const interviewGap = weaknesses.find(w => w.category === 'Interview Prep') || weaknesses[2];
  if (interviewGap) {
    improvementActions.push({
      id: "act_3",
      title: `Review ${interviewGap.name}`,
      description: `Practice typical tech coding rounds and system design queries regarding this topic.`,
      tag: "Interview Prep"
    });
  } else {
    improvementActions.push({
      id: "act_3",
      title: "Apply to Targeted Programs",
      description: "Submit your portfolio links to open-source programs or remote internships in the Opportunity Hub.",
      tag: "Outreach"
    });
  }

  return {
    readinessScore,
    tier,
    tierDesc,
    statusClass,
    strengths,
    weaknesses,
    improvementActions,
    categoryScores
  };
};

/**
 * 2. Skill Intelligence Agent
 * Responsibilities: Categorize skills into Strong, Intermediate, Weak, and Missing.
 * Assign priority and demand scores.
 */
export const skillIntelligenceAgent = (role, userSkillsArray) => {
  const categorized = {
    strong: [],
    intermediate: [],
    weak: [],
    missing: []
  };

  const allSkillsList = [
    ...(role.skills.foundations || []),
    ...(role.skills.core || []),
    ...(role.skills.projects || []),
    ...(role.skills.interview || [])
  ];

  allSkillsList.forEach(skill => {
    const possessed = checkUserHasSkill(userSkillsArray, skill);
    if (possessed) {
      // Simulate level based on priority or type
      if (skill.category === 'Foundations') {
        categorized.strong.push(skill);
      } else {
        categorized.intermediate.push(skill);
      }
    } else {
      if (skill.priority === 'High') {
        categorized.missing.push(skill);
      } else {
        categorized.weak.push(skill);
      }
    }
  });

  // Calculate stats
  const total = allSkillsList.length;
  const possessedCount = categorized.strong.length + categorized.intermediate.length;
  const gapCount = categorized.weak.length + categorized.missing.length;

  return {
    categorized,
    total,
    possessedCount,
    gapCount,
    allSkills: allSkillsList
  };
};

/**
 * 3. Roadmap Planning Agent
 * Responsibilities: Expand curriculum into 8 distinct learning phases:
 * 1. Foundations, 2. Programming, 3. Core Technologies, 4. Projects, 5. Specialization, 6. Portfolio, 7. Interview Prep, 8. Job Search
 */
export const roadmapPlanningAgent = (role, userSkillsArray) => {
  const allSkillsList = [
    ...(role.skills.foundations || []),
    ...(role.skills.core || []),
    ...(role.skills.projects || []),
    ...(role.skills.interview || [])
  ];

  const skillStatusMap = {};
  allSkillsList.forEach(s => {
    skillStatusMap[s.id] = checkUserHasSkill(userSkillsArray, s);
  });

  const getSkillsForPhase = (ids) => {
    return allSkillsList
      .filter(s => ids.includes(s.id))
      .map(s => ({ ...s, possessed: !!skillStatusMap[s.id] }));
  };

  // Map 9 roles skills into 8 phases
  const p1_ids = [role.skills.foundations[0]?.id, role.skills.foundations[1]?.id].filter(Boolean);
  const p2_ids = [role.skills.foundations[2]?.id, role.skills.foundations[3]?.id].filter(Boolean);
  const p3_ids = [role.skills.core[0]?.id, role.skills.core[1]?.id].filter(Boolean);
  const p4_ids = [role.skills.core[2]?.id, role.skills.core[3]?.id].filter(Boolean);
  const p5_ids = [role.skills.projects[0]?.id].filter(Boolean);
  const p6_ids = [role.skills.projects[1]?.id, role.skills.projects[2]?.id].filter(Boolean);
  const p7_ids = [role.skills.interview[0]?.id, role.skills.interview[1]?.id].filter(Boolean);
  const p8_ids = [role.skills.interview[2]?.id].filter(Boolean);

  const phases = [
    {
      title: "Foundations",
      desc: "Basic concepts, setup environments, command line execution, version control.",
      skills: getSkillsForPhase(p1_ids),
      estimatedHours: 25,
      prerequisites: "None",
      milestones: ["Set up local editor and git account", "Build semantic static document skeleton"],
      resources: role.resources.slice(0, 2)
    },
    {
      title: "Programming",
      desc: "Core programming syntax, logic blocks, and scripting paradigms.",
      skills: getSkillsForPhase(p2_ids),
      estimatedHours: 35,
      prerequisites: "Foundations",
      milestones: ["Write custom loop scripts", "Solve basic data algorithm exercises"],
      resources: role.resources.slice(1, 3)
    },
    {
      title: "Core Technologies",
      desc: "Primary software engines, routers, layout builders, and frameworks.",
      skills: getSkillsForPhase(p3_ids),
      estimatedHours: 40,
      prerequisites: "Programming",
      milestones: ["Launch modular component layouts", "Bind APIs to component UI screens"],
      resources: role.resources.slice(2, 4)
    },
    {
      title: "Projects",
      desc: "Building and testing interactive responsive applications.",
      skills: getSkillsForPhase(p4_ids),
      estimatedHours: 45,
      prerequisites: "Core Technologies",
      milestones: ["Write assertions testing database routes", "Integrate external API streams"],
      resources: role.resources.slice(0, 3)
    },
    {
      title: "Specialization",
      desc: "In-depth state management, model weights, vectors, or cloud pipelines.",
      skills: getSkillsForPhase(p5_ids),
      estimatedHours: 50,
      prerequisites: "Projects",
      milestones: ["Configure global storage caches", "Optimize payload weights & bundling metrics"],
      resources: role.resources.slice(1, 4)
    },
    {
      title: "Portfolio",
      desc: "Deploying production-grade services to the public cloud.",
      skills: getSkillsForPhase(p6_ids),
      estimatedHours: 60,
      prerequisites: "Specialization",
      milestones: ["Deploy hosted database clusters", "Perform automated Lighthouse audit > 95%"],
      resources: role.resources.slice(2, 4)
    },
    {
      title: "Interview Preparation",
      desc: "Algorithm mock tests, system design challenges, and resume reviews.",
      skills: getSkillsForPhase(p7_ids),
      estimatedHours: 30,
      prerequisites: "Portfolio",
      milestones: ["Pass 3 simulated system design screens", "Clean console errors on all projects"],
      resources: role.resources.slice(0, 2)
    },
    {
      title: "Job Search",
      desc: "Outreach, internships, fellowship proposals, and active job filings.",
      skills: getSkillsForPhase(p8_ids),
      estimatedHours: 20,
      prerequisites: "Interview Preparation",
      milestones: ["Submit 5 targeted resumes to verified roles", "Contribute minor patches to open-source libraries"],
      resources: role.resources.slice(2, 4)
    }
  ];

  // Calculate percentages
  phases.forEach(phase => {
    if (phase.skills.length === 0) {
      phase.percentage = 100;
    } else {
      const active = phase.skills.filter(s => s.possessed).length;
      phase.percentage = Math.round((active / phase.skills.length) * 100);
    }
  });

  return phases;
};

/**
 * 4. Study Planner Agent
 * Responsibilities: Generate study checklists for Daily, Weekly, Monthly, and Quarterly schedules.
 */
export const studyPlanningAgent = (role, weaknesses) => {
  const daily = [];
  const weekly = [];
  const monthly = [];
  const quarterly = [];

  const focusSkill = weaknesses[0] || { name: "Core Architecture" };
  const practiceSkill = weaknesses[1] || { name: "Advanced Patterns" };

  daily.push(
    { id: "d_1", task: `Read official documentation for ${focusSkill.name}`, duration: "45 mins" },
    { id: "d_2", task: `Code a custom local sandbox exercise matching ${practiceSkill.name}`, duration: "60 mins" },
    { id: "d_3", task: "Review technical blogs & system architectures", duration: "30 mins" }
  );

  weekly.push(
    { id: "w_1", goal: `Complete 3 mini-exercises for ${focusSkill.name}` },
    { id: "w_2", goal: `Initialize repository and README configuration for next project` },
    { id: "w_3", goal: "Audit code styling formats and check console metrics" }
  );

  monthly.push(
    { id: "m_1", objective: "Deploy stable prototype project to public hosting", target: "End of Week 3" },
    { id: "m_2", objective: "Perform mock technical Q&A interview runs", target: "End of Week 4" }
  );

  quarterly.push(
    { id: "q_1", milestone: "Submit fellowship proposals or internship filings", target: "Month 1" },
    { id: "q_2", milestone: "Optimize asset sizes and load metrics on all personal sites", target: "Month 2" },
    { id: "q_3", milestone: "Scale your readiness profile score above 90%", target: "Month 3" }
  );

  return { daily, weekly, monthly, quarterly };
};

/**
 * 5. Project Recommendation Agent
 * Responsibilities: Fetch recommended projects, maps difficulty, checklists, and resume impacts.
 */
export const projectRecommendationAgent = (role, projectStatuses) => {
  return (role.projectsList || []).map(p => ({
    ...p,
    status: projectStatuses[p.id] || "Not Started"
  }));
};

/**
 * 6. Interview Preparation Agent
 * Responsibilities: Compile technical, behavioral, and system design QA with readyness trackers.
 */
export const interviewPreparationAgent = (role, userSkillsArray) => {
  const behavioral = [
    { q: "Tell me about a time you had to resolve a complex bug under tight deadlines.", topic: "Conflict & Stress" },
    { q: "How do you explain technical architecture definitions to non-technical partners?", topic: "Communication" },
    { q: "Describe a project that failed and what lessons you took away from the postmortem.", topic: "Postmortem Learning" }
  ];

  const technical = (role.interviewTopics || []).map((t, idx) => ({
    q: t,
    topic: `Core Topic ${idx + 1}`
  }));

  const systemDesign = [
    { q: "Design a high-throughput metrics logging dashboard with offline buffering.", topic: "Telemetry" },
    { q: "How would you handle cache invalidation updates across multiple instances?", topic: "Caching" }
  ];

  // Calculate score based on interview-category skills possessed
  const interviewSkills = role.skills.interview || [];
  const possessed = interviewSkills.filter(s => checkUserHasSkill(userSkillsArray, s)).length;
  const score = interviewSkills.length > 0 
    ? Math.round((possessed / interviewSkills.length) * 100) 
    : 100;

  return {
    behavioral,
    technical,
    systemDesign,
    readinessScore: score
  };
};

/**
 * 7. Opportunity Recommendation Agent
 * Responsibilities: Filter and return local hackathons, program certifications, internships.
 */
export const opportunityRecommendationAgent = (role) => {
  return role.opportunities || [];
};

/**
 * 8. Progress Tracking Agent
 * Responsibilities: Gamified achievements, streaks, badges, history metrics.
 */
export const progressTrackingAgent = (
  role,
  userSkillsArray,
  completedRoadmapItems,
  completedStudyPlannerItems,
  projectStatuses
) => {
  // Streaks (derived deterministically based on completions)
  const completedRoadmapCount = Object.values(completedRoadmapItems).filter(Boolean).length;
  const completedStudyCount = Object.values(completedStudyPlannerItems).filter(Boolean).length;
  const completedProjCount = Object.values(projectStatuses).filter(status => status === 'Completed').length;

  const streakValue = Math.min(30, 2 + Math.floor(completedRoadmapCount * 1.5) + completedStudyCount);

  // Growth level calculations
  const totalCompleted = completedRoadmapCount + completedStudyCount + (completedProjCount * 5);
  const careerLevel = Math.max(1, Math.min(10, 1 + Math.floor(totalCompleted / 4)));

  // Badges database
  const badges = [
    { id: "badge_welcome", title: "Flight Initialized", desc: "Configured target role workspace", unlocked: true, icon: "🚀" },
    { id: "badge_first_roadmap", title: "Milestone Cleared", desc: "Cleared first roadmap target checkbox", unlocked: completedRoadmapCount > 0, icon: "🎯" },
    { id: "badge_study", title: "Disciplined Drill", desc: "Completed a study plan checklist task", unlocked: completedStudyCount > 0, icon: "⚡" },
    { id: "badge_project", title: "Shipped Builder", desc: "Marked a recommended project as Completed", unlocked: completedProjCount > 0, icon: "📦" },
    { id: "badge_master", title: "Domain Commander", desc: "Achieved over 85% career readiness score", unlocked: userSkillsArray.length >= 10, icon: "👑" }
  ];

  return {
    streak: streakValue,
    level: careerLevel,
    badges,
    totalPoints: totalCompleted * 100
  };
};

/**
 * Main Orchestration Hub
 */
export const generateCareerAnalysis = (
  roleId,
  rawSkillsInput,
  completedRoadmap = {},
  completedStudy = {},
  projectStatuses = {}
) => {
  const role = CAREER_ROLES[roleId] || CAREER_ROLES.frontend;

  // Normalize skills input
  let userSkillsArray = [];
  if (Array.isArray(rawSkillsInput)) {
    userSkillsArray = rawSkillsInput;
  } else if (typeof rawSkillsInput === 'string') {
    userSkillsArray = rawSkillsInput
      .split(/[,,;\n]/)
      .map(s => s.trim())
      .filter(s => s.length > 0);
  }

  // Invoke agents
  const assessment = careerAssessmentAgent(role, userSkillsArray);
  const intelligence = skillIntelligenceAgent(role, userSkillsArray);
  const roadmap = roadmapPlanningAgent(role, userSkillsArray);
  const study = studyPlanningAgent(role, assessment.weaknesses);
  const projects = projectRecommendationAgent(role, projectStatuses);
  const interview = interviewPreparationAgent(role, userSkillsArray);
  const opportunities = opportunityRecommendationAgent(role);
  const tracking = progressTrackingAgent(role, userSkillsArray, completedRoadmap, completedStudy, projectStatuses);

  return {
    role,
    readinessScore: assessment.readinessScore,
    tier: assessment.tier,
    tierDesc: assessment.tierDesc,
    statusClass: assessment.statusClass,
    strengths: assessment.strengths,
    weaknesses: assessment.weaknesses,
    improvementActions: assessment.improvementActions,
    categoryScores: assessment.categoryScores,
    skillsIntel: intelligence,
    roadmapPhases: roadmap,
    studyPlanner: study,
    projectsList: projects,
    interviewData: interview,
    opportunitiesList: opportunities,
    growthMetrics: tracking
  };
};
