// src/data/quiz.js
export const quizQuestions = [
  {
    id: "q1",
    question:
      "After project initiation is completed (team known + kick-off done), what is the next step?",
    options: [
      "Start coding immediately",
      "Move to the Planning Phase",
      "Close the project",
      "Conduct a performance review",
    ],
    correctIndex: 1,
    explanation:
      "After initiation, move into planning: finalize scope, create the project plan, build the work breakdown structure (WBS), and do sprint planning (if Agile).",
  },
  {
    id: "q2",
    question:
      "What is the main contribution of the Project Manager in transferring business requirements to the technical team?",
    options: [
      "Writing technical code",
      "Designing system architecture",
      "Ensuring clarity, alignment, and feasibility of requirements",
      "Approving final design alone",
    ],
    correctIndex: 2,
    explanation:
      "The PM bridges business and technical teams by ensuring requirements are clear, risks are identified, and expectations are aligned.",
  },
  {
    id: "q3",
    question: "How can a PM ensure that a project is delivered on time?",
    options: [
      "Ignore risks and follow the original plan",
      "Track progress, manage risks, and remove blockers",
      "Let the team work without follow-ups",
      "Extend deadlines whenever needed",
    ],
    correctIndex: 1,
    explanation:
      "Stay on top of delivery using weekly status meetings, sprint tracking, risk management, and early escalation.",
  },
  {
    id: "q4",
    question: "During a sprint, how can the PM ensure the team stays on track?",
    options: [
      "Cancel daily standups",
      "Micromanage every task",
      "Run daily standups and remove blockers quickly",
      "Wait until the end of the sprint to check progress",
    ],
    correctIndex: 2,
    explanation:
      "Daily standups + fast blocker removal keeps transparency and momentum high.",
  },
  {
    id: "q5",
    question:
      "If management reduces the timeline from 30 to 25 days, what should the PM do?",
    options: [
      "Accept without changes",
      "Reduce scope or add resources",
      "Force the team to work without discussion",
      "Ignore quality risks",
    ],
    correctIndex: 1,
    explanation:
      "Adjust scope, resources, or approach. Never just compress time without changes—quality and risk will suffer.",
  },
  {
    id: "q6",
    question: "What is the best way to resolve conflict within a team?",
    options: [
      "Ignore the conflict",
      "Listen to both sides and facilitate discussion",
      "Immediately replace one team member",
      "Blame one party",
    ],
    correctIndex: 1,
    explanation:
      "Resolve conflict in a fact-based, respectful way, focused on solutions.",
  },
  {
    id: "q7",
    question:
      "If UI/UX is late and blocks development, what should the PM do first?",
    options: [
      "Stop the entire project",
      "Reassign all developers to other projects",
      "Let developers work on backend while waiting for UI/UX",
      "Cancel the sprint",
    ],
    correctIndex: 2,
    explanation:
      "Keep the team productive by shifting focus to backend work while minimizing overall delays.",
  },
  {
    id: "q8",
    question: "How should a PM handle a team member with commitment issues?",
    options: [
      "Fire them immediately",
      "Have a one-on-one discussion to understand the issue",
      "Ignore the problem",
      "Complain to top management immediately",
    ],
    correctIndex: 1,
    explanation:
      "Start with a 1:1 to understand root cause, clarify expectations, provide support, and escalate only if needed.",
  },
];
