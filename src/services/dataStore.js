// Career OS Pre-seeded Knowledge base and Datasets for 9 Roles
export const CAREER_ROLES = {
  frontend: {
    id: "frontend",
    title: "Frontend Engineer",
    description: "Builds responsive, high-performance user interfaces and interactive client-side web applications using modern browser technologies.",
    difficulty: "Medium",
    marketDemand: "High",
    salaryRange: "$85,000 - $145,000",
    skills: {
      foundations: [
        { id: "html5", name: "HTML5 Semantic Markup", category: "Foundations", priority: "High", hours: 10, docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML", ytUrl: "https://www.youtube.com/watch?v=kUMe1FH4CHE", practiceUrl: "https://www.freecodecamp.org", certName: "Responsive Web Design Certification", description: "Standard markup language for web pages.", importance: "Critical for SEO and accessibility." },
        { id: "css3", name: "CSS3 Flexbox, Grid & Variables", category: "Foundations", priority: "High", hours: 15, docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS", ytUrl: "https://www.youtube.com/watch?v=1PnVor36_40", practiceUrl: "https://css-tricks.com", certName: "CSS Specialist Certificate", description: "Style sheet language used for describing the presentation of a document.", importance: "Essential for layouts, spacing, and dynamic visual styling." },
        { id: "js_basics", name: "ES6+ JavaScript Fundamentals", category: "Foundations", priority: "High", hours: 25, docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", ytUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk", practiceUrl: "https://javascript.info", certName: "JavaScript Algorithms & Data Structures", description: "Programming language of the web.", importance: "Core behavior and logic controller of frontend clients." },
        { id: "git", name: "Git Version Control", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Version Control with Git", description: "Distributed version control system.", importance: "Necessary for collaborating and tracking changes in modern codebases." }
      ],
      core: [
        { id: "react", name: "React Components & Hooks", category: "Core Skills", priority: "High", hours: 30, docUrl: "https://react.dev", ytUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0", practiceUrl: "https://react.dev/reference/react", certName: "Meta React Developer Professional Certificate", description: "A popular library for building composable user interfaces.", importance: "Industry standard for building interactive modular dashboards." },
        { id: "typescript", name: "TypeScript Type Safety", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://www.typescriptlang.org/docs/", ytUrl: "https://www.youtube.com/watch?v=zQnOB4tVqdY", practiceUrl: "https://www.typescriptlang.org/play", certName: "TypeScript Core Foundations", description: "Typed superset of JavaScript.", importance: "Saves hours of debugging by catching type errors at compile time." },
        { id: "css_frameworks", name: "TailwindCSS & CSS Modules", category: "Core Skills", priority: "Medium", hours: 12, docUrl: "https://tailwindcss.com/docs", ytUrl: "https://www.youtube.com/watch?v=lCxcTsOHr5Y", practiceUrl: "https://play.tailwindcss.com", certName: "Modern CSS Frameworks Mastery", description: "Utility-first CSS framework for fast styling UI layers.", importance: "Speeds up design implementation and keeps styles consistent." },
        { id: "api_integration", name: "RESTful APIs & Fetch/Axios", category: "Core Skills", priority: "High", hours: 15, docUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API", ytUrl: "https://www.youtube.com/watch?v=RG-i__g17c0", practiceUrl: "https://jsonplaceholder.typicode.com", certName: "API Integration Expert", description: "Retrieving, sending, and managing application data payloads.", importance: "Bridges the user experience with server databases." }
      ],
      projects: [
        { id: "state_management", name: "State Management (Zustand/Redux)", category: "Projects", priority: "Medium", hours: 18, docUrl: "https://zustand-demo.pmnd.rs", ytUrl: "https://www.youtube.com/watch?v=H2kC9V3VjFw", practiceUrl: "https://github.com/pmndrs/zustand", certName: "Advanced React State Management", description: "Centralized client-side state architectures.", importance: "Coordinates complex global UI states without prop drilling." },
        { id: "testing_front", name: "Component Testing (Vitest & RTL)", category: "Projects", priority: "Medium", hours: 15, docUrl: "https://vitest.dev", ytUrl: "https://www.youtube.com/watch?v=7f-71kYhKys", practiceUrl: "https://testing-library.com", certName: "Testing React Applications", description: "Ensures UI components compile and function correctly under test scenarios.", importance: "Prevents regression and guarantees application reliability." },
        { id: "performance", name: "Web Performance (Lighthouse & Bundlers)", category: "Projects", priority: "High", hours: 15, docUrl: "https://developer.chrome.com/docs/lighthouse/overview/", ytUrl: "https://www.youtube.com/watch?v=0fONene3OIA", practiceUrl: "https://pagespeed.web.dev", certName: "Core Web Vitals Specialist", description: "Auditing page weight, lazy loading, and build bundling configs.", importance: "Determines user retention and search engine rankings." }
      ],
      interview: [
        { id: "js_under_hood", name: "JS Engine & Event Loop", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop", ytUrl: "https://www.youtube.com/watch?v=8aGhZQkoFbQ", practiceUrl: "https://www.greatfrontend.com", certName: "Advanced JavaScript Concepts", description: "Execution contexts, call stacks, microtask queues, and garbage collection.", importance: "Crucial for passing deep engineering questions in tech rounds." },
        { id: "system_design_front", name: "Frontend System Design", category: "Interview Prep", priority: "High", hours: 20, docUrl: "https://www.greatfrontend.com/system-design", ytUrl: "https://www.youtube.com/watch?v=ZfdtE3QkX_8", practiceUrl: "https://github.com/checkcheckzz/system-design-interview", certName: "Frontend System Design Certificate", description: "Architecture patterns for complex, scalable frontend applications.", importance: "Core standard for senior and principal software engineering roles." },
        { id: "portfolio_review", name: "Portfolio Presentation & Pitching", category: "Interview Prep", priority: "Medium", hours: 10, docUrl: "https://github.com/collections/designing-your-portfolio", ytUrl: "https://www.youtube.com/watch?v=5c0q5N1V9QY", practiceUrl: "https://github.com", certName: "Career Presentation Masterclass", description: "Structuring, hosting, and presenting project repositories.", importance: "Helps you stand out and demonstrate strong communication skills." }
      ]
    },
    learningOrder: ["html5", "css3", "js_basics", "git", "react", "typescript", "css_frameworks", "api_integration", "state_management", "testing_front", "performance", "js_under_hood", "system_design_front", "portfolio_review"],
    interviewTopics: [
      "Explain the event loop, macro-tasks, and micro-tasks.",
      "Optimize core web vitals (LCP, FID, CLS) in a heavy React app.",
      "Design a front-end system for an infinite scroll feed with image caching.",
      "How does React's reconciliation virtual DOM diffing process work?",
      "Implement a custom hook that debounces input value updates."
    ],
    projectsList: [
      {
        id: "fe_p1",
        title: "Personal Portfolio & Dev Blog",
        difficulty: "Beginner",
        timeEstimate: "10-15 Hours",
        skillsGained: "Semantic HTML5, CSS custom properties, responsive layouts, Git versioning, and SEO metadata.",
        description: "Develop a premium, custom portfolio website with a blog. Avoid UI templates; write pure layout and custom card elements with light/dark toggles.",
        githubChecklist: ["Create clean directory structures", "Deploy CSS custom variables", "Implement accessible HTML structures", "Write custom responsive navigation"],
        deployChecklist: ["Configure Netlify or Vercel trigger", "Verify SSL status", "Perform Lighthouse performance audit > 95%"],
        resumeImpact: "Exhibits solid semantic markup styling skills and shows clean aesthetic capabilities to hiring teams."
      },
      {
        id: "fe_p2",
        title: "Interactive Kanban Task Workspace",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "React states, custom hooks, HTML5 Drag-and-Drop API, local storage, and complex state management.",
        description: "A Linear-style board where cards can be created, updated, dragged, and sorted. Includes column customization and subtask tracking.",
        githubChecklist: ["Implement custom React Drag and Drop event handlers", "Setup localStorage auto-saving hooks", "Construct column creation controls"],
        deployChecklist: ["Deploy app to GitHub Pages", "Configure deployment automation with GitHub Actions", "Validate keyboard navigability (WAI-ARIA)"],
        resumeImpact: "Proves competency in building complex state-driven components and writing customized interface logic."
      },
      {
        id: "fe_p3",
        title: "Dynamic Analytics Dashboard",
        difficulty: "Advanced",
        timeEstimate: "35-50 Hours",
        skillsGained: "TypeScript, SVG rendering, search/filtering algos, profiling, and state caching.",
        description: "A real-time metrics console rendering SVG-based charts, interactive filters, date-range selectors, and client-side caching of heavy API records.",
        githubChecklist: ["Write custom math converters to compile database records into SVG points", "Support dark/light theme properties in SVG paths", "Create skeleton loaders for async metrics"],
        deployChecklist: ["Deploy to Vercel/Netlify", "Enable route lazy loading for optimized initial bundle sizes", "Validate responsive grid layouts on mobile"],
        resumeImpact: "Demonstrates advanced data engineering capability, SVG math modeling, and top-tier client performance optimization."
      }
    ],
    resources: [
      { name: "MDN Web Docs - HTML & CSS", url: "https://developer.mozilla.org", type: "Docs" },
      { name: "JavaScript Info", url: "https://javascript.info", type: "Guide" },
      { name: "React Documentation", url: "https://react.dev", type: "Docs" },
      { name: "Frontend Roadmap", url: "https://roadmap.sh/frontend", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Vercel Frontend Fellowship", type: "Fellowship", provider: "Vercel", link: "https://vercel.com/careers", description: "A 3-month fully remote mentorship program focused on Next.js, compiler optimization, and edge infrastructure." },
      { title: "React Jam Hackathon", type: "Hackathon", provider: "React Jam", link: "https://reactjam.com", description: "Build an interactive, fully client-side React game or application within 10 days. Judged by industry creators." },
      { title: "Outreachy Open Source Internship", type: "Internship", provider: "Outreachy", link: "https://www.outreachy.org", description: "Paid, remote internships assisting underrepresented groups in contributing to open-source UI libraries." }
    ]
  },

  backend: {
    id: "backend",
    title: "Backend Engineer",
    description: "Designs, builds, and maintains servers, databases, microservices, and system communication protocols.",
    difficulty: "Hard",
    marketDemand: "Very High",
    salaryRange: "$95,000 - $160,000",
    skills: {
      foundations: [
        { id: "python_node", name: "Node.js (JS/TS) or Python", category: "Foundations", priority: "High", hours: 25, docUrl: "https://nodejs.org/docs", ytUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4", practiceUrl: "https://www.codewars.com", certName: "Backend Developer Foundations", description: "Server programming runtimes.", importance: "Executes business logical operations off the browser." },
        { id: "sql_basics", name: "Relational Database Concepts (SQL)", category: "Foundations", priority: "High", hours: 20, docUrl: "https://www.postgresql.org/docs/", ytUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY", practiceUrl: "https://sqlbolt.com", certName: "SQL Database Administrator Certificate", description: "Data querying and schema structure.", importance: "Required for structuring user, transaction, and state histories." },
        { id: "linux_cli", name: "Linux Terminal & Shell scripting", category: "Foundations", priority: "Medium", hours: 10, docUrl: "https://linuxjourney.com", ytUrl: "https://www.youtube.com/watch?v=wBp0Rb-ZJak", practiceUrl: "https://overthewire.org/wargames/bandit/", certName: "LPI Linux Essentials", description: "Command line shell tools.", importance: "Crucial for navigating hosting environments and server files." },
        { id: "git_be", name: "Git & Collaborative Workflows", category: "Foundations", priority: "High", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Collaborative Git Pipelines", description: "Distributed version control system.", importance: "Manages server development and continuous updates." }
      ],
      core: [
        { id: "express_fastapi", name: "Web Frameworks (Express / FastAPI)", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://expressjs.com", ytUrl: "https://www.youtube.com/watch?v=7H_QH9ipyPA", practiceUrl: "https://github.com", certName: "Server REST Frameworks Professional", description: "REST server configuration routers.", importance: "Speeds up mapping HTTP commands into database actions." },
        { id: "orm", name: "ORMs (Prisma / Mongoose)", category: "Core Skills", priority: "High", hours: 15, docUrl: "https://www.prisma.io/docs", ytUrl: "https://www.youtube.com/watch?v=QXxy8Uv1LnQ", practiceUrl: "https://playground.prisma.io", certName: "Database Mapping & Schema Design", description: "Object-Relational Mapping libraries.", importance: "Ensures type safety and simplifies relational database queries." },
        { id: "auth", name: "Authentication (JWT, OAuth2)", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://jwt.io/introduction", ytUrl: "https://www.youtube.com/watch?v=27KeYk-5vJw", practiceUrl: "https://auth0.com/docs", certName: "Web Security and Token Identity", description: "User session verification protocols.", importance: "Secures user routes, records, and prevents unauthorized actions." },
        { id: "api_design", name: "RESTful API Design & Validation", category: "Core Skills", priority: "High", hours: 15, docUrl: "https://swagger.io/docs/", ytUrl: "https://www.youtube.com/watch?v=cI7fX2dKxco", practiceUrl: "https://editor.swagger.io", certName: "API Architect Specialist", description: "Designing secure, structured API endpoints.", importance: "Establishes clean rules for frontend client requests." }
      ],
      projects: [
        { id: "caching", name: "Caching with Redis", category: "Projects", priority: "Medium", hours: 15, docUrl: "https://redis.io/documentation", ytUrl: "https://www.youtube.com/watch?v=jgpVdJB2sKQ", practiceUrl: "https://redis.io/commands", certName: "Redis In-Memory Database Expert", description: "In-memory caching mechanisms.", importance: "Decreases database query latency and server compute overhead." },
        { id: "docker", name: "Containerization with Docker", category: "Projects", priority: "High", hours: 15, docUrl: "https://docs.docker.com", ytUrl: "https://www.youtube.com/watch?v=3c-iKanevAk", practiceUrl: "https://labs.play-with-docker.com", certName: "Docker Container Administrator", description: "Packaging code, settings, and dependencies into lightweight packages.", importance: "Guarantees that backend processes launch uniformly across computers." },
        { id: "testing_be", name: "Integration Testing (Supertest/Pytest)", category: "Projects", priority: "Medium", hours: 12, docUrl: "https://jestjs.io", ytUrl: "https://www.youtube.com/watch?v=FgnxcUQ569o", practiceUrl: "https://github.com", certName: "Backend Quality Assurance Engineer", description: "Writing test assertions against live network requests.", importance: "Prevents breaking server routes during routine updates." }
      ],
      interview: [
        { id: "db_tuning", name: "Indexing & Query Optimization", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://use-the-index-luke.com", ytUrl: "https://www.youtube.com/watch?v=Hcbd0sS6iL8", practiceUrl: "https://pgexercises.com", certName: "SQL Database Optimization Expert", description: "Creating schema index scopes and auditing heavy SQL commands.", importance: "Stops servers from choking on millions of user database records." },
        { id: "sys_design_be", name: "Distributed Systems Design", category: "Interview Prep", priority: "High", hours: 25, docUrl: "https://github.com/donnemartin/system-design-primer", ytUrl: "https://www.youtube.com/watch?v=i53Gi_K39mc", practiceUrl: "https://github.com", certName: "Distributed Systems Architect", description: "Architectural structures for highly available database and file networks.", importance: "Standard test during advanced tech interviews." },
        { id: "concurrency", name: "Concurrency & Event Loop Mechanics", category: "Interview Prep", priority: "Medium", hours: 12, docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop", ytUrl: "https://www.youtube.com/watch?v=yGskK8Ckrg8", practiceUrl: "https://github.com", certName: "Advanced Engine Concurrency", description: "Managing concurrent requests without memory locks or thread leaks.", importance: "Key to managing data integrity during heavy traffic spikes." }
      ]
    },
    learningOrder: ["python_node", "sql_basics", "linux_cli", "git_be", "express_fastapi", "orm", "auth", "api_design", "caching", "docker", "testing_be", "db_tuning", "sys_design_be", "concurrency"],
    interviewTopics: [
      "What is the difference between SQL indexes, and how do they speed up database operations?",
      "Design a rate-limiting middleware that blocks clients after a specific count of hourly requests.",
      "How do relational databases guarantee transaction safety (ACID properties)?",
      "Explain JWT token signatures and how to handle token rotation securely.",
      "How would you scale a web server receiving 100k writes per second?"
    ],
    projectsList: [
      {
        id: "be_p1",
        title: "RESTful Task Management API",
        difficulty: "Beginner",
        timeEstimate: "12-18 Hours",
        skillsGained: "Node.js, Express server setup, SQL database querying, and basic JWT session verification.",
        description: "Build a structured API that handles user accounts, task assignments, status tracking, and request body validation.",
        githubChecklist: ["Initialize Node project and express routes", "Create SQLite schema configuration", "Implement body validation middleware"],
        deployChecklist: ["Deploy app to Render or Heroku", "Setup environment variables securely in hosting config", "Run Postman testing collection"],
        resumeImpact: "Demonstrates core ability to set up REST routes and interact cleanly with relational databases."
      },
      {
        id: "be_p2",
        title: "E-Commerce Order Processing Backend",
        difficulty: "Intermediate",
        timeEstimate: "25-35 Hours",
        skillsGained: "PostgreSQL relational schemas, transactional safety, database migrations, email notification queues, and rate limiting.",
        description: "Design an inventory and checkout API with robust concurrency controls to prevent negative stock values under high traffic loads.",
        githubChecklist: ["Implement PostgreSQL transactions block", "Configure BullMQ background email processor", "Add rate-limiting middleware triggers"],
        deployChecklist: ["Deploy PostgreSQL server on Render/Supabase", "Configure connection pooling for scaling", "Deploy backend using Docker containers"],
        resumeImpact: "Exhibits understanding of transactional safety, database safety layers, and async queue operations."
      },
      {
        id: "be_p3",
        title: "Distributed Chat & Notification Gateway",
        difficulty: "Advanced",
        timeEstimate: "40-60 Hours",
        skillsGained: "WebSockets communication, Redis Pub/Sub, Docker Compose setup, authentication, and load balancing.",
        description: "Build an event-driven system enabling low-latency chat rooms, active user indicators, offline message queueing, and notification distribution.",
        githubChecklist: ["Configure socket.io message channels", "Configure Redis Pub/Sub client mappings", "Setup docker-compose.yml with multi-service configs"],
        deployChecklist: ["Deploy cluster to AWS ECS or GCP GKE", "Configure Nginx load-balancer for horizontal scaling", "Run mock stress tests with 10k connections"],
        resumeImpact: "Showcases capabilities in setting up low-latency event channels, Docker orchestration, and distributed networking configurations."
      }
    ],
    resources: [
      { name: "Node.js Documentation", url: "https://nodejs.org", type: "Docs" },
      { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com", type: "Guide" },
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "Repo" },
      { name: "Backend Roadmap", url: "https://roadmap.sh/backend", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Google Summer of Code", type: "Open Source", provider: "Google", link: "https://summerofcode.withgoogle.com", description: "Contribute to heavy backend structures in organizations like Apache, Python Software Foundation, or Linux Foundation." },
      { title: "Redis Hackathon", type: "Hackathon", provider: "Redis Labs", link: "https://redis.com/community/hackathons", description: "Build highly responsive applications leveraging Redis as a primary backend database or real-time data cache." },
      { title: "Stripe Backend Engineering Internship", type: "Internship", provider: "Stripe", link: "https://stripe.com/jobs", description: "Work with global payment infrastructures, core database systems, and robust API consistency frameworks." }
    ]
  },

  ai: {
    id: "ai",
    title: "AI Engineer",
    description: "Builds intelligent software systems by integrating pre-trained LLMs, fine-tuning neural architectures, and deploying vector knowledge indexing.",
    difficulty: "Very Hard",
    marketDemand: "Extremely High",
    salaryRange: "$110,000 - $185,000",
    skills: {
      foundations: [
        { id: "python_ai", name: "Python & Core AI Libraries (PyTorch)", category: "Foundations", priority: "High", hours: 30, docUrl: "https://pytorch.org/docs/", ytUrl: "https://www.youtube.com/watch?v=V_xro1bcAuA", practiceUrl: "https://www.kaggle.com", certName: "PyTorch Basics Certification", description: "Python scripting with tensor arrays.", importance: "Core language and data processing standard for modern machine learning." },
        { id: "llm_apis", name: "LLM API Integration & Prompts", category: "Foundations", priority: "High", hours: 15, docUrl: "https://platform.openai.com/docs/", ytUrl: "https://www.youtube.com/watch?v=53aK1p1M1Uo", practiceUrl: "https://www.deeplearning.ai", certName: "Prompt Engineering Specialist", description: "Leveraging foundational models using programmatic REST endpoints.", importance: "Fastest way to build reasoning steps inside software products." },
        { id: "git_ai", name: "Collaborative Git Pipelines", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Git Version Control", description: "Distributed version control system.", importance: "Coordinates model training code adjustments." },
        { id: "data_handling", name: "Data Handling (JSON & CSV Parsing)", category: "Foundations", priority: "High", hours: 12, docUrl: "https://pandas.pydata.org/docs/", ytUrl: "https://www.youtube.com/watch?v=vmEHCJofslg", practiceUrl: "https://www.kaggle.com/learn", certName: "Data Handling Mastery", description: "Reading and structuring model payload files.", importance: "Crucial for dataset formatting and parsing API payloads." }
      ],
      core: [
        { id: "vector_db", name: "Vector Databases (Pinecone/Chroma)", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://docs.pinecone.io", ytUrl: "https://www.youtube.com/watch?v=klTvEwg3o1Q", practiceUrl: "https://chromadb.com", certName: "Vector Search Infrastructure Architect", description: "High-speed semantic search systems.", importance: "Allows storing and searching document embedding contexts." },
        { id: "rag", name: "RAG Systems (Retrieval-Augmented)", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://docs.llamaindex.ai/en/stable/", ytUrl: "https://www.youtube.com/watch?v=tD6vwQ3GAd0", practiceUrl: "https://learn.deeplearning.ai", certName: "Advanced RAG Developer", description: "Connecting databases with language models to provide factual context.", importance: "Prevents LLM hallucinations by injecting verified database facts." },
        { id: "orchestration_ai", name: "AI Orchestration (LangChain)", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://js.langchain.com/docs", ytUrl: "https://www.youtube.com/watch?v=yF9k1yOhNo0", practiceUrl: "https://github.com/langchain-ai/langchain", certName: "LangChain Developer Certificate", description: "Linking model reasoning steps, memories, and tool invocations.", importance: "Engine for chaining actions and planning loops in agents." },
        { id: "finetuning", name: "Embedding Models & Tokenization", category: "Core Skills", priority: "Medium", hours: 18, docUrl: "https://huggingface.co/docs/transformers/index", ytUrl: "https://www.youtube.com/watch?v=tVn0P1Z5S8E", practiceUrl: "https://huggingface.co", certName: "Hugging Face Models Specialist", description: "Transforming strings into vectors and tweaking small model parameters.", importance: "Increases retrieval accuracy and domain specificity of tools." }
      ],
      projects: [
        { id: "agentic", name: "Agentic Loops & Multi-Agent Systems", category: "Projects", priority: "High", hours: 30, docUrl: "https://www.crewai.com/docs", ytUrl: "https://www.youtube.com/watch?v=840Vl5nGBHk", practiceUrl: "https://github.com/crewAIInc/crewAI", certName: "Autonomous AI Agent Architect", description: "Designing multi-agent systems with shared memories and distinct roles.", importance: "Core direction of high-end startup automation tooling." },
        { id: "deployment_ai", name: "Model Hosting (HuggingFace/Ollama)", category: "Projects", priority: "Medium", hours: 20, docUrl: "https://ollama.com/library", ytUrl: "https://www.youtube.com/watch?v=FNV1o2v98g4", practiceUrl: "https://github.com/ollama/ollama", certName: "Local Model Deployment Specialist", description: "Running open weight LLMs locally on consumer machines.", importance: "Ensures data privacy and avoids cloud API pricing." },
        { id: "evaluation", name: "AI Safety & Evaluation Benchmarks", category: "Projects", priority: "Medium", hours: 15, docUrl: "https://github.com/explodinggradients/ragas", ytUrl: "https://www.youtube.com/watch?v=gT5c4mC2NFs", practiceUrl: "https://ragas.io", certName: "AI Quality Assurance Engineer", description: "Auditing retrieval accuracy, prompt injections, and bias scopes.", importance: "Vital to ensure that products meet commercial quality standards before launch." }
      ],
      interview: [
        { id: "rag_optimization", name: "Optimizing Retrieval Precision", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://docs.llamaindex.ai/en/stable/optimizing/production_rag/", ytUrl: "https://www.youtube.com/watch?v=t5S7YQGjPsk", practiceUrl: "https://github.com", certName: "RAG Production Specialist", description: "Chunking structures, semantic re-ranking, and metadata configurations.", importance: "Vital question for backend AI positions." },
        { id: "agent_loops", name: "ReAct Loops & Tool Invocation", category: "Interview Prep", priority: "High", hours: 18, docUrl: "https://arxiv.org/abs/2210.03629", ytUrl: "https://www.youtube.com/watch?v=M5yG1aF1vJ8", practiceUrl: "https://github.com", certName: "Agent Theory and Practice", description: "Reasoning and acting loops, tool handling, and handling execution failures.", importance: "Crucial for senior agent engineering roles." },
        { id: "cost_latency", name: "Context Caching & Model Quantization", category: "Interview Prep", priority: "Medium", hours: 15, docUrl: "https://huggingface.co/docs/optimum/concept_guides/quantization", ytUrl: "https://www.youtube.com/watch?v=yYgVvL3N-Yc", practiceUrl: "https://github.com", certName: "Efficient Inference Architect", description: "Shrinking model parameters and caching weights to lower server latency.", importance: "Core to keeping commercial operation costs sustainable." }
      ]
    },
    learningOrder: ["python_ai", "llm_apis", "git_ai", "data_handling", "vector_db", "rag", "orchestration_ai", "finetuning", "agentic", "deployment_ai", "evaluation", "rag_optimization", "agent_loops", "cost_latency"],
    interviewTopics: [
      "Explain the ReAct (Reason + Action) loop structure and how agent failures are corrected.",
      "How does semantic chunk overlap improve retrieval precision in RAG architectures?",
      "What is model quantization (e.g. GGUF vs AWQ) and how does it affect memory footprints?",
      "How do you evaluate RAG systems using faithfulness and answer relevance metrics?",
      "Design an autonomous pipeline that corrects syntax errors in generated code blocks."
    ],
    projectsList: [
      {
        id: "ai_p1",
        title: "Intelligent Semantic PDF Assistant",
        difficulty: "Beginner",
        timeEstimate: "12-18 Hours",
        skillsGained: "Python, text tokenization, embeddings creation, cosine similarity search, and prompt formatting.",
        description: "Develop a script that processes textbook files, creates textual chunk maps, and answers reader queries based strictly on semantic context.",
        githubChecklist: ["Extract text layout structures from PDFs", "Generate custom embedding vectors", "Implement cosine search lookup"],
        deployChecklist: ["Configure local terminal runtime script", "Store vectors inside lightweight SQLite tables", "Upload codebase to Git repository"],
        resumeImpact: "Proves basic understanding of text vectors and creating semantic search databases."
      },
      {
        id: "ai_p2",
        title: "Enterprise-Grade RAG Search System",
        difficulty: "Intermediate",
        timeEstimate: "25-35 Hours",
        skillsGained: "Vector DB (ChromaDB), LangChain orchestration, semantic reranking, cache strategies, and Streamlit interfaces.",
        description: "Build a document explorer that allows uploading papers, stores them in vector formats, and queries them with sources cited and speed caching.",
        githubChecklist: ["Implement chroma DB collection maps", "Structure LangChain retrieval qa chain template", "Add Cohere re-ranking model filters"],
        deployChecklist: ["Deploy app UI on Streamlit Community Cloud", "Provision Chroma index on cloud bucket", "Validate API response latency metrics < 1.5s"],
        resumeImpact: "Demonstrates practical capacity in designing custom search indices and configuring enterprise search features."
      },
      {
        id: "ai_p3",
        title: "Autonomous Multi-Agent Development Pipeline",
        difficulty: "Advanced",
        timeEstimate: "40-60 Hours",
        skillsGained: "Agentic system design, function-calling loop, sandboxed execution, memory managers, and error-recovery loops.",
        description: "Construct a multi-agent assembly line. One agent writes Python solutions based on requirements, another executes them in secure scripts, and a third corrects syntax.",
        githubChecklist: ["Create custom crewAI agent profiles", "Build Docker execution sandbox wrappers", "Implement feedback validation state loop"],
        deployChecklist: ["Deploy workspace container to cloud registry", "Verify API authorization shields", "Profile agent memory storage overhead"],
        resumeImpact: "Demonstrates mastery of agent task delegation, sandboxing, and autonomous loop correction."
      }
    ],
    resources: [
      { name: "Hugging Face Course", url: "https://huggingface.co/learn", type: "Guide" },
      { name: "LangChain Documentation", url: "https://js.langchain.com", type: "Docs" },
      { name: "DeepLearning.AI Courses", url: "https://www.deeplearning.ai", type: "Courses" },
      { name: "AI Engineer Roadmap", url: "https://roadmap.sh/ai-engineer", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Hugging Face Fellowship Program", type: "Fellowship", provider: "Hugging Face", link: "https://huggingface.co", description: "A research-focused fellowship exploring open-source deep learning models, weights optimization, and transformer scaling." },
      { title: "Lablab.ai LLM Hackathon", type: "Hackathon", provider: "Lablab.ai", link: "https://lablab.ai", description: "Join teams globally to construct functional agentic software configurations leveraging top API models within 72 hours." },
      { title: "OpenAI Applied AI Internship", type: "Internship", provider: "OpenAI", link: "https://openai.com/careers", description: "Integrate large scale model capabilities into standard apps, benchmark outputs, and improve developer tools." }
    ]
  },

  dataScientist: {
    id: "dataScientist",
    title: "Data Scientist",
    description: "Extracts insights from structured and unstructured data, builds statistical models, and designs data pipelines.",
    difficulty: "Hard",
    marketDemand: "High",
    salaryRange: "$90,000 - $155,000",
    skills: {
      foundations: [
        { id: "python_ds", name: "Python (NumPy, Pandas)", category: "Foundations", priority: "High", hours: 20, docUrl: "https://pandas.pydata.org/docs/", ytUrl: "https://www.youtube.com/watch?v=F6elT1gSgBY", practiceUrl: "https://www.kaggle.com/learn/pandas", certName: "Pandas Certification", description: "Data manipulation arrays and dataframes.", importance: "Core tool for loading, clean filtering, and profiling tabular records." },
        { id: "statistics", name: "Probability & Statistics", category: "Foundations", priority: "High", hours: 25, docUrl: "https://openstax.org/details/books/introductory-statistics", ytUrl: "https://www.youtube.com/watch?v=xxpc-HPKN28", practiceUrl: "https://www.khanacademy.org/math/statistics-probability", certName: "Statistical Methods Mastery", description: "Descriptive metrics, variance, and distributions.", importance: "Allows drawing correct mathematical conclusions from data." },
        { id: "sql_ds", name: "Advanced SQL Queries & Analytics", category: "Foundations", priority: "High", hours: 20, docUrl: "https://www.postgresql.org/docs/", ytUrl: "https://www.youtube.com/watch?v=zduSFxRajkE", practiceUrl: "https://leetcode.com/studyplan/30-days-of-lc-sql/", certName: "Advanced SQL Certificate", description: "Window functions, common table expressions, and complex joins.", importance: "Allows extracting raw data aggregates directly from enterprise warehouses." },
        { id: "jupyter", name: "Jupyter Environments & Notebooks", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://jupyter.org/documentation", ytUrl: "https://www.youtube.com/watch?v=HW29067qVWk", practiceUrl: "https://colab.research.google.com", certName: "Jupyter Notebook Essentials", description: "Interactive markdown and cell-based Python execution environments.", importance: "Standard interface for exploratory modeling and visualization shares." }
      ],
      core: [
        { id: "ml_scikit", name: "Machine Learning (Scikit-Learn)", category: "Core Skills", priority: "High", hours: 30, docUrl: "https://scikit-learn.org/stable/user_guide.html", ytUrl: "https://www.youtube.com/watch?v=0Lt9w-ROcGY", practiceUrl: "https://www.kaggle.com", certName: "Machine Learning Specialist", description: "Classification, regression, clustering algorithms, and hyperparameter tuning.", importance: "Core framework for training traditional machine learning models." },
        { id: "visualization", name: "Data Visualization (Matplotlib)", category: "Core Skills", priority: "Medium", hours: 15, docUrl: "https://matplotlib.org/stable/users/index.html", ytUrl: "https://www.youtube.com/watch?v=3Xc3CA655Y4", practiceUrl: "https://www.datacamp.com", certName: "Scientific Plotting Certificate", description: "Creating charts, line graphs, and correlation matrix heatmaps.", importance: "Required to communicate patterns and findings clearly to business stakeholders." },
        { id: "data_cleaning", name: "Data Wrangling & Engineering", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://pandas.pydata.org/docs/user_guide/dsintro.html", ytUrl: "https://www.youtube.com/watch?v=Jy5yOlkOQ1Q", practiceUrl: "https://www.kaggle.com", certName: "Feature Engineering Expert", description: "Handling missing values, scaling features, and converting categorical inputs.", importance: "Clean data formats determine model performance far more than algorithm complexity." },
        { id: "math_ds", name: "Linear Algebra & Calculus", category: "Core Skills", priority: "Medium", hours: 15, docUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", ytUrl: "https://www.youtube.com/watch?v=JNMUv53hHl0", practiceUrl: "https://www.khanacademy.org/math/linear-algebra", certName: "Mathematics of Machine Learning", description: "Matrices, vectors, dot products, derivatives, and gradient descent.", importance: "Helps you understand how neural backpropagation and optimization work under the hood." }
      ],
      projects: [
        { id: "deep_learning", name: "Deep Learning (PyTorch/TensorFlow)", category: "Projects", priority: "Medium", hours: 25, docUrl: "https://pytorch.org/docs/", ytUrl: "https://www.youtube.com/watch?v=c36lUUrxsHs", practiceUrl: "https://github.com", certName: "Deep Neural Networks Specialist", description: "Multi-layer perceptrons, CNNs, and sequence processing models.", importance: "Required to tackle unstructured data like image files and text documents." },
        { id: "big_data", name: "Big Data Tools (Spark/Databricks)", category: "Projects", priority: "Medium", hours: 20, docUrl: "https://spark.apache.org/docs/latest/", ytUrl: "https://www.youtube.com/watch?v=_C8kWso4ne4", practiceUrl: "https://www.databricks.com", certName: "Apache Spark Developer", description: "Distributed dataframes processing across cloud server nodes.", importance: "Enables processing gigabytes of raw data records that crash local memory." },
        { id: "api_deployment", name: "Model Deployment (FastAPI/Streamlit)", category: "Projects", priority: "High", hours: 18, docUrl: "https://fastapi.tiangolo.com", ytUrl: "https://www.youtube.com/watch?v=gQyee_j80s8", practiceUrl: "https://github.com", certName: "Machine Learning Deployments Specialist", description: "Serving model prediction outputs via programmatic REST endpoints.", importance: "Required to connect your models to actual commercial software products." }
      ],
      interview: [
        { id: "ab_testing", name: "A/B Testing & Experiment Design", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://hbr.org/2017/09/a-refresher-on-a-b-testing", ytUrl: "https://www.youtube.com/watch?v=z8S128h1qJ0", practiceUrl: "https://github.com", certName: "A/B Testing & Experiment Specialist", description: "Hypothesis testing, sample sizing, power analysis, and significance indicators.", importance: "Standard test question during consumer product data roles." },
        { id: "ml_theory", name: "ML Algorithm Theory & Math", category: "Interview Prep", priority: "High", hours: 20, docUrl: "https://web.stanford.edu/~hastie/ElemStatLearn/", ytUrl: "https://www.youtube.com/watch?v=PPLop452Rvg", practiceUrl: "https://github.com", certName: "Theoretical Machine Learning Master", description: "Bias-variance tradeoffs, SVM parameters, decision trees, and regularizations.", importance: "Passes deep engineering audits during ML research rounds." },
        { id: "sql_interview", name: "Data Manipulation Live Tests", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://leetcode.com/problemset/database/", ytUrl: "https://www.youtube.com/watch?v=7V35oU2yU7U", practiceUrl: "https://leetcode.com", certName: "SQL Interview Preparation", description: "Solving real-time aggregations, windowing, and session identification questions.", importance: "Determines whether you pass the initial technical screening." }
      ]
    },
    learningOrder: ["python_ds", "statistics", "sql_ds", "jupyter", "ml_scikit", "visualization", "data_cleaning", "math_ds", "deep_learning", "big_data", "api_deployment", "ab_testing", "ml_theory", "sql_interview"],
    interviewTopics: [
      "Explain the bias-variance tradeoff and how regularization (L1/L2) mitigates overfitting.",
      "How do you determine the sample size required to run a statistically significant A/B test?",
      "Describe the difference between bagging and boosting, naming examples of each.",
      "Write a SQL query that retrieves users whose monthly purchases exceeded the annual average.",
      "What is the ROC/AUC metric and when is it preferred over raw classification accuracy?"
    ],
    projectsList: [
      {
        id: "ds_p1",
        title: "Housing Market Exploratory Analysis",
        difficulty: "Beginner",
        timeEstimate: "10-15 Hours",
        skillsGained: "Python scripts, Pandas filters, Seaborn plots, outlier removal, and correlation matrix analysis.",
        description: "Import, clean, and visualize a real estate dataset, generating insights on pricing trends, regional variances, and critical correlation parameters.",
        githubChecklist: ["Clean null variables and format column types", "Plot price distributions and correlation heatmaps", "Generate markdown insight summaries"],
        deployChecklist: ["Host Jupyter notebook on GitHub", "Save cleaned datasets inside CSV folders", "Publish slide deck on Google Slides"],
        resumeImpact: "Demonstrates fundamental ability to import datasets, clean dirty features, and write clean charts."
      },
      {
        id: "ds_p2",
        title: "Customer Churn Prediction Model",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "Scikit-Learn, data scaling, classification models (Random Forest, XGBoost), and ROC/AUC assessment.",
        description: "Analyze telecom subscriber statistics, build a prediction model identifying customers at high risk of leaving, and deploy an interactive dashboard.",
        githubChecklist: ["Scale continuous numerical variables", "Run hyperparameter randomized search grids", "Save prediction weights using Joblib"],
        deployChecklist: ["Deploy model using Streamlit dashboard interfaces", "Validate classification metrics on validation sets", "Host application container on Hugging Face"],
        resumeImpact: "Exhibits predictive modeling capacity, feature engineering logic, and presenting business dashboards."
      },
      {
        id: "ds_p3",
        title: "End-to-End Image Classification Pipeline",
        difficulty: "Advanced",
        timeEstimate: "40-55 Hours",
        skillsGained: "PyTorch CNN modeling, transfer learning, API deployment with FastAPI, and Docker packaging.",
        description: "Train a neural network classifier on custom image sets, refine performance using hyperparameter sweeps, and build a fast inference microservice.",
        githubChecklist: ["Write PyTorch dataset loader maps", "Fine-tune pre-trained ResNet weights", "Configure FastAPI prediction routes"],
        deployChecklist: ["Build and run Docker container locally", "Deploy server to Vercel or GCP Cloud Run", "Measure inference response speeds"],
        resumeImpact: "Shows top-tier capabilities in deep learning, transfer optimization, and deploying Docker model microservices."
      }
    ],
    resources: [
      { name: "Kaggle Learn Courses", url: "https://www.kaggle.com/learn", type: "Guide" },
      { name: "Scikit-Learn User Guide", url: "https://scikit-learn.org", type: "Docs" },
      { name: "Python for Data Analysis Book", url: "https://wesmckinney.com/book/", type: "Book" },
      { name: "Data Science Roadmap", url: "https://roadmap.sh/data-science", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Kaggle Global Data Prediction Challenge", type: "Competition", provider: "Kaggle", link: "https://www.kaggle.com/competitions", description: "Compete with data scientists globally in optimizing accuracy parameters on structured business datasets with cash prize rewards." },
      { title: "IBM Data Science Professional Fellowship", type: "Fellowship", provider: "IBM", link: "https://www.ibm.com/training", description: "An intensive guided research track covering hybrid cloud data orchestration, cognitive analytics, and industrial modeling." },
      { title: "Netflix Algorithms Team Internship", type: "Internship", provider: "Netflix", link: "https://jobs.netflix.com", description: "Engage directly in refining content recommending engines, network latency datasets, and streaming scaling models." }
    ]
  },

  devops: {
    id: "devops",
    title: "DevOps Engineer",
    description: "Bridging development and operations by automating software builds, testing, releases, and managing secure cloud infrastructures.",
    difficulty: "Very Hard",
    marketDemand: "High",
    salaryRange: "$100,000 - $170,000",
    skills: {
      foundations: [
        { id: "linux_sys", name: "Linux System Administration", category: "Foundations", priority: "High", hours: 20, docUrl: "https://linuxjourney.com", ytUrl: "https://www.youtube.com/watch?v=V1y-mbWM3B8", practiceUrl: "https://overthewire.org", certName: "Linux Server Administrator", description: "User management, file permissions, daemon administration.", importance: "Core operating system environment for hosting cloud servers." },
        { id: "scripting", name: "Bash & Python Automation Scripting", category: "Foundations", priority: "High", hours: 15, docUrl: "https://www.shellscript.sh", ytUrl: "https://www.youtube.com/watch?v=cQepf9fY6cM", practiceUrl: "https://www.hackerrank.com/domains/shell", certName: "Automation Scripting Certificate", description: "Writing scripts to automate file management and system setups.", importance: "Eliminates repetitive manual configurations and operational errors." },
        { id: "networking", name: "HTTP, DNS, SSH, TCP/IP", category: "Foundations", priority: "High", hours: 15, docUrl: "https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/", ytUrl: "https://www.youtube.com/watch?v=IPvYjXofjgk", practiceUrl: "https://www.cloudflare.com/learning/", certName: "Cloud Networking Essentials", description: "IP routing, domain mappings, firewalls, and secure connections.", importance: "Vital for enabling secure and reliable communication between web apps." },
        { id: "git_ops", name: "Git Workflow Controls", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Git Version Control", description: "Branching controls, tag releases, and pull requests.", importance: "Coordinates operational changes safely." }
      ],
      core: [
        { id: "docker_ops", name: "Containerization (Docker)", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://docs.docker.com", ytUrl: "https://www.youtube.com/watch?v=3c-iKanevAk", practiceUrl: "https://labs.play-with-docker.com", certName: "Docker Administrator", description: "Writing Dockerfiles, building images, and managing container ports.", importance: "Ensures uniform runtime environments from local testing to production." },
        { id: "cicd", name: "CI/CD (GitHub Actions / GitLab CI)", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://docs.github.com/en/actions", ytUrl: "https://www.youtube.com/watch?v=mFFXuXjVgkU", practiceUrl: "https://github.com/features/actions", certName: "CI/CD Pipeline Architect", description: "Writing workflows triggered by code pushes to automate tests and builds.", importance: "Saves developer time by catching bugs and deploying updates automatically." },
        { id: "iac", name: "Infrastructure as Code (Terraform)", category: "Core Skills", priority: "High", hours: 22, docUrl: "https://developer.hashicorp.com/terraform/docs", ytUrl: "https://www.youtube.com/watch?v=h970Zzy_DPM", practiceUrl: "https://learn.hashicorp.com/terraform", certName: "HashiCorp Certified: Terraform Associate", description: "Declaring cloud resources in structured layout configuration templates.", importance: "Allows spinning up servers, networks, and databases programmatically in minutes." },
        { id: "aws_basics", name: "Cloud Platforms (AWS/GCP)", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://docs.aws.amazon.com", ytUrl: "https://www.youtube.com/watch?v=3hLmDS179YE", practiceUrl: "https://aws.amazon.com/free/", certName: "AWS Certified Cloud Practitioner", description: "Core computing, storage, database, and identity services.", importance: "Industry standard hosting platforms for software products." }
      ],
      projects: [
        { id: "k8s", name: "Orchestration (Kubernetes/K3s)", category: "Projects", priority: "High", hours: 30, docUrl: "https://kubernetes.io/docs/home/", ytUrl: "https://www.youtube.com/watch?v=X48VuDVv0do", practiceUrl: "https://killercoda.com/playgrounds", certName: "Certified Kubernetes Administrator (CKA)", description: "Managing cluster deployments, scaling pods, and configuring load balancers.", importance: "Industry standard for orchestrating massive containers." },
        { id: "monitoring", name: "Monitoring (Prometheus & Grafana)", category: "Projects", priority: "Medium", hours: 18, docUrl: "https://prometheus.io/docs/introduction/overview/", ytUrl: "https://www.youtube.com/watch?v=A3nZUI5ww5M", practiceUrl: "https://play.grafana.org", certName: "Metrics & Alerting Specialist", description: "Collecting application metrics and plotting live system health charts.", importance: "Notifies team of memory leaks or site crashes before users notice." },
        { id: "security_devops", name: "SecOps (SSL, IAM, Audits)", category: "Projects", priority: "Medium", hours: 15, docUrl: "https://www.cisecurity.org", ytUrl: "https://www.youtube.com/watch?v=r0p5E8c67j8", practiceUrl: "https://snyk.io", certName: "DevSecOps Certified Specialist", description: "Automating dependency vulnerability audits, key rotations, and TLS configs.", importance: "Protects cloud systems from common hacker intrusions." }
      ],
      interview: [
        { id: "troubleshooting", name: "Live Incident Troubleshooting", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://linux.die.net/man/", ytUrl: "https://www.youtube.com/watch?v=F_f43nC7tKk", practiceUrl: "https://sadservers.com", certName: "Linux Diagnostics Expert", description: "Inspecting logs, monitoring CPU usage, and debugging socket failures.", importance: "Core test during live system administrator screens." },
        { id: "infra_design", name: "HA Infrastructure Design", category: "Interview Prep", priority: "High", hours: 20, docUrl: "https://aws.amazon.com/architecture/well-architected/", ytUrl: "https://www.youtube.com/watch?v=Yr1epse1oW0", practiceUrl: "https://github.com", certName: "AWS Solutions Architect Associate", description: "Designing multi-region deployments with automatic failovers.", importance: "Crucial for senior DevOps and infrastructure roles." },
        { id: "sre_concepts", name: "SLOs, SLAs & SRE Concepts", category: "Interview Prep", priority: "Medium", hours: 12, docUrl: "https://sre.google/sre-book/table-of-contents/", ytUrl: "https://www.youtube.com/watch?v=P_XhJ43XW9Q", practiceUrl: "https://sre.google", certName: "Site Reliability Specialist", description: "Error budgets, postmortems, and deployment risk controls.", importance: "Vital for scaling operational practices across dev teams." }
      ]
    },
    learningOrder: ["linux_sys", "scripting", "networking", "git_ops", "docker_ops", "cicd", "iac", "aws_basics", "k8s", "monitoring", "security_devops", "troubleshooting", "infra_design", "sre_concepts"],
    interviewTopics: [
      "Explain the differences between Docker containers and Kernel virtualization virtual machines.",
      "How would you troubleshoot a server throwing 502 Bad Gateway errors behind an Nginx proxy?",
      "What is infrastructure drift and how does Terraform state help correct it?",
      "Design a zero-downtime rolling update deployment flow in a Kubernetes cluster.",
      "How do you calculate service availability using error budgets (e.g. 99.9% uptime targets)?"
    ],
    projectsList: [
      {
        id: "do_p1",
        title: "Static Site Automated CI/CD Pipeline",
        difficulty: "Beginner",
        timeEstimate: "8-12 Hours",
        skillsGained: "GitHub Actions, linting tools, unit testing triggers, and cloud bucket hosting.",
        description: "Configure a repository that automatically audits code formatting, runs test files, and deploys builds to AWS S3/Netlify on push events.",
        githubChecklist: ["Configure .github/workflows/deploy.yml", "Integrate ESLint and Vitest checks", "Write AWS credentials action blocks"],
        deployChecklist: ["Deploy app to AWS S3 or Cloudflare Pages", "Verify cache expiration headers", "Validate automated webhook deployments on push"],
        resumeImpact: "Exhibits core knowledge of CI pipelines, pull-request linting, and automated cloud hosting."
      },
      {
        id: "do_p2",
        title: "Multi-Service App Deployment with Terraform",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "Terraform configuration, VPC design, EC2 orchestration, RDS provisioning, and Docker Compose.",
        description: "Write declaration templates deploying a Node application linking to a database. Structure VPC rules, subnets, and secure credentials dynamically.",
        githubChecklist: ["Write main.tf cloud network configurations", "Setup VPC subnets and routing rules", "Configure RDS secure security groups"],
        deployChecklist: ["Verify infrastructure creation via terraform apply", "Test automatic server replacement by manually terminating EC2 instances", "Review resource cost forecasts"],
        resumeImpact: "Demonstrates capacity in Infrastructure as Code (IaC), VPC security, and provisioning cloud resources."
      },
      {
        id: "do_p3",
        title: "Kubernetes Autoscaling Cluster with Monitoring",
        difficulty: "Advanced",
        timeEstimate: "40-60 Hours",
        skillsGained: "Kubernetes pods/deployments, Horizontal Pod Autoscaler, Prometheus metrics collection, and Grafana dashboard alerts.",
        description: "Deploy a local microservices cluster. Set up automated scaling rules under load spikes and display live CPU/Memory utilization charts.",
        githubChecklist: ["Create Kubernetes deployment.yaml maps", "Configure HPA cpu scaling variables", "Write Prometheus ServiceMonitor configs"],
        deployChecklist: ["Deploy cluster to local Minikube or cloud GKE", "Configure Grafana alerts for server errors", "Simulate artificial load spikes using Apache Bench"],
        resumeImpact: "Exhibits senior DevOps capability in microservice orchestration, autoscaling rules, and monitoring metrics."
      }
    ],
    resources: [
      { name: "Linux Journey Fundamentals", url: "https://linuxjourney.com", type: "Guide" },
      { name: "Terraform Get Started Guide", url: "https://developer.hashicorp.com/terraform", type: "Docs" },
      { name: "Kubernetes Interactive Tutorials", url: "https://kubernetes.io/docs/tutorials/", type: "Tutorial" },
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Linux Foundation Mentorship Program", type: "Fellowship", provider: "Linux Foundation", link: "https://mentorship.lfx.linuxfoundation.org", description: "Work under the guidance of core maintainers on cloud native software (CNCF) and core virtualization utilities." },
      { title: "Kubernetes Community Days Hackathon", type: "Hackathon", provider: "CNCF", link: "https://community.cncf.io", description: "Collaborate to solve real operational scaling issues or write custom controllers for Kubernetes workloads." },
      { title: "AWS DevOps Apprenticeship", type: "Internship", provider: "Amazon Web Services", link: "https://amazon.jobs", description: "Work alongside cloud architects designing large scalability mechanisms, IAM policies, and infrastructure solutions." }
    ]
  },

  mobile: {
    id: "mobile",
    title: "Mobile App Developer",
    description: "Designs and builds responsive, native or cross-platform mobile apps for iOS and Android devices.",
    difficulty: "Medium",
    marketDemand: "High",
    salaryRange: "$85,000 - $140,000",
    skills: {
      foundations: [
        { id: "swift_kotlin", name: "Swift (iOS) or Kotlin (Android)", category: "Foundations", priority: "High", hours: 25, docUrl: "https://developer.android.com/kotlin", ytUrl: "https://www.youtube.com/watch?v=F9UC9DY-vIU", practiceUrl: "https://play.kotlinlang.org", certName: "Native Mobile Foundations", description: "Native language structures for mobile systems.", importance: "Required to write high-performance native screens." },
        { id: "mobile_ui_basics", name: "UI Components & Layouts", category: "Foundations", priority: "High", hours: 15, docUrl: "https://developer.apple.com/documentation/swiftui", ytUrl: "https://www.youtube.com/watch?v=ufDcoGfnbXY", practiceUrl: "https://developer.apple.com/xcode/", certName: "Mobile Interface Designer", description: "Adapting layout margins, constraints, and grids for phone displays.", importance: "Crucial for delivering intuitive user experiences on tiny displays." },
        { id: "git_mobile", name: "Git for Mobile Workflows", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Version Control Specialist", description: "Code versioning and branching workflows.", importance: "Essential for team collaboration in mobile development." }
      ],
      core: [
        { id: "react_native", name: "React Native or Flutter Framework", category: "Core Skills", priority: "High", hours: 30, docUrl: "https://reactnative.dev", ytUrl: "https://www.youtube.com/watch?v=gvkqT_Uoahw", practiceUrl: "https://snack.expo.dev", certName: "Meta Cross-Platform Mobile Developer", description: "Frameworks for building iOS and Android apps from a single codebase.", importance: "Standard for fast startup iterations and multi-platform launches." },
        { id: "state_mob", name: "Mobile State (Redux/Zustand)", category: "Core Skills", priority: "High", hours: 18, docUrl: "https://reactnative.dev/docs/state", ytUrl: "https://www.youtube.com/watch?v=k_n71T0L53E", practiceUrl: "https://github.com", certName: "Mobile State Management Associate", description: "Managing application state and rendering updates across screens.", importance: "Coordinates shopping carts, user sessions, and local data." },
        { id: "device_apis", name: "Hardware APIs (GPS, Camera)", category: "Core Skills", priority: "Medium", hours: 15, docUrl: "https://docs.expo.dev/versions/latest/sdk/camera/", ytUrl: "https://www.youtube.com/watch?v=B8F9vG-P3-A", practiceUrl: "https://expo.dev", certName: "Mobile Hardware Integration Specialist", description: "Interfacing with native phone sensors, cameras, and file networks.", importance: "Unlocks core interactive features like mapping and photo sharing." }
      ],
      projects: [
        { id: "local_storage_mob", name: "SQLite & CoreData Storage", category: "Projects", priority: "High", hours: 15, docUrl: "https://docs.expo.dev/versions/latest/sdk/sqlite/", ytUrl: "https://www.youtube.com/watch?v=hD7yJ7ZpBw4", practiceUrl: "https://github.com", certName: "Mobile Database Specialist", description: "In-device lightweight databases.", importance: "Enables offline support and saves user changes locally." },
        { id: "push_notifications", name: "Push Notifications (FCM / APNs)", category: "Projects", priority: "Medium", hours: 12, docUrl: "https://firebase.google.com/docs/cloud-messaging", ytUrl: "https://www.youtube.com/watch?v=20pUvP3cGAE", practiceUrl: "https://console.firebase.google.com", certName: "Mobile Engagement Specialist", description: "Triggering and rendering alerts on user devices.", importance: "Critical for retention and alerting users of active milestones." }
      ],
      interview: [
        { id: "mobile_lifecycle", name: "App Lifecycles & State Transitions", category: "Interview Prep", priority: "High", hours: 12, docUrl: "https://developer.android.com/guide/components/activities/activity-lifecycle", ytUrl: "https://www.youtube.com/watch?v=cI7fX2dKxco", practiceUrl: "https://github.com", certName: "Mobile Platform Expert", description: "Understanding foreground, background, and suspended app states.", importance: "Required to build reliable apps that don't drain battery or crash." },
        { id: "perf_mob", name: "Memory Profiling & Render Performance", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://developer.android.com/studio/profile", ytUrl: "https://www.youtube.com/watch?v=vVj_e-yP4E0", practiceUrl: "https://github.com", certName: "Mobile Optimization Architect", description: "Debugging memory leaks, optimizing image sizes, and rendering heavy list scrolls.", importance: "Vital for delivering smooth 60 FPS mobile experiences." }
      ]
    },
    learningOrder: ["swift_kotlin", "mobile_ui_basics", "git_mobile", "react_native", "state_mob", "device_apis", "local_storage_mob", "push_notifications", "mobile_lifecycle", "perf_mob"],
    interviewTopics: [
      "Explain the App lifecycle states and how to save user state when the app is suspended.",
      "How do you optimize image rendering and memory usage in long list views?",
      "Describe the difference between cross-platform frameworks (e.g. React Native) and native languages.",
      "How do push notification cycles work between devices, APNs/FCM servers, and backends?",
      "Implement a local caching mechanism that allows offline viewing of database records."
    ],
    projectsList: [
      {
        id: "mob_p1",
        title: "Daily Focus Tracker App",
        difficulty: "Beginner",
        timeEstimate: "12-18 Hours",
        skillsGained: "Mobile UI layouts, local storage, timer events, and custom sound configurations.",
        description: "Build a sleek habit-building timer app that saves custom streaks locally and plays notification sounds on completion.",
        githubChecklist: ["Design layout interfaces with custom sliders", "Setup local AsyncStorage habit records", "Wire background timer events"],
        deployChecklist: ["Launch code on Expo Go client", "Verify app responsiveness across iOS and Android simulators", "Host code on GitHub"],
        resumeImpact: "Exhibits core mobile layout skills and managing active timer states."
      },
      {
        id: "mob_p2",
        title: "Geotagged Photo Journal",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "Camera API permissions, GPS location mapping, SQLite databases, and screen transitions.",
        description: "Create a private journal app allowing users to snap pictures, log active descriptions, and pin locations on interactive maps.",
        githubChecklist: ["Implement camera permission validation prompts", "Query current GPS location latitude/longitude coordinates", "Set up local SQLite table records"],
        deployChecklist: ["Build app binary with EAS Build", "Test offline mode capabilities on actual device", "Generate App Store metadata details"],
        resumeImpact: "Demonstrates knowledge of native hardware APIs, local relational storage, and maps."
      },
      {
        id: "mob_p3",
        title: "Real-time Peer Messaging Client",
        difficulty: "Advanced",
        timeEstimate: "35-50 Hours",
        skillsGained: "WebSockets, local notifications, secure keychain storage, and keyboard handling optimizations.",
        description: "Build a low-latency chat app with secure user accounts, message encryption, active status alerts, and push notifications.",
        githubChecklist: ["Secure user tokens inside native Keychain/Keystore layers", "Configure socket connections with auto-reconnection loops", "Add local push notification triggers"],
        deployChecklist: ["Publish app on Google Play Store test track", "Configure push certificate keys on FCM servers", "Optimize keyboard layouts for text inputs"],
        resumeImpact: "Shows top-tier capabilities in socket connections, native storage security, and publishing to stores."
      }
    ],
    resources: [
      { name: "React Native Official Docs", url: "https://reactnative.dev/docs/getting-started", type: "Docs" },
      { name: "Android Developer Guides", url: "https://developer.android.com", type: "Guide" },
      { name: "Swift Playgrounds", url: "https://www.apple.com/swift/playgrounds/", type: "Tutorial" },
      { name: "Mobile Roadmap", url: "https://roadmap.sh/android", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Google Android Developer Academy", type: "Fellowship", provider: "Google", link: "https://developer.android.com", description: "Mentorship and training track designed to equip developers with skills to build high-quality native apps." },
      { title: "Apple Swift Student Challenge", type: "Competition", provider: "Apple", link: "https://developer.apple.com/swift-student-challenge/", description: "Create an interactive Swift playground demonstrating coding capabilities for a chance to win exclusive rewards." },
      { title: "Expensify React Native Apprenticeship", type: "Internship", provider: "Expensify", link: "https://we.are.expensify.com", description: "Paid cross-platform development internship, resolving active issues on their open-source mobile repositories." }
    ]
  },

  cloud: {
    id: "cloud",
    title: "Cloud Architect",
    description: "Designs, provisions, and optimizes enterprise cloud infrastructure networks for scaling, reliability, and security.",
    difficulty: "Hard",
    marketDemand: "High",
    salaryRange: "$110,000 - $180,000",
    skills: {
      foundations: [
        { id: "cloud_fundamentals", name: "Cloud Compute, Storage & CDN", category: "Foundations", priority: "High", hours: 20, docUrl: "https://aws.amazon.com/what-is-cloud-computing/", ytUrl: "https://www.youtube.com/watch?v=M988_u3YrBo", practiceUrl: "https://aws.amazon.com", certName: "Cloud Architect Foundations", description: "Virtual servers, storage structures, and static cache servers.", importance: "Base building block of modern cloud architectures." },
        { id: "networking_cloud", name: "VPCs, Subnets & Routing rules", category: "Foundations", priority: "High", hours: 18, docUrl: "https://docs.aws.amazon.com/vpc/", ytUrl: "https://www.youtube.com/watch?v=g2JOHLHh4rI", practiceUrl: "https://github.com", certName: "Cloud Network Administrator", description: "Private cloud networks and secure communication protocols.", importance: "Isolates critical databases from external web traffic." },
        { id: "git_cloud", name: "Infrastructure Versioning", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Git Version Control", description: "Distributed version control system.", importance: "Tracks infrastructure modifications over time." }
      ],
      core: [
        { id: "aws_solutions", name: "AWS Core Solutions (EC2, S3, RDS)", category: "Core Skills", priority: "High", hours: 30, docUrl: "https://aws.amazon.com/products/", ytUrl: "https://www.youtube.com/watch?v=4TReCHe6kCQ", practiceUrl: "https://aws.amazon.com/free/", certName: "AWS Solutions Architect Associate", description: "Virtual computing instances, cloud databases, and asset storage.", importance: "Industry standard tools for deploying software systems." },
        { id: "iac_terraform", name: "Infrastructure as Code (Terraform)", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://developer.hashicorp.com/terraform", ytUrl: "https://www.youtube.com/watch?v=YGP9JzUvPZk", practiceUrl: "https://learn.hashicorp.com/terraform", certName: "Terraform Associate Certificate", description: "Defining and managing infrastructure using configuration code.", importance: "Ensures uniform cloud environments and prevents manual click configuration errors." },
        { id: "serverless", name: "Serverless (AWS Lambda & API Gateway)", category: "Core Skills", priority: "Medium", hours: 15, docUrl: "https://aws.amazon.com/lambda/", ytUrl: "https://www.youtube.com/watch?v=eOBq__h4OJ4", practiceUrl: "https://www.serverless.com", certName: "Serverless Application Specialist", description: "On-demand execution runtimes that scale from zero automatically.", importance: "Saves money by only charging when functions run." }
      ],
      projects: [
        { id: "load_balancing", name: "Auto-Scaling & Load Balancers", category: "Projects", priority: "High", hours: 15, docUrl: "https://docs.aws.amazon.com/elasticloadbalancing/", ytUrl: "https://www.youtube.com/watch?v=V-Z5gqV_1c8", practiceUrl: "https://aws.amazon.com", certName: "High Availability Specialist", description: "Distributing traffic and scaling servers dynamically based on CPU.", importance: "Prevents websites from crashing during massive traffic spikes." },
        { id: "cloud_security", name: "IAM, Key Vaults & Encryption", category: "Projects", priority: "High", hours: 15, docUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html", ytUrl: "https://www.youtube.com/watch?v=r0p5E8c67j8", practiceUrl: "https://aws.amazon.com", certName: "Cloud Security Architect", description: "Least-privilege policy definitions and cryptographic keys.", importance: "Blocks unauthorized database write actions and leaks." }
      ],
      interview: [
        { id: "disaster_recovery", name: "Disaster Recovery & Multi-Region", category: "Interview Prep", priority: "High", hours: 12, docUrl: "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i/", ytUrl: "https://www.youtube.com/watch?v=Yr1epse1oW0", practiceUrl: "https://github.com", certName: "Disaster Recovery Expert", description: "Designing database backups and automated DNS failovers.", importance: "Keeps critical apps running even if entire cloud regions fail." },
        { id: "cost_optimization", name: "Cost Analysis & Optimization", category: "Interview Prep", priority: "Medium", hours: 12, docUrl: "https://aws.amazon.com/aws-cost-management/", ytUrl: "https://www.youtube.com/watch?v=A3nZUI5ww5M", practiceUrl: "https://aws.amazon.com", certName: "Cloud FinOps Professional", description: "Auditing idle resources and configuring savings plans.", importance: "Reduces monthly cloud bills for enterprise projects." }
      ]
    },
    learningOrder: ["cloud_fundamentals", "networking_cloud", "git_cloud", "aws_solutions", "iac_terraform", "serverless", "load_balancing", "cloud_security", "disaster_recovery", "cost_optimization"],
    interviewTopics: [
      "Design a highly available architecture on AWS for a web application with a relational database.",
      "Describe the difference between horizontal and vertical scaling and when to use each.",
      "How do you implement least-privilege access using IAM policies for lambda functions?",
      "Explain the differences between RTO (Recovery Time Objective) and RPO (Recovery Point Objective).",
      "How would you optimize a company's cloud budget, reducing database costs by 30%?"
    ],
    projectsList: [
      {
        id: "cld_p1",
        title: "Secure Static Website on AWS",
        difficulty: "Beginner",
        timeEstimate: "8-12 Hours",
        skillsGained: "AWS S3 hosting, CloudFront CDN, Route53 DNS, and SSL certificate installation.",
        description: "Deploy a static website on Amazon S3, routing traffic through CloudFront with custom SSL certificates for HTTPS access.",
        githubChecklist: ["Configure S3 static bucket storage properties", "Setup CloudFront distribution channels", "Configure Route53 DNS zones"],
        deployChecklist: ["Verify SSL certificate activation status", "Test site delivery speed across geographic servers", "Audit page security headers"],
        resumeImpact: "Demonstrates fundamental ability to deploy secure, caching static sites on AWS."
      },
      {
        id: "cld_p2",
        title: "IaC Multi-Tier Server Stack",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "Terraform configurations, multi-subnet VPCs, load balancers, EC2 auto-scaling, and security groups.",
        description: "Write declaration templates provisioning a modular, high-availability server stack across multiple availability zones.",
        githubChecklist: ["Write modular Terraform network config maps", "Configure Auto Scaling Group conditions", "Setup Application Load Balancer targets"],
        deployChecklist: ["Verify infrastructure creation via terraform apply", "Test automatic server replacement by manually terminating EC2 instances", "Review resource cost forecasts"],
        resumeImpact: "Exhibits solid competency in Infrastructure as Code (IaC), networking VPCs, and auto-scaling setups."
      },
      {
        id: "cld_p3",
        title: "Serverless PDF Processing Microservice",
        difficulty: "Advanced",
        timeEstimate: "30-45 Hours",
        skillsGained: "AWS Lambda, S3 Event Triggers, API Gateway, DynamoDB, and IAM policies.",
        description: "Build an event-driven system where uploading a PDF to S3 triggers a Lambda to extract text metadata and save it to DynamoDB.",
        githubChecklist: ["Write Lambda trigger logic script in Python/Node", "Configure S3 bucket event notifications", "Set up DynamoDB database schemas"],
        deployChecklist: ["Deploy app stack using Serverless Framework", "Test API gateway access restrictions", "Monitor Lambda execution speeds in CloudWatch logs"],
        resumeImpact: "Demonstrates mastery of event-driven architectures, serverless design patterns, and least-privilege security settings."
      }
    ],
    resources: [
      { name: "AWS Training & Certification", url: "https://www.aws.training", type: "Docs" },
      { name: "Terraform Tutorials", url: "https://developer.hashicorp.com/terraform/tutorials", type: "Guide" },
      { name: "Serverless Handbook", url: "https://serverlesshandbook.dev", type: "Book" },
      { name: "Cloud Roadmap", url: "https://roadmap.sh/devops", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Google Cloud Platform Mentorship", type: "Fellowship", provider: "Google", link: "https://cloud.google.com", description: "Participate in guided workshops and projects using Google Cloud architecture patterns." },
      { title: "AWS Cloud Skills Hackathon", type: "Hackathon", provider: "AWS", link: "https://aws.amazon.com/hackathons/", description: "Collaborate to solve real-world problems using AWS analytics, ML, or serverless services." },
      { title: "HashiCorp Cloud Engineering Internship", type: "Internship", provider: "HashiCorp", link: "https://www.hashicorp.com/jobs", description: "Help build and optimize provisioning tools for multi-cloud deployments." }
    ]
  },

  cybersecurity: {
    id: "cybersecurity",
    title: "Cybersecurity Analyst",
    description: "Protects systems, networks, and data from digital attacks, identifying vulnerabilities and implementing security controls.",
    difficulty: "Hard",
    marketDemand: "Very High",
    salaryRange: "$90,000 - $150,000",
    skills: {
      foundations: [
        { id: "network_security", name: "Network Security Protocols & Ports", category: "Foundations", priority: "High", hours: 20, docUrl: "https://www.cloudflare.com/learning/security/what-is-network-security/", ytUrl: "https://www.youtube.com/watch?v=t5J5nKj7s2A", practiceUrl: "https://tryhackme.com", certName: "Network Security Foundations", description: "Firewalls, VPNs, subnet masks, and network protocols.", importance: "Critical for blocking malicious traffic at the network edge." },
        { id: "linux_security", name: "Linux System Hardening & CLI", category: "Foundations", priority: "High", hours: 15, docUrl: "https://www.computersecuritystudent.com/SECURITY/index.html", ytUrl: "https://www.youtube.com/watch?v=YGP9JzUvPZk", practiceUrl: "https://overthewire.org", certName: "Linux Security Specialist", description: "Configuring user permissions, SSH settings, and system firewalls.", importance: "Protects backend host systems from remote intrusions." },
        { id: "git_sec", name: "Secure Version Control", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Git Version Control", description: "Version control branching and code safety settings.", importance: "Ensures security patches are safely committed and deployed." }
      ],
      core: [
        { id: "penetration_testing", name: "Ethical Hacking & Penetration Testing", category: "Core Skills", priority: "High", hours: 30, docUrl: "https://www.kali.org/docs/", ytUrl: "https://www.youtube.com/watch?v=3Kq1MIfTWCE", practiceUrl: "https://www.hackthebox.com", certName: "CompTIA Security+", description: "Scanning target systems, exploiting bugs, and generating reports.", importance: "Identifies system vulnerabilities before hackers find them." },
        { id: "application_security", name: "OWASP Top 10 Auditing", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://owasp.org/www-project-top-ten/", ytUrl: "https://www.youtube.com/watch?v=cI7fX2dKxco", practiceUrl: "https://portswigger.net/web-security", certName: "OWASP Vulnerability Specialist", description: "Defending against SQL injection, XSS, and broken authentication.", importance: "Critical for securing web applications and user data databases." },
        { id: "incident_response", name: "Incident Response & Forensics", category: "Core Skills", priority: "Medium", hours: 20, docUrl: "https://www.nist.gov/cyberframework", ytUrl: "https://www.youtube.com/watch?v=IPvYjXofjgk", practiceUrl: "https://tryhackme.com", certName: "Incident Response Practitioner", description: "Investigating server breaches, isolating hosts, and analyzing log histories.", importance: "Enables teams to recover quickly and learn from hacker intrusions." }
      ],
      projects: [
        { id: "log_analysis", name: "SIEM & Log Analysis (Splunk)", category: "Projects", priority: "High", hours: 20, docUrl: "https://docs.splunk.com/Documentation", ytUrl: "https://www.youtube.com/watch?v=k_n71T0L53E", practiceUrl: "https://www.splunk.com/en_us/training/free-courses.html", certName: "Splunk Certified User", description: "Monitoring security events and setting up automated alert queries.", importance: "Detects unauthorized login attempts or database exports in real-time." },
        { id: "cryptography", name: "SSL/TLS & Cryptographic Keys", category: "Projects", priority: "Medium", hours: 15, docUrl: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html", ytUrl: "https://www.youtube.com/watch?v=fgnxcUQ569o", practiceUrl: "https://cryptopals.com", certName: "Cryptography Specialist", description: "Hashing passwords, encrypting data, and managing SSH keys.", importance: "Protects user data files from cleartext exposure during leaks." }
      ],
      interview: [
        { id: "threat_modeling", name: "Threat Modeling & Risk Analysis", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://owasp.org/www-community/Threat_Modeling", ytUrl: "https://www.youtube.com/watch?v=Yr1epse1oW0", practiceUrl: "https://github.com", certName: "Threat Modeling Practitioner", description: "Identifying security threats and designing mitigation strategies.", importance: "Standard interview exercise for software and security roles." },
        { id: "sec_architecture", name: "Zero-Trust Security Architecture", category: "Interview Prep", priority: "High", hours: 18, docUrl: "https://www.nist.gov/publications/zero-trust-architecture", ytUrl: "https://www.youtube.com/watch?v=A3nZUI5ww5M", practiceUrl: "https://github.com", certName: "Zero-Trust Architect", description: "Configuring continuous verification policies for cloud networks.", importance: "Core design philosophy for modern enterprise security setups." }
      ]
    },
    learningOrder: ["network_security", "linux_security", "git_sec", "penetration_testing", "application_security", "incident_response", "log_analysis", "cryptography", "threat_modeling", "sec_architecture"],
    interviewTopics: [
      "Explain the difference between symmetric and asymmetric encryption and when to use each.",
      "How does a SQL injection attack work, and how do parameterized queries prevent it?",
      "Describe the steps you would take to isolate and investigate a compromised server.",
      "What is Zero Trust, and how do you implement it inside an active cloud deployment?",
      "How do cross-site scripting (XSS) attacks work, and how can content security policies (CSP) help?"
    ],
    projectsList: [
      {
        id: "sec_p1",
        title: "Network Vulnerability Scanner",
        difficulty: "Beginner",
        timeEstimate: "10-15 Hours",
        skillsGained: "Nmap command triggers, port scanning analysis, and generating security reports.",
        description: "Write a script that scans target networks, identifying open ports, active services, and listing known vulnerabilities.",
        githubChecklist: ["Write port scan automation script in Bash/Python", "Format scan results into structured tables", "Save security reports inside folders"],
        deployChecklist: ["Verify execution permissions on test server instances", "Test script against sandboxed targets", "Commit code repository to Git"],
        resumeImpact: "Demonstrates fundamental ability to automate port audits and write diagnostic scripts."
      },
      {
        id: "sec_p2",
        title: "Secure Auth Portal with MFA",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "Password hashing (bcrypt), JWT tokens, and two-factor authentication (TOTP).",
        description: "Build a Node/Python auth backend server that hashes password logs and validates authenticator app security codes.",
        githubChecklist: ["Implement bcrypt password hashing configurations", "Set up TOTP authenticator key generators", "Write token audit logs"],
        deployChecklist: ["Host backend server with secure HTTPS configurations", "Verify cookie flags (Secure, HttpOnly)", "Perform SQL injection tests"],
        resumeImpact: "Exhibits solid knowledge of secure authentication, token lifecycles, and MFA integration."
      },
      {
        id: "sec_p3",
        title: "Incident Monitor (SIEM) Setup",
        difficulty: "Advanced",
        timeEstimate: "35-50 Hours",
        skillsGained: "Syslog capture, Splunk monitoring, firewalls, and alert configurations.",
        description: "Deploy a local log collector that monitors server authorization logs, sending email alerts on repeated ssh login failures.",
        githubChecklist: ["Configure Linux syslog forwarders", "Write log parser regex configurations", "Set up Prometheus alert thresholds"],
        deployChecklist: ["Deploy log server inside isolated networks", "Test alerts by running brute-force ssh script runs", "Audit memory footprints during heavy log volumes"],
        resumeImpact: "Shows senior security operations skills, alerting setup, and log analytics."
      }
    ],
    resources: [
      { name: "TryHackMe Security Training", url: "https://tryhackme.com", type: "Guide" },
      { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", type: "Docs" },
      { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", type: "Guide" },
      { name: "Cybersecurity Roadmap", url: "https://roadmap.sh/cyber-security", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Google Cybersecurity Professional Fellowship", type: "Fellowship", provider: "Google", link: "https://grow.google/certificates/cybersecurity/", description: "A guided educational fellowship covering threat detection, network mapping, and log analysis configurations." },
      { title: "SANS CyberTalent Hackathon", type: "Hackathon", provider: "SANS Institute", link: "https://www.sans.org", description: "Compete with security practitioners in resolving Capture the Flag (CTF) security targets." },
      { title: "CISA Cybersecurity Internship", type: "Internship", provider: "CISA", link: "https://www.cisa.gov", description: "Assist federal teams in monitoring critical infrastructure networks and threat detection audits." }
    ]
  },

  uiux: {
    id: "uiux",
    title: "UI/UX Designer",
    description: "Designs intuitive, beautiful, and accessible user interfaces and templates based on research and user journeys.",
    difficulty: "Medium",
    marketDemand: "High",
    salaryRange: "$80,000 - $130,000",
    skills: {
      foundations: [
        { id: "design_theory", name: "Typography, Grid & Visual hierarchy", category: "Foundations", priority: "High", hours: 15, docUrl: "https://www.nngroup.com/articles/principles-visual-hierarchy/", ytUrl: "https://www.youtube.com/watch?v=7H_QH9ipyPA", practiceUrl: "https://www.behance.net", certName: "Visual Design Foundations Certificate", description: "Visual rules determining element spacing, sizes, and layout paths.", importance: "Determines whether interfaces feel premium, professional, and accessible." },
        { id: "wireframing", name: "Wireframing & Low-Fidelity Layouts", category: "Foundations", priority: "High", hours: 12, docUrl: "https://www.nngroup.com/articles/wireframing-101/", ytUrl: "https://www.youtube.com/watch?v=FgnxcUQ569o", practiceUrl: "https://www.figma.com", certName: "Interface Wireframing Specialist", description: "Creating skeletal layouts to plan user flows without final visual details.", importance: "Helps validate layout ideas before spending hours on high-fidelity designs." },
        { id: "git_uiux", name: "Collaboration & Hand-off", category: "Foundations", priority: "Medium", hours: 8, docUrl: "https://git-scm.com/doc", ytUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk", practiceUrl: "https://github.com", certName: "Git Version Control", description: "Tracking version adjustments and sharing assets with developers.", importance: "Ensures layout files are delivered cleanly to frontend engineers." }
      ],
      core: [
        { id: "figma_mastery", name: "Figma Components & Auto-Layout", category: "Core Skills", priority: "High", hours: 25, docUrl: "https://help.figma.com/hc/en-us", ytUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0", practiceUrl: "https://figma.com", certName: "Figma Certified Professional Designer", description: "Figma's responsive layout tools and component systems.", importance: "Industry standard tool for mockups, component properties, and prototypes." },
        { id: "user_research", name: "User Research & Persona Design", category: "Core Skills", priority: "High", hours: 20, docUrl: "https://www.nngroup.com/articles/user-research-basics/", ytUrl: "https://www.youtube.com/watch?v=IPvYjXofjgk", practiceUrl: "https://www.google.com/forms", certName: "User Experience Researcher Certificate", description: "Conducting user interviews, mapping personas, and summarizing data.", importance: "Ensures products solve actual problems for real target users." },
        { id: "accessibility_design", name: "Accessibility Design (WCAG 2.1)", category: "Core Skills", priority: "High", hours: 15, docUrl: "https://www.w3.org/WAI/standards-guidelines/wcag/", ytUrl: "https://www.youtube.com/watch?v=cI7fX2dKxco", practiceUrl: "https://webaim.org", certName: "WCAG Accessibility Specialist", description: "Designing interfaces with high color contrast and keyboard navigability.", importance: "Ensures interfaces are usable for users with disabilities." }
      ],
      projects: [
        { id: "design_system", name: "Design System Tokens", category: "Projects", priority: "High", hours: 20, docUrl: "https://designsystems.io", ytUrl: "https://www.youtube.com/watch?v=k_n71T0L53E", practiceUrl: "https://figma.com", certName: "Design System Architect", description: "Defining color tokens, typographic scales, spacing variables, and states.", importance: "Crucial for maintaining visual consistency across massive apps." },
        { id: "prototyping", name: "Interactive Micro-interactions", category: "Projects", priority: "Medium", hours: 15, docUrl: "https://help.figma.com/hc/en-us/articles/360040314193-Prototype-basics", ytUrl: "https://www.youtube.com/watch?v=27KeYk-5vJw", practiceUrl: "https://figma.com", certName: "Interaction Prototype Expert", description: "Building high-fidelity interactive wireframes with smooth transitions.", importance: "Simulates actual product experiences for user testing." }
      ],
      interview: [
        { id: "portfolio_pitch", name: "Design Case Study Pitching", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://medium.com/design-critical-thinking", ytUrl: "https://www.youtube.com/watch?v=Yr1epse1oW0", practiceUrl: "https://behance.net", certName: "Design Pitch Masterclass", description: "Writing structured case studies, detailing design iterations, and user testing.", importance: "Core criteria for passing senior design job evaluations." },
        { id: "ux_whiteboard", name: "UX Whiteboard Diagnostics", category: "Interview Prep", priority: "High", hours: 15, docUrl: "https://uxdesign.cc/whiteboard-design-challenge-framework/", ytUrl: "https://www.youtube.com/watch?v=A3nZUI5ww5M", practiceUrl: "https://github.com", certName: "Whiteboard Design Practitioner", description: "Resolving app layout problems live during whiteboard screens.", importance: "Key screening step in UI/UX tech interview loops." }
      ]
    },
    learningOrder: ["design_theory", "wireframing", "git_uiux", "figma_mastery", "user_research", "accessibility_design", "design_system", "prototyping", "portfolio_pitch", "ux_whiteboard"],
    interviewTopics: [
      "Walk through your design process, from initial research to high-fidelity hand-off.",
      "How do you ensure WCAG AA accessibility compliance in a color scheme?",
      "How would you conduct a usability test on a new prototype with 5 users?",
      "What is a design system, and how do you structure components for developer hand-off?",
      "Design a mobile user flow for password recovery under whiteboard constraints."
    ],
    projectsList: [
      {
        id: "des_p1",
        title: "Figma Mobile App Mockups",
        difficulty: "Beginner",
        timeEstimate: "10-15 Hours",
        skillsGained: "Figma grids, component libraries, typography hierarchy, and wireframing.",
        description: "Design low and high-fidelity mobile app layouts, establishing color palettes, button components, and text sizes.",
        githubChecklist: ["Draw skeletal wireframes", "Implement auto-layout button components", "Publish Figma project link"],
        deployChecklist: ["Publish prototype link", "Collect feedback notes from 3 peers", "Organize design file layers"],
        resumeImpact: "Demonstrates fundamental ability to use Figma, construct layouts, and establish styles."
      },
      {
        id: "des_p2",
        title: "SaaS Workspace Design System",
        difficulty: "Intermediate",
        timeEstimate: "20-30 Hours",
        skillsGained: "Figma components, design tokens, color variables, input fields, and dark/light layouts.",
        description: "Design a comprehensive system with responsive inputs, modals, sidebars, and dark/light theme representations.",
        githubChecklist: ["Define typography size properties", "Map color variables and states", "Configure Auto Layout input variables"],
        deployChecklist: ["Share design file links", "Perform color contrast checks", "Export SVG assets for developers"],
        resumeImpact: "Exhibits understanding of design system architecture, auto-layout, and dark modes."
      },
      {
        id: "des_p3",
        title: "High-Fidelity Interactive Prototype",
        difficulty: "Advanced",
        timeEstimate: "30-45 Hours",
        skillsGained: "Figma prototyping, micro-interactions, user research interviews, and case study writing.",
        description: "Build an interactive prototype showing user sign-ups, dashboard charts, side drawers, and responsive views.",
        githubChecklist: ["Create smart-animate screen transitions", "Setup multi-state component variants", "Write case study summaries"],
        deployChecklist: ["Publish case study on Behance/Medium", "Record user testing screen recordings", "Verify WCAG contrast margins"],
        resumeImpact: "Shows top-tier interactive design capabilities, user testing experience, and writing clear case studies."
      }
    ],
    resources: [
      { name: "Nielsen Norman Group Articles", url: "https://www.nngroup.com/articles/", type: "Docs" },
      { name: "Figma Help Center Guides", url: "https://help.figma.com", type: "Docs" },
      { name: "Refactoring UI Book", url: "https://www.refactoringui.com", type: "Book" },
      { name: "UX Roadmap", url: "https://roadmap.sh/ux-design", type: "Roadmap" }
    ],
    opportunities: [
      { title: "Google UX Design Fellowship", type: "Fellowship", provider: "Google", link: "https://grow.google/certificates/ux-design/", description: "A guided educational fellowship covering wireframing, UX research, and building portfolio prototypes." },
      { title: "Figma Config Design Contest", type: "Competition", provider: "Figma", link: "https://config.figma.com", description: "Submit custom plugin designs or template kits for recognition by the global Config community." },
      { title: "Adfirst UI Design Internship", type: "Internship", provider: "Adfirst", link: "https://www.adfirst.co", description: "Design layouts, assets, and banner ads for enterprise SaaS marketing campaigns." }
    ]
  }
};
