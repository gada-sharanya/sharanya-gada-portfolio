export const personal = {
  name: "Sharanya Gada",
  title: "Software Engineer",
  taglines: [
    "Distributed Systems Engineer",
    "Java Full Stack Developer",
    "AI Integration Specialist",
    "Cloud Infrastructure Architect",
    "Mission-Critical Systems Builder",
  ],
  bio: "I build backend systems that process millions of events and never go down. From Kafka-driven airline operations at Southwest to AI-powered RAG pipelines on AWS Bedrock — I work at the intersection of distributed systems and intelligent automation.",
  location: "Dallas, TX",
  email: "gadasharanya@gmail.com",
  phone: "+1 (765) 431-6438",
  linkedin: "https://www.linkedin.com/in/gsharanya/",
  github: "https://github.com/gada-sharanya",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Companies", value: "4" },
    { label: "Systems Automated", value: "20+" },
    { label: "Master's GPA", value: "3.9" },
  ],
};

export const experience = [
  {
    company: "Southwest Airlines",
    role: "Software Developer",
    location: "Dallas, TX",
    period: "Nov 2025 – Present",
    status: "ACTIVE",
    color: "#f59e0b",
    highlights: [
      "Engineered Kafka event pipelines — cut production incidents 30%",
      "Built validation engine across 5-scale & 6-scale reweigh workflows",
      "Orchestrated 20+ IROP flows across 4 distributed airline systems",
      "Cut regression cycle from 6h → 2h via GitLab CI + Gradle 8",
      "Automated 150+ E2E scenarios across iOS and web (Playwright)",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Oracle DB", "TIBCO EMS", "GitLab CI", "AWS CloudWatch", "Playwright"],
  },
  {
    company: "State of Missouri",
    role: "Software Development Engineer",
    location: "Kansas City, MO",
    period: "Sep 2023 – Nov 2025",
    status: "COMPLETED",
    color: "#00d4ff",
    highlights: [
      "Full-stack features: React.js + Spring Boot REST APIs at state scale",
      "Built GraphQL APIs — significantly reduced API payload size",
      "Redis caching cut PostgreSQL/DB2 load, improved response times 18%",
      "Zero-downtime deployments via Docker + Kubernetes on AWS",
      "Reduced MTTR 20% using Dynatrace APM + CloudWatch",
    ],
    tech: ["React.js", "Spring Boot", "GraphQL", "AWS DynamoDB", "SQS/SNS", "Redis", "Docker", "Kubernetes", "Terraform"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jul 2020 – Dec 2021",
    status: "COMPLETED",
    color: "#8b5cf6",
    highlights: [
      "Delivered 15+ microservices serving millions of production requests",
      "Kafka Producer/Consumer APIs for real-time airline event streaming",
      "Cassandra DB optimization — 30% query performance improvement",
      "Reduced release failures 40% with Docker/Kubernetes on AWS EKS",
      "Grafana + Prometheus observability stack — proactive alerting",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "Cassandra", "Docker", "Kubernetes", "AWS EC2/EKS", "Grafana", "Jenkins"],
  },
  {
    company: "Deloitte",
    role: "Associate Software Engineer",
    location: "Hyderabad, India",
    period: "Jun 2019 – Jun 2020",
    status: "COMPLETED",
    color: "#10b981",
    highlights: [
      "RESTful APIs in Java + SQL — 30% data retrieval improvement",
      "JUnit test frameworks — 25% coverage increase",
      "Code reviews and debugging across cross-functional teams",
    ],
    tech: ["Java", "SQL", "JUnit", "REST APIs"],
  },
];

export const projects = [
  {
    title: "AI-Driven Automation Copilot",
    origin: "Engineering workflows lack intelligent decision support",
    destination: "RAG-based copilot delivering contextual workflow recommendations",
    status: "LIVE",
    date: "Mar 2026",
    tech: ["Java", "Spring Boot", "AWS Bedrock", "Claude LLMs", "DynamoDB", "Vector DBs", "RAG"],
    description:
      "Architected a RAG-based copilot using Java, Spring Boot, AWS Bedrock, and Claude LLMs with DynamoDB session storage. Orchestrated ingestion, embeddings, and semantic retrieval pipelines for AI-driven engineering decision support.",
    github: "https://github.com/gada-sharanya",
    color: "#00d4ff",
  },
  {
    title: "Food Ordering Microservices Platform",
    origin: "Manual QA analysis bottleneck across test executions",
    destination: "AI-powered QA intelligence with semantic failure clustering",
    status: "LIVE",
    date: "Jan 2024",
    tech: ["Spring Boot", "Docker", "Kubernetes", "AWS Bedrock", "Titan Embeddings", "S3", "Jenkins"],
    description:
      "Developed an AI-powered QA intelligence system using AWS Bedrock, Titan embeddings, and S3 vector search for test execution analysis and failure clustering with root-cause analysis workflows.",
    github: "https://github.com/gada-sharanya",
    color: "#8b5cf6",
  },
];

export const skills = [
  {
    panel: "Backend Systems",
    icon: "⚙️",
    status: "ONLINE",
    items: ["Java 17", "Spring Boot", "Spring MVC", "Hibernate", "Node.js", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    panel: "Messaging & Streaming",
    icon: "📡",
    status: "ONLINE",
    items: ["Apache Kafka", "TIBCO EMS", "AWS SQS", "AWS SNS", "JMS", "Event-Driven Architecture"],
  },
  {
    panel: "Cloud Infrastructure",
    icon: "☁️",
    status: "ONLINE",
    items: ["AWS (EC2, EKS, S3, DynamoDB, Bedrock, CloudWatch)", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    panel: "Data Layer",
    icon: "🗄️",
    status: "ONLINE",
    items: ["PostgreSQL", "Oracle DB", "Cassandra", "DynamoDB", "MongoDB", "DB2", "Redis", "PL/SQL"],
  },
  {
    panel: "AI / ML Stack",
    icon: "🤖",
    status: "ONLINE",
    items: ["AWS Bedrock", "Claude LLMs", "RAG Pipelines", "Vector Databases", "Titan Embeddings", "Vertex AI"],
  },
  {
    panel: "CI/CD & Observability",
    icon: "🔭",
    status: "ONLINE",
    items: ["GitLab CI", "Jenkins", "GitHub Actions", "Gradle", "Grafana", "Prometheus", "Dynatrace", "AWS CloudWatch"],
  },
  {
    panel: "Frontend",
    icon: "🖥️",
    status: "ONLINE",
    items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Playwright"],
  },
  {
    panel: "Testing Infrastructure",
    icon: "🧪",
    status: "ONLINE",
    items: ["JUnit", "Mockito", "RestAssured", "Playwright", "JMeter", "Jasmine", "XRAY/Jira"],
  },
];

export const radarData = [
  { subject: "Backend", value: 95 },
  { subject: "Cloud", value: 85 },
  { subject: "AI/ML", value: 78 },
  { subject: "Frontend", value: 70 },
  { subject: "DevOps", value: 82 },
  { subject: "Databases", value: 88 },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    abbr: "AWS CCP",
    year: "2024",
    color: "#f59e0b",
    icon: "☁️",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    abbr: "TF-Associate",
    year: "2024",
    color: "#8b5cf6",
    icon: "🏗️",
  },
  {
    name: "Generative AI Explorer — Vertex AI",
    issuer: "Google Cloud",
    abbr: "Google AI",
    year: "2024",
    color: "#00d4ff",
    icon: "🤖",
  },
];

export const flightPath = [
  { city: "Hyderabad", label: "Origin", coords: [17.385, 78.486] },
  { city: "Kansas City", label: "Layover", coords: [39.099, -94.578] },
  { city: "Dallas", label: "Destination", coords: [32.776, -96.796] },
];
