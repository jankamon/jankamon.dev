import { Project } from "../../types/project.type";

export const projects: Project[] = [
  {
    title: "HikePack",
    description:
      "An app for hikers to monitor backpack weight. Users can create custom gear lists and share them with others.",
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
