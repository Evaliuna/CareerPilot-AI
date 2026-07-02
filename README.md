# 🚀 CareerPilot OS — Professional Career Operating System

> An advanced, multi-agent AI-powered Career Operating System designed to assess skill gaps, map 8-phase pathways, curate resources, recommend projects, simulate interviews, and track gamified achievements.

---

## # Project Overview

CareerPilot OS is a professional, local-first SaaS platform that functions as a personal career cockpit. By leveraging local multi-agent intelligence, it dynamically maps out, audits, and accelerates individual learning paths for 9 major software development, data science, and security roles. 

## # Features

1. **Integrated Command Dashboard**: Answers key daily questions ("Where am I now?", "What should I study today?", "What is blocking my progress?", "What should I do next?") with progress visualizers.
2. **Career Assessment Agent**: Audits and maps a weighted career readiness score based on foundations, core tools, project experience, and interview performance.
3. **Skill Intelligence Agent**: Analyzes profile skills via fuzzy matching, organizing them into Strong, Intermediate, Weak, and Missing priorities.
4. **Interactive Curriculum Roadmap**: Splits curriculum into 8 collapsible phases with hourly milestones.
5. **Study Planner & Checklists**: Configures daily focus tasks, weekly milestones, monthly objectives, and quarterly reviews.
6. **Portfolio Laboratory**: Recommends customized, highly relevant blueprints with repository checklists and deployment tasks.
7. **Interview Center**: Offers behavioral, technical, and system design QA modules with local feedback loops.
8. **Opportunity Hub**: Curates hackathons, internships, fellowships, and certifications with searchable database fields.
9. **Achievements Cabinet**: Unlocks dynamic badges and generates completion certifications based on accumulated XP.

## # Why CareerPilot OS

Unlike static checklists, CareerPilot OS provides a closed-loop system where completed tasks automatically update XP, extend streaks, unlock badges, and recalculate career readiness in real-time, providing immediate feedback.

## # Technology Stack

- **Framework**: [React (v18)](https://react.dev/) & [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Data**: HTML5 LocalStorage for zero-dependency persistence.
- **Styling**: Vanilla CSS featuring modular variables, dark SaaS palettes, and premium interactive animations.

---

## # System Diagrams

Below are the 15 comprehensive Mermaid diagrams representing CareerPilot OS workflows and systems:

### 1. Complete System Architecture
```mermaid
graph TD
    User([👤 User]) --> UI[💻 React SPA Client Interface]
    subgraph UI Components
        UI --> Nav[Sidebar Navigation]
        UI --> Pages[Page Layout View Switcher]
        Pages --> Dashboard[Dashboard View]
        Pages --> Assessments[Career Assessment Console]
        Pages --> Roadmap[Collapsible Roadmap]
        Pages --> Lab[Portfolio Blueprint Lab]
    end
    UI --> Store[💾 LocalStorage State Controller]
    UI --> Engine[⚙️ localEngine.js Analysis Hub]
    subgraph Agents Orchestrator
        Engine --> A1[Career Assessment Agent]
        Engine --> A2[Skill Intelligence Agent]
        Engine --> A3[Roadmap Planning Agent]
        Engine --> A4[Study Planner Agent]
        Engine --> A5[Project Recommendation Agent]
        Engine --> A6[Interview Prep Agent]
        Engine --> A7[Opportunity Agent]
        Engine --> A8[Progress Tracking Agent]
    end
    Engine --> DataBase[📂 dataStore.js Career Schemas]
```

### 2. User Journey
```mermaid
stateDiagram-v2
    [*] --> SetupProfile : Selects Career Role & Enters Skills
    SetupProfile --> CommandStation : Launches Workspace
    state CommandStation {
        [*] --> CheckStatus : Inspects Readiness & Strengths
        CheckStatus --> LogDrills : Completes Daily Mission Checklists
        LogDrills --> BuildProjects : Verifies Portfolio Lab Blueprints
        BuildProjects --> MockInterview : Practices Q&A Scenarios
    }
    CommandStation --> UnlockBadges : Earns Milestone XP & Certificates
```

### 3. Multi-Agent Architecture
```mermaid
graph LR
    input[User Profile & Skills Input] --> Orchestrator{generateCareerAnalysis}
    subgraph Agents Pool
        Orchestrator --> A1[Career Assessment Agent]
        Orchestrator --> A2[Skill Intelligence Agent]
        Orchestrator --> A3[Roadmap Planning Agent]
        Orchestrator --> A4[Study Planner Agent]
        Orchestrator --> A5[Project Recommendation Agent]
        Orchestrator --> A6[Interview Prep Agent]
        Orchestrator --> A7[Opportunity Agent]
        Orchestrator --> A8[Progress Tracking Agent]
    end
    A1 --> output[Weighted Readiness Score & Action Items]
```

### 4. Career Analysis Workflow
```mermaid
flowchart TD
    Start([Initialize Analysis]) --> LoadRole[Load dataStore.js Role Specifications]
    LoadRole --> TokenizeSkills[Normalize Input Skills Array]
    TokenizeSkills --> RunFuzzyCheck[Run checkUserHasSkill fuzzy matching]
    RunFuzzyCheck --> CalcCategory[Calculate category sub-scores]
    CalcCategory --> CalcWeighted[Apply weights: Foundations 40%, Core 35%, Projects 15%, Interview 10%]
    CalcWeighted --> DetermineTier[Determine status tier Starter / Developing / Ready / Expert]
    DetermineTier --> OutputMetrics([Compile Analysis Payload])
```

### 5. Skill Assessment Workflow
```mermaid
flowchart LR
    Start[User Skills String] --> Split[Split by comma/newline]
    Split --> Match[Fuzzy matching with dataStore.js skills]
    Match --> Strong[Possessed & Foundational -> Strong]
    Match --> Intermediate[Possessed & Core -> Intermediate]
    Match --> Weak[Missing & Low-priority -> Weak]
    Match --> Missing[Missing & High-priority -> Missing]
```

### 6. Roadmap Generation Workflow
```mermaid
flowchart TD
    Start[Compile Roadmap] --> MapPhases[Map role skills list to 8 standard phases]
    MapPhases --> CheckStatus[Check possessed status of each skill in phase]
    CheckStatus --> CalcPercentage[Compute phase completion percentage]
    CalcPercentage --> FetchMilestones[Assign milestones & guides]
```

### 7. Study Planner Workflow
```mermaid
flowchart TD
    Start[Generate Plan] --> IdentifyGaps[Find top 2 weaknesses]
    IdentifyGaps --> DailyDrill[Generate documentation & sandbox study actions]
    IdentifyGaps --> WeeklyGoal[Generate mini-project tasks]
    IdentifyGaps --> MonthQuarter[Assign hosted deployments & applications]
```

### 8. Portfolio Recommendation Workflow
```mermaid
flowchart LR
    Start[Load Projects] --> MapStatus[Read status from projectStatuses state]
    MapStatus --> SubtaskCheck[Load checked items from cp_lab_subtasks]
    SubtaskCheck --> CalcPercent[Compute progress % per project card]
```

### 9. Interview Generation Workflow
```mermaid
flowchart TD
    Start[Load Prep Center] --> FetchQuestions[Fetch interviewTopics list from role]
    FetchQuestions --> GenCategories[Create Behavioral, Technical, and System Design pools]
    GenCategories --> CalcScore[Evaluate preparedness based on interview category skills possessed]
```

### 10. Opportunity Recommendation Workflow
```mermaid
flowchart TD
    Start[Init Opps] --> LoadRoleOpps[Load role-specific fellowships/internships]
    LoadRoleOpps --> LoadGlobal[Load global hackathons & certifications]
    LoadGlobal --> FilterQuery[Apply search & category query strings]
```

### 11. Progress Tracking Workflow
```mermaid
flowchart LR
    Tasks[Completed Tasks] --> CalcPoints[Calculate total points: 100 XP per check]
    Subtasks[Completed Subtasks] --> AddSubPoints[Add 25 XP per subtask check]
    CalcPoints & AddSubPoints --> NextLevel[Evaluate Level Progression]
```

### 12. Application State Flow
```mermaid
stateDiagram-v2
    [*] --> LocalState : App Mounts
    LocalState --> ProfileNull : Profile not set
    LocalState --> ProfileActive : Profile exists
    ProfileNull --> ProfileActive : Save setup options to localStorage
    ProfileActive --> LocalState : Update skills list, checked items, or projects
```

### 13. Component Interaction Diagram
```mermaid
graph TD
    App[App.jsx] --> Sidebar[Sidebar.jsx]
    App --> LandingPage[LandingPage.jsx]
    App --> Dashboard[Dashboard.jsx]
    App --> PortfolioLab[PortfolioLab.jsx]
    Sidebar -->|onSkillsUpdate| App
    Dashboard -->|setActiveTab| App
```

### 14. Data Flow Diagram
```mermaid
flowchart TD
    Store[(LocalStorage)] -->|cp_profile| App[App.jsx State Loader]
    Store -->|cp_completed_study| App
    Store -->|cp_completed_roadmap| App
    Store -->|cp_project_statuses| App
    App -->|Input parameters| Engine[generateCareerAnalysis Engine]
    Engine -->|Compiled Analysis| App
    App -->|Props| Views[Dashboard / Pages]
```

### 15. Sequence Diagram: Application Launch
```mermaid
sequenceDiagram
    actor User
    participant App as App.jsx
    participant Storage as LocalStorage
    participant Engine as localEngine.js
    
    User->>App: Launch Site
    App->>Storage: Retrieve cp_profile
    Storage-->>App: profile details (frontend path)
    App->>Engine: generateCareerAnalysis(roleId, skillsText, checks)
    Engine->>Engine: Run Multi-Agent analysis pipelines
    Engine-->>App: compiled analysis payload
    App->>User: Display Command Station Dashboard
```

---

## # Project Structure

```text
├── src/
│   ├── components/            # Reusable UI component modules
│   ├── pages/                 # Full view layouts (Dashboard, Lab, Planner, etc.)
│   ├── services/              # localEngine.js & dataStore.js models
│   ├── styles/                # CSS variables, layouts, and pages
│   ├── App.jsx                # Router & State controller
│   └── main.jsx               # Entrypoint
```
## # Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/careerpilot-os.git
   ```
2. Navigate to the project directory:
   ```bash
   cd careerpilot-os
   ```
3. Install dependencies:
   ```cmd
   npm install
   ```

## # Usage

Start the local server for development:
```cmd
npm run dev
```

Build the optimized production package:
```cmd
npm run build
```

## # Screenshots

*Command Station Dashboard view with circular readiness dials, progress widgets, and activity streams.*

## # Future Improvements

- Add local LLM integration utilizing WebGPU.
- Introduce portfolio export options.

## # License

MIT License. Copyright (c) 2026.
