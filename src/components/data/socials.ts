import { Linkedin, Github, Mail } from "lucide-react";
import { Social } from "../../types/socials.type";

export const socials: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jan-kamon/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/jankamon",
    icon: Github,
  },
  {
    name: "Mail",
    href: "mailto:hello@jankamon.dev",
    icon: Mail,
  },
];
