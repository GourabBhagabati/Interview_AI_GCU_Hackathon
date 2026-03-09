const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function simulateResumeAnalysis({ jobDescription, resumeFile }) {
  void jobDescription
  void resumeFile

  // Simulate heavier AI work so the loading sequence feels real
  await wait(2300)

  return {
    name: "Rohit Das",
    role: "Backend Developer",
    experience: "3 years · Backend Developer",
    location: "Bangalore · India",
    education: "B.Tech · Computer Science",
    skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Docker"],
    matchScore: 82,
    summary:
      "Strong backend engineer with solid production experience in Spring Boot microservices and relational databases. Familiar with modern DevOps practices and observability.",
  }
}

export async function simulateQuestionGeneration({ analysis }) {
  void analysis

  await wait(500)

  return [
    {
      id: "q1",
      label: "Technical depth",
      question:
        "Walk me through the design of a resilient REST API you've built recently. How did you handle failures and retries?",
    },
    {
      id: "q2",
      label: "Communication",
      question:
        "Explain a complex technical decision you made to a non-technical stakeholder. How did you ensure alignment?",
    },
    {
      id: "q3",
      label: "Problem solving",
      question:
        "Describe a production incident you owned end-to-end. What went wrong and what did you change afterwards?",
    },
    {
      id: "q4",
      label: "Culture fit",
      question:
        "Tell me about a time you disagreed with a teammate on architecture. How did you move the project forward?",
    },
    {
      id: "q5",
      label: "Experience",
      question:
        "Looking back at your last role, what are you most proud of shipping and why?",
    },
  ]
}

