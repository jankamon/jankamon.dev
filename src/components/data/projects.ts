import { Project } from "../../types/project.type";

export const projects: Project[] = [
  {
    title: "HikePack",
    description:
      "An app for hikers to monitor backpack weight. Users can create custom gear lists and share them with others. The community also builds a shared database of the most popular items.",
    challenges: [
      "Presenting all essential data (such as item weight, categories, and packing status) in a clear and user-friendly way without overwhelming the interface.",
    ],
    stack: [
      "React",
      "Expess.js",
      "PostgreSQL",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "TypeScript",
    ],
    url: "https://hikepack.app",
    image: "/images/projects/hikepack-screen.png",
  },
  {
    title: "MyPocketSettlement",
    description:
      "A multiplayer browser strategy game that simulates settlement development. Game includes optional in-game purchases.",
    challenges: [
      "Developing a dynamic map system where new areas and homes are procedurally generated upon the arrival of settlers.",
      "Designing the simulation of settler behavior using modular, event-driven and schedule-driven components to reflect realistic decision-making and emotional states.",
    ],
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Socket.io",
      "PixiJS",
      "Tailwind CSS",
      "Stripe",
      "TypeScript",
    ],
    url: "https://mypocketsettlement.com",
    image: "/images/projects/mypocketsettlement-screen.png",
  },
];
