import fitnessImg from "@/assets/project-fitness.jpg";
import churnImg from "@/assets/project-churn.jpg";
import agentsImg from "@/assets/project-agents.jpg";

export const PROFILE = {
  name: "CH. Yudaya Madhavi",
  title: "Generative AI Engineer | AI/ML Developer | Data Analyst | Python Developer",
  tagline:
    "Building intelligent AI agents, automation systems, and scalable software solutions that solve real-world problems.",
  email: "yudaya2004@gmail.com",
  phone: "+91 9177904194",
  location: "India",
  linkedin: "https://www.linkedin.com/in/chelluri-yudayamadhavi",
  linkedinLabel: "Chelluri Yudayamadhavi",
  github: "https://github.com/Yudaya3006",
  githubLabel: "Yudaya3006",
  resumeUrl: "/resume.html",
};

export const TYPING_ROLES = [
  "Generative AI Engineer",
  "AI Agent Developer",
  "Machine Learning Engineer",
  "Full Stack Developer",
];

export const STATS = [
  { label: "Major Projects", value: 2, suffix: "+" },
  { label: "Coding Problems Solved", value: 100, suffix: "+" },
  { label: "Internship", value: 1, suffix: "" },
  { label: "Certifications", value: 2, suffix: "" },
  { label: "Leadership Roles", value: 2, suffix: "" },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Python", "C++", "SQL", "JavaScript"] },
  { category: "AI / ML", items: ["Machine Learning", "Generative AI", "LangChain", "LangGraph", "Hugging Face", "Pandas", "NumPy"] },
  { category: "Agentic AI", items: ["AI Agents", "Multi-Agent Systems", "Agent Workflows", "Enterprise AI Automation", "LLM Integration"] },
  { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "FastAPI", "WebSockets", "REST APIs", "JSON"] },
  { category: "Tools", items: ["Git", "GitHub", "Cursor", "VS Code", "Excel"] },
  { category: "Soft Skills", items: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Attention to Detail"] },
];

export const EXPERIENCE = [
  {
    company: "Amdocs",
    role: "Gen AI Intern",
    period: "Feb 2026 – Jun 2026",
    bullets: [
      "Worked on the technology foundation of aOS, an open telco-specific GenAI platform.",
      "Built LLM-powered agents and intelligent bots.",
      "Integrated APIs and enterprise tools.",
      "Developed agentic workflows for automation.",
      "Supported intelligent automation and real-time task execution.",
    ],
  },
  {
    company: "TechnoHacks EduTech",
    role: "Web Development Intern",
    period: "Internship",
    bullets: [
      "Developed responsive web applications.",
      "Improved front-end functionality.",
      "Enhanced user experience.",
      "Worked on real-world web development projects.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Health Fitness App",
    image: fitnessImg,
    description:
      "Multi-model fitness recommendation system delivering personalized workout and diet plans, Random Forest predictions, and 7-day progress forecasting.",
    bullets: [
      "Multi-model fitness recommendation system",
      "Personalized workout and diet plans",
      "Random Forest predictions",
      "Forecasted 7-day progress trends",
    ],
    tech: ["Python", "Scikit-Learn", "Machine Learning"],
    github: "https://github.com/Yudaya3006",
    demo: "#",
  },
  {
    title: "Customer Churn Prediction",
    image: churnImg,
    description:
      "ML churn prediction model trained on 2000+ customer records with an interactive Streamlit dashboard for live predictions.",
    bullets: [
      "Developed ML churn prediction model",
      "Trained on 2000+ customer records",
      "Created Streamlit prediction dashboard",
    ],
    tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-Learn"],
    github: "https://github.com/Yudaya3006",
    demo: "#",
  },
  {
    title: "AI Agent Automation System",
    image: agentsImg,
    description:
      "Agentic AI system orchestrating multiple LLM-powered agents across workflows for enterprise-grade automation.",
    bullets: [
      "AI agent workflows",
      "LLM-powered automation",
      "Multi-agent orchestration",
    ],
    tech: ["LangChain", "LangGraph", "Hugging Face"],
    github: "https://github.com/Yudaya3006",
    demo: "#",
  },
];

export const ACHIEVEMENTS = [
  { title: "Foundation For Excellence (FFE) Scholar", icon: "Trophy" },
  { title: "NMMS Scholarship Recipient", icon: "Award" },
  { title: "Solved 100+ Coding Problems", icon: "Code2" },
  { title: "Inter-NIT Badminton Team — Girls Captain", icon: "Medal" },
  { title: "Represented NIT Agartala at NIT Trichy", icon: "Star" },
  { title: "Academic Excellence", icon: "GraduationCap" },
];

export const POSITIONS = [
  {
    title: "Training & Placement Coordinator",
    org: "NIT Agartala",
    points: [
      "Representing 950–1000 students",
      "Coordinating with recruiters",
      "Facilitating placement activities",
    ],
  },
  {
    title: "Inter-NIT Badminton Team Girls Captain",
    org: "NIT Agartala",
    points: ["Led institute team", "Demonstrated leadership and teamwork"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "SQL Certificate",
    issuer: "HackerRank",
    description: "Verified proficiency in SQL queries, joins, and aggregations.",
  },
  {
    title: "SAWIT.AI Learnathon",
    issuer: "Generative AI Fundamentals",
    description: "Foundational training in Generative AI concepts and tooling.",
  },
];

export const EDUCATION = [
  {
    school: "National Institute of Technology, Agartala",
    degree: "B.Tech, Electronics and Communication Engineering",
    period: "Present",
    grade: "CGPA: 7.69",
  },
  {
    school: "Sri Chaitanya Junior College",
    degree: "Class XII",
    period: "",
    grade: "93.5%",
  },
  {
    school: "Municipal High School",
    degree: "Class X",
    period: "",
    grade: "CGPA: 9.7",
  },
];
