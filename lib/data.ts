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

export const studentAuthFeatures = [
  "Email and password login",
  "Google sign in for faster student onboarding",
  "Email verification and OTP protection",
  "Forgot password flow through email reset links",
  "Secure sessions with hashed passwords and protected access"
];

export const studentOnboardingQuestions = [
  "Which roles interest you most right now?",
  "What skills are you already confident in?",
  "What is your placement or higher-study goal?",
  "What budget and location constraints matter to you?"
];

export const studentProfileSummary = {
  name: "Aarav Sharma",
  program: "B.Tech CSE, 3rd Year",
  location: "Jaipur",
  goal: "Product Engineer",
  profileStrength: "Frontend + problem solving",
  progress: 63
};

export const studentCareerMatches = [
  {
    role: "Product Engineer",
    fit: 91,
    why: "Strong UI interest, growing API skill, high market demand and strong ROI path."
  },
  {
    role: "Frontend Developer",
    fit: 87,
    why: "Your React and JavaScript strengths already align with entry-level hiring patterns."
  },
  {
    role: "Data Analyst",
    fit: 74,
    why: "Good problem solving base, but SQL, dashboards and business storytelling need work."
  }
];

export const studentRoadmapPlan = [
  {
    phase: "Now",
    title: "Strengthen core placement readiness",
    tasks: "SQL, API design, Git workflows, resume refresh"
  },
  {
    phase: "Next 30 days",
    title: "Build proof-of-skill projects",
    tasks: "Placement tracker, analytics dashboard, deployed portfolio update"
  },
  {
    phase: "Next 60 days",
    title: "Interview and internship sprint",
    tasks: "Mock interviews, DSA revision, internship applications, referral outreach"
  },
  {
    phase: "Final year prep",
    title: "Target role conversion",
    tasks: "Focused company list, role-specific interview prep, capstone polish"
  }
];

export const studentCourseRecommendations = [
  {
    name: "Backend Foundations Bootcamp",
    fit: "Best for Product Engineer path",
    fee: "INR 18,000",
    roi: "High ROI, fast break-even",
    placement: "Strong for startup roles"
  },
  {
    name: "SQL + Analytics Career Track",
    fit: "Best for Data Analyst path",
    fee: "INR 12,000",
    roi: "Moderate cost, strong analyst upside",
    placement: "Useful for analytics internships"
  },
  {
    name: "Cloud and Deployment Sprint",
    fit: "Best for closing engineering gaps",
    fee: "INR 9,500",
    roi: "Low cost, high credibility gain",
    placement: "Helps with full-stack screening rounds"
  }
];

export const studentActionTasks = [
  { title: "Learn Python basics", type: "Skill", status: "Done" },
  { title: "Complete backend placement tracker project", type: "Project", status: "In progress" },
  { title: "Apply to 5 internship openings", type: "Career", status: "Pending" },
  { title: "Book 1 mentor session", type: "Guidance", status: "Pending" }
];

export const studentMentorConnect = [
  {
    name: "Shreya Malhotra",
    role: "Frontend Engineer at SaaS startup",
    availability: "Slots this Friday",
    help: "Resume review and frontend roadmap"
  },
  {
    name: "Rohit Jain",
    role: "Engineering Manager",
    availability: "Slots this weekend",
    help: "Mock interviews and growth planning"
  }
];

export const studentNotifications = [
  "3 new internships match your Product Engineer profile.",
  "Your SQL milestone is due in 2 days.",
  "A mentor session slot opened for frontend interview prep."
];

export const studentCareerReport = {
  title: "Personalized Career Report",
  description: "Download a PDF with your career matches, roadmap, skill-gap plan, ROI view and recommended next actions.",
  sections: "Career fit, roadmap, skills, projects, mentors, market outlook"
};

export const universityProfile = {
  name: "North Valley Institute of Technology",
  type: "Private University",
  location: "Pune, Maharashtra",
  students: "8,400 active students",
  overview:
    "Known for engineering, management and applied technology programs with growing placement traction in software, analytics and emerging tech tracks."
};

export const universityProfileFields = [
  { label: "Courses offered", value: "B.Tech CSE, AI/ML, Data Science, MBA, BCA" },
  { label: "Average annual fee", value: "INR 1.65L" },
  { label: "Eligibility", value: "12th PCM + entrance score / lateral entry routes" },
  { label: "Placement stats", value: "84% placement rate, 12.8 LPA highest package" }
];

export const universityOverviewMetrics = [
  { label: "Profile views", value: "42,180", delta: "+18.2%" },
  { label: "Applications", value: "3,281", delta: "+11.6%" },
  { label: "View to apply conversion", value: "7.8%", delta: "+1.2 pts" },
  { label: "Interested leads", value: "1,146", delta: "+94 this week" }
];

export const universityLeads = [
  {
    name: "Ananya Gupta",
    location: "Jaipur",
    budget: "INR 1.8L",
    interest: "Computer Science",
    action: "Email shortlisted"
  },
  {
    name: "Mohit Reddy",
    location: "Hyderabad",
    budget: "INR 2.2L",
    interest: "AI / ML",
    action: "Call requested"
  },
  {
    name: "Pooja Singh",
    location: "Lucknow",
    budget: "INR 1.4L",
    interest: "Data Science",
    action: "Scholarship follow-up"
  }
];

export const universityStudentMatches = [
  {
    course: "B.Tech AI/ML",
    student: "Rohan Mehta",
    fit: "94%",
    reason: "Strong math profile, high AI interest, and budget aligned with scholarship range."
  },
  {
    course: "BCA + Analytics",
    student: "Simran Kaur",
    fit: "89%",
    reason: "Career goal matches analytics path and location preference supports relocation."
  }
];

export const universityMarketInsights = [
  { topic: "Trending course demand", value: "AI/ML and cybersecurity enquiries are up 36%" },
  { topic: "High-demand skills", value: "Cloud, SQL, GenAI, data engineering, product design" },
  { topic: "Regional career trend", value: "Pune and Bengaluru applicants prefer applied tech programs" }
];

export const universityCoursePerformance = [
  {
    course: "B.Tech Computer Science",
    views: "18,420",
    applications: "1,420",
    dropoff: "22%",
    insight: "Strong interest but fees page causes most exits."
  },
  {
    course: "B.Tech AI/ML",
    views: "12,180",
    applications: "1,106",
    dropoff: "14%",
    insight: "Best-performing program with strong career alignment."
  },
  {
    course: "MBA Digital Business",
    views: "7,260",
    applications: "402",
    dropoff: "33%",
    insight: "Needs clearer outcomes and alumni proof."
  }
];

export const universityPricingInsights = [
  {
    course: "B.Tech CSE",
    fee: "INR 1.65L",
    competitorRange: "INR 1.45L - 1.95L",
    recommendation: "Keep price stable, improve scholarship messaging."
  },
  {
    course: "AI/ML Specialization",
    fee: "INR 1.9L",
    competitorRange: "INR 1.75L - 2.3L",
    recommendation: "Pricing is competitive; highlight placement outcomes more aggressively."
  }
];

export const universityPromotions = [
  {
    title: "Featured listing campaign",
    status: "Active",
    result: "+22% profile visibility",
    note: "Top placement page banner for engineering programs."
  },
  {
    title: "Scholarship spotlight",
    status: "Scheduled",
    result: "Expected lead lift +14%",
    note: "Merit scholarship push for high-fit students."
  }
];

export const universityCommunications = [
  "Bulk email sent to 420 shortlisted students for AI/ML admissions.",
  "23 students opened counselling chat this week.",
  "12 shortlisted candidates requested callback from admissions."
];

export const universityApplications = [
  { student: "Aditi Sharma", course: "B.Tech CSE", status: "Under Review" },
  { student: "Vikram Nair", course: "AI/ML", status: "Accepted" },
  { student: "Neha Patil", course: "BCA", status: "Documents Pending" }
];

export const universityReviews = [
  {
    author: "Current student review",
    rating: "4.4/5",
    response: "Placement support is appreciated, but students want more live industry labs."
  },
  {
    author: "Alumni feedback",
    rating: "4.2/5",
    response: "Faculty mentoring is strong. Curriculum freshness needs faster updates."
  }
];

export const universityCompetitors = [
  {
    name: "Metro Tech University",
    position: "Higher visibility",
    comparison: "Stronger scholarship campaigns but lower conversion rate."
  },
  {
    name: "Future Skills Institute",
    position: "Similar market tier",
    comparison: "Better AI branding, but weaker placement outcomes."
  }
];

export const universityNotifications = [
  "94 new qualified leads arrived this week.",
  "Application conversion dropped 3% for MBA programs.",
  "Cybersecurity demand is rising faster than current course seat capacity."
];

export const universityAdminCards = [
  {
    title: "Team access",
    body: "Admissions, marketing and placement teams each have role-based access to profile editing, leads and reports."
  },
  {
    title: "Subscription plan",
    body: "Growth plan active with featured listings, lead export and analytics benchmark access."
  },
  {
    title: "Profile settings",
    body: "Manage brochures, videos, scholarship banners, admin contacts and approval workflows."
  }
];

export const universityDemandSupply = [
  {
    course: "AI/ML",
    demand: "1,106 applications",
    seats: "240 seats",
    gap: "High excess demand",
    recommendation: "Expand batch size or add allied specialization."
  },
  {
    course: "Cybersecurity",
    demand: "780 applications",
    seats: "120 seats",
    gap: "Very high excess demand",
    recommendation: "Launch an additional intake and promote lab partnerships."
  },
  {
    course: "MBA Digital Business",
    demand: "402 applications",
    seats: "300 seats",
    gap: "Moderate demand",
    recommendation: "Improve positioning and career outcomes messaging."
  }
];

export const marketJobDemand = [
  {
    career: "Software Engineer",
    demand: "High",
    growth: "+24% monthly hiring momentum",
    location: "Bengaluru, Hyderabad, Pune",
    insight: "Best fit for students with strong coding, projects and system fundamentals."
  },
  {
    career: "Data Analyst",
    demand: "High",
    growth: "+19% monthly hiring momentum",
    location: "Pune, Gurugram, Bengaluru",
    insight: "SQL plus dashboards remains the fastest-entry analytics path."
  },
  {
    career: "Mechanical Engineer",
    demand: "Medium",
    growth: "+6% monthly hiring momentum",
    location: "Chennai, Pune, Ahmedabad",
    insight: "Higher value comes from specialization in automation, CAD and production systems."
  }
];

export const marketSalaryInsights = [
  {
    role: "Software Engineer",
    entry: "5-12 LPA",
    mid: "14-28 LPA",
    senior: "30-55 LPA",
    city: "Bengaluru leads salary upside",
    tier: "Tier 1: 10-25 LPA, Tier 2: 5-12 LPA, Tier 3: 3-8 LPA"
  },
  {
    role: "Data Analyst",
    entry: "4.5-9 LPA",
    mid: "10-18 LPA",
    senior: "20-35 LPA",
    city: "Pune and Gurugram stay strong",
    tier: "Tier 1: 8-18 LPA, Tier 2: 4-9 LPA, Tier 3: 3-6 LPA"
  },
  {
    role: "Cybersecurity Analyst",
    entry: "6-10 LPA",
    mid: "12-24 LPA",
    senior: "26-48 LPA",
    city: "Pune and Hyderabad growing fast",
    tier: "Tier 1: 9-20 LPA, Tier 2: 5-10 LPA, Tier 3: 3.5-7 LPA"
  }
];

export const marketSkillsTracker = [
  { skill: "Python", trend: "Up", score: 92, insight: "Improves access across software, analytics and AI tracks." },
  { skill: "AI / ML", trend: "Up", score: 95, insight: "Fast-growing but needs math, data and project depth." },
  { skill: "SQL", trend: "Up", score: 88, insight: "Still one of the most practical employability skills." },
  { skill: "Excel", trend: "Down", score: 54, insight: "Still useful, but no longer enough alone for strong roles." }
];

export const marketCourseCareerMap = [
  {
    course: "B.Tech CSE",
    careers: "Software Engineer, Product Engineer, Data Scientist",
    outcome: "Strongest when paired with projects, DSA and internships."
  },
  {
    course: "BBA",
    careers: "Marketing, HR, Sales, Business Analyst",
    outcome: "Higher ROI with digital tools, analytics and communication skills."
  },
  {
    course: "B.Com",
    careers: "Finance Analyst, Operations, Consulting support",
    outcome: "Best upgraded through Excel, SQL, BI and financial modeling."
  }
];

export const marketCollegeTiers = [
  {
    tier: "Tier 1",
    placementRate: "85-98%",
    salary: "10-25+ LPA",
    recruiters: "Top product companies, consulting, finance",
    roi: "High brand value, strongest long-term upside"
  },
  {
    tier: "Tier 2",
    placementRate: "55-85%",
    salary: "5-12 LPA",
    recruiters: "Mid-size tech firms, services, regional leaders",
    roi: "Good if skills and projects are strong"
  },
  {
    tier: "Tier 3",
    placementRate: "20-55%",
    salary: "3-8 LPA",
    recruiters: "Local firms, service companies, limited hiring mix",
    roi: "Depends heavily on self-driven upskilling"
  }
];

export const marketIndustryInsights = [
  {
    industry: "AI and Data Science",
    trend: "Growing",
    growth: "+32%",
    meaning: "High opportunity, but competition is rising. Strong fundamentals matter."
  },
  {
    industry: "Cybersecurity",
    trend: "Growing",
    growth: "+27%",
    meaning: "Strong stability and lower automation risk than many adjacent roles."
  },
  {
    industry: "Traditional Manufacturing",
    trend: "Slow growth",
    growth: "+5%",
    meaning: "Better outcomes come from automation, robotics and process-tech upgrades."
  }
];

export const marketAutomationRisk = [
  {
    role: "Manual Testing",
    risk: "High",
    safeAlternative: "QA Automation / API Testing",
    insight: "Move toward scripting, test automation and CI workflows."
  },
  {
    role: "Basic Reporting Analyst",
    risk: "Medium-High",
    safeAlternative: "Business / Data Analyst",
    insight: "Upgrade with SQL, dashboards and business problem solving."
  },
  {
    role: "Cybersecurity Analyst",
    risk: "Low",
    safeAlternative: "Security Engineer",
    insight: "Threat response, governance and security design stay resilient."
  }
];

export const marketLocationInsights = [
  {
    city: "Bengaluru",
    roleFit: "Best for software, product, AI roles",
    salary: "Highest upside in tech",
    takeaway: "Best for students who want fast-growth startup or product careers."
  },
  {
    city: "Pune",
    roleFit: "Strong for analytics, cybersecurity, software",
    salary: "Balanced salary-to-cost ratio",
    takeaway: "Good option for ROI-focused students."
  },
  {
    city: "Delhi NCR",
    roleFit: "Mixed opportunities across business, consulting, tech",
    salary: "Wide salary spread by role",
    takeaway: "Good for students who want broader role optionality."
  }
];

export const marketInternshipTrends = [
  {
    role: "Frontend Intern",
    demand: "High",
    fresherFit: "Very good",
    note: "Projects and portfolio quality decide most shortlist outcomes."
  },
  {
    role: "Data Analyst Intern",
    demand: "High",
    fresherFit: "Good",
    note: "SQL and dashboard proof matter more than theory alone."
  },
  {
    role: "DevOps Intern",
    demand: "Medium",
    fresherFit: "Moderate",
    note: "Better suited after some backend or cloud foundations."
  }
];

export const marketKeyTerms = [
  "ROI (Return on Investment)",
  "Average Package",
  "Median Salary",
  "Cost of Education",
  "Job Demand Index",
  "Skill Demand Score",
  "Hiring Growth Rate",
  "Industry Growth %",
  "Placement Rate",
  "College Tier",
  "Accreditation",
  "Cut-off Trends",
  "Core Skills",
  "Emerging Skills",
  "Skill Gap",
  "Entry-level roles",
  "Career progression",
  "Work-life balance score"
];

export const marketPredictionCards = [
  {
    title: "Career Prediction Engine",
    body: "Software, data and cybersecurity roles are projected to stay strongest for the next 5 years, especially where students combine core fundamentals with portfolio proof."
  },
  {
    title: "Salary Predictor",
    body: "Students with strong SQL, Python, Git and 2 real projects generally outperform peers from the same college tier on first salary outcomes."
  },
  {
    title: "Demand vs Supply Gap",
    body: "Data and AI demand is growing faster than the number of job-ready graduates, which creates opportunity for students who upskill early."
  }
];
