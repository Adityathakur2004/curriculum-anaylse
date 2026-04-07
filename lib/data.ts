export const stats = [
  { label: "Students mapped", value: "18.2K", detail: "Across Tier 2 and Tier 3 campuses" },
  { label: "Universities onboarded", value: "124", detail: "Private, state and deemed" },
  { label: "Roles benchmarked", value: "540+", detail: "Developer, analyst, product and core tech tracks" },
  { label: "Avg. readiness uplift", value: "31%", detail: "After AI-guided learning plans" }
];

export const gapSignals = [
  { skill: "DSA", curriculum: 86, industry: 92 },
  { skill: "System Design", curriculum: 28, industry: 70 },
  { skill: "SQL", curriculum: 46, industry: 78 },
  { skill: "Git/GitHub", curriculum: 34, industry: 82 },
  { skill: "Cloud Basics", curriculum: 18, industry: 60 }
];

export const journey = [
  { title: "Curriculum Ingestion", description: "Upload semester-wise syllabus, placement reports and role targets." },
  { title: "Gap Detection", description: "EdGE maps taught concepts against live job expectations and priority skills." },
  { title: "AI Action Plans", description: "Students get personalized weekly plans, projects and resource stacks." }
];

export const features = [
  { title: "AI Skill Gap Engine", description: "Transform raw curriculum into clear strengths, missing skills and readiness scores." },
  { title: "Role-Based Command Centers", description: "Admins, universities and students each get focused dashboards with the right metrics." },
  { title: "Placement Intelligence", description: "Track company trends, salaries, hiring patterns and role distribution over time." },
  { title: "Learning Path Generator", description: "Turn each detected gap into a project-backed, resource-linked execution roadmap." }
];

export const studentRoadmap = [
  { week: "Week 1", goal: "Strengthen JavaScript and problem solving", tasks: "Closures, arrays, recursion", project: "Interactive quiz app" },
  { week: "Week 2", goal: "Master SQL and data modeling", tasks: "Joins, indexes, schema design", project: "Placement analytics schema" },
  { week: "Week 3", goal: "Version control and team workflows", tasks: "Branching, PRs, releases", project: "Collaborative capstone repo" },
  { week: "Week 4", goal: "Deploy a full-stack project", tasks: "APIs, auth, hosting", project: "Career readiness tracker" }
];

export const dashboards = {
  admin: {
    kpis: [
      { label: "Platform users", value: "24,891", delta: "+12.4%" },
      { label: "Pending university approvals", value: "18", delta: "-4 today" },
      { label: "Active AI analyses", value: "3,204", delta: "+19.7%" }
    ]
  },
  university: {
    kpis: [
      { label: "Students analyzed", value: "2,140", delta: "+246 this month" },
      { label: "Placement readiness", value: "68/100", delta: "+7 pts" },
      { label: "Curriculum coverage", value: "74%", delta: "+11%" }
    ]
  },
  student: {
    kpis: [
      { label: "Gap score", value: "72/100", delta: "+9 pts" },
      { label: "Skills mastered", value: "14", delta: "+3 this month" },
      { label: "Learning streak", value: "19 days", delta: "Personal best" }
    ]
  }
};

export const starterPrompts = [
  "Compare my B.Tech CSE curriculum with entry-level software engineer roles.",
  "Create a 4-week learning path for improving SQL and backend skills.",
  "Which projects should I build to close the gap for data analyst roles?",
  "Explain the biggest placement-readiness gaps for Tier 2 engineering students."
];

export const intelligenceModules = [
  {
    id: "career-outcome",
    title: "Career Outcome Simulator",
    description:
      "Forecast likely career routes using interests, grades, budget and location, then map salary growth, demand outlook and skill roadmaps."
  },
  {
    id: "recommendation-engine",
    title: "AI Career & Course Recommendation Engine",
    description:
      "Blend aptitude, personality and market demand to rank best-fit careers, programs, colleges and learning tracks."
  },
  {
    id: "job-market",
    title: "Real-Time Job Market Dashboard",
    description:
      "Surface trending skills, salary benchmarks and regional hiring shifts so students can make decisions from live demand."
  },
  {
    id: "skill-gap",
    title: "Skill Gap Analyzer",
    description:
      "Compare a student’s current profile against target roles and output a practical learning path with priority gaps."
  },
  {
    id: "course-roi",
    title: "Course ROI Calculator",
    description:
      "Translate tuition and living cost into break-even timelines, placement upside and salary-adjusted returns."
  },
  {
    id: "global-local",
    title: "Global vs Local Comparison Tool",
    description:
      "Contrast studying in India and abroad across cost, jobs, visa pathways, and long-term employability."
  },
  {
    id: "marketplace",
    title: "Micro-Internships / Project Marketplace",
    description:
      "Connect students to short startup projects that strengthen resumes and prove real-world readiness."
  },
  {
    id: "curriculum-intel",
    title: "Curriculum Intelligence Engine",
    description:
      "Benchmark universities against one another to expose outdated topics and recommend the missing industry skills."
  },
  {
    id: "mentor-connect",
    title: "Mentor & Alumni Connect",
    description:
      "Build trust with verified alumni conversations, practical advice, and role-based mentorship loops."
  },
  {
    id: "future-risk",
    title: "Future Risk Indicator",
    description:
      "Show automation exposure and industry stability so students understand how resilient a career path may be."
  },
  {
    id: "dashboard",
    title: "Personalized Dashboard",
    description:
      "Give every student a living command center for roadmap tracking, saved options and progress updates."
  },
  {
    id: "decision-score",
    title: "Decision Score Engine",
    description:
      "Combine interest fit, demand, ROI and readiness into a single recommendation score with clear tradeoffs."
  }
];

export const simulatorProfiles = [
  {
    student: "Aarav, Jaipur",
    path: "Data Analyst -> BI Engineer",
    salary: "4.8 LPA -> 11.6 LPA in 5 years",
    demand: "High in Bengaluru, Pune, Hyderabad",
    nextStep: "Excel, SQL, Power BI, portfolio analytics project"
  },
  {
    student: "Meera, Indore",
    path: "Frontend Developer -> Product Engineer",
    salary: "6.2 LPA -> 18.4 LPA in 5 years",
    demand: "Strong for SaaS startups and remote roles",
    nextStep: "React, TypeScript, API integration, deployment"
  },
  {
    student: "Kabir, Lucknow",
    path: "Cybersecurity Analyst -> Security Engineer",
    salary: "5.6 LPA -> 16.1 LPA in 5 years",
    demand: "Rising for BFSI and enterprise security teams",
    nextStep: "Networks, Linux, SIEM tooling, incident response lab"
  }
];

export const marketSignals = [
  { skill: "Generative AI", trend: "+42%", region: "Bengaluru", salary: "12-28 LPA" },
  { skill: "Cybersecurity", trend: "+31%", region: "Pune", salary: "8-22 LPA" },
  { skill: "Data Engineering", trend: "+27%", region: "Hyderabad", salary: "10-24 LPA" },
  { skill: "Cloud & DevOps", trend: "+24%", region: "Chennai", salary: "9-21 LPA" }
];

export const roiCards = [
  {
    program: "Online Full-Stack Specialization",
    fee: "INR 68,000",
    salary: "Expected entry salary: 6.5 LPA",
    breakeven: "Estimated break-even: 4 months after placement"
  },
  {
    program: "Data Analytics Postgrad",
    fee: "INR 1.4L",
    salary: "Expected entry salary: 7.2 LPA",
    breakeven: "Estimated break-even: 7 months after placement"
  },
  {
    program: "MS Abroad Pathway",
    fee: "INR 28L+",
    salary: "Expected entry salary: 42L INR equivalent",
    breakeven: "Estimated break-even: 2.8 years after placement"
  }
];

export const comparisonRows = [
  { factor: "Total cost", india: "Lower tuition and living cost", abroad: "High tuition, visa and relocation cost" },
  { factor: "Job access", india: "Strong domestic hiring, easier internships", abroad: "Higher salary upside, more competition" },
  { factor: "Work rights", india: "Straightforward eligibility", abroad: "Depends on visa and post-study work policy" },
  { factor: "Best fit", india: "Budget-conscious, fast ROI path", abroad: "Global exposure and long-term migration goals" }
];

export const mentorStories = [
  {
    name: "Ritika Sharma",
    role: "SDE II, SaaS startup",
    insight: "Students who publish 2 real projects and can explain tradeoffs stand out more than those with only certificates."
  },
  {
    name: "Aniket Verma",
    role: "Data Scientist, fintech",
    insight: "A strong SQL plus business storytelling combination creates faster analyst placements than tools alone."
  }
];

export const futureRiskSignals = [
  { role: "QA Tester", risk: "Medium-High", stability: "Moderate", note: "Manual workflows are shrinking; automation and API testing are essential." },
  { role: "Data Analyst", risk: "Medium", stability: "Strong", note: "Prompting helps, but SQL, business reasoning and dashboards remain valuable." },
  { role: "Cybersecurity Analyst", risk: "Low", stability: "Very strong", note: "Threat response and governance demand remain resilient." }
];

export const decisionOptions = [
  { option: "B.Tech + Full-Stack Upskilling", interestFit: 92, marketDemand: 88, roi: 90, score: 90 },
  { option: "B.Tech + Data Analytics Path", interestFit: 84, marketDemand: 86, roi: 87, score: 86 },
  { option: "MS Abroad After Graduation", interestFit: 78, marketDemand: 82, roi: 65, score: 74 }
];

export const studentWorkspaceCards = [
  {
    title: "Career roadmap",
    body: "Move from frontend foundations to product engineering with a 16-week project ladder and mock interview checkpoints."
  },
  {
    title: "Saved opportunities",
    body: "8 shortlisted colleges, 5 role tracks, 3 micro-internships and 2 mentors are ready for follow-up."
  },
  {
    title: "Progress tracking",
    body: "You have completed 63% of your Q2 roadmap and lifted your employability score by 9 points."
  }
];

export const loginRoles = [
  {
    key: "student",
    title: "Student Login",
    purpose: "Track your roadmap, saved options, chatbot guidance and skill-gap progress.",
    email: "student@edge.app",
    passwordHint: "Use your campus or personal account",
    redirect: "/dashboard/student",
    benefits: [
      "View career roadmap and decision score",
      "Access AI learning plans and chat support",
      "Track projects, micro-internships and progress"
    ]
  },
  {
    key: "university",
    title: "University Admin Login",
    purpose: "Manage curriculum, placement insights, student analytics and academic interventions.",
    email: "university@edge.app",
    passwordHint: "Use your institutional admin credentials",
    redirect: "/dashboard/university",
    benefits: [
      "Upload curriculum and placement datasets",
      "Monitor cohort readiness and skill gaps",
      "Compare programs against market demand"
    ]
  },
  {
    key: "admin",
    title: "Platform Admin Login",
    purpose: "Oversee onboarding, system health, approvals and global EdGE analytics.",
    email: "admin@edge.app",
    passwordHint: "Use your super-admin account",
    redirect: "/dashboard/admin",
    benefits: [
      "Approve universities and manage platform users",
      "Track usage, growth and AI analysis volume",
      "Monitor platform-wide quality and operations"
    ]
  }
];

export const skillGapTargets = [
  { skill: "SQL", current: 44, target: 85, action: "2 guided case studies + schema project" },
  { skill: "API Design", current: 39, target: 78, action: "Build REST backend and deploy it" },
  { skill: "Git Collaboration", current: 48, target: 80, action: "Practice branching, PR reviews and releases" },
  { skill: "System Design", current: 26, target: 62, action: "Study scaling basics and present one architecture review" }
];

export const marketplaceProjects = [
  {
    company: "Fintech startup",
    project: "Build dashboard for transaction anomaly alerts",
    duration: "2 weeks",
    outcome: "Resume-ready analytics project"
  },
  {
    company: "Health SaaS startup",
    project: "Create appointment workflow front-end",
    duration: "10 days",
    outcome: "Real product collaboration proof"
  },
  {
    company: "EdTech SME",
    project: "Design a student retention SQL report",
    duration: "1 week",
    outcome: "Portfolio case study + mentor feedback"
  }
];

export const curriculumComparisons = [
  { university: "State University A", coverage: "Strong programming, weak cloud and DevOps", freshness: "58%", recommendation: "Add deployment labs and Git workflows" },
  { university: "Private Institute B", coverage: "Good applied projects, limited data depth", freshness: "71%", recommendation: "Add SQL, warehousing and BI modules" },
  { university: "Autonomous College C", coverage: "Strong fundamentals, outdated electives", freshness: "49%", recommendation: "Replace legacy units with AI, security and cloud topics" }
];
