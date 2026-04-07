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
