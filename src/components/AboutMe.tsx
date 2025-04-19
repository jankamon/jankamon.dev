import { FileDown } from "lucide-react";
import Socials from "./Socials";

const yearOfBirth = 1996;

export default function AboutMe() {
  return (
    <article
      id="about"
      className="flex flex-col md:flex-row w-full items-start justify-between gap-1 md:gap-8"
    >
      <section className="flex flex-col w-full gap-2">
        <h1>Hi, Jan here 👋</h1>
        <p className="text-md">
          {new Date().getFullYear() - yearOfBirth}-year-old full-stack developer
          from Poland 🇵🇱
        </p>
        <p className="text-md">
          I enjoy creating virtual worlds that solve real-world problems, seeing
          people use my solutions, and traveling in search of new inspiration.
        </p>
        <div className="flex items-center gap-8 mt-2">
          <a
            className="flex items-center gap-1 w-fit text-sm font-semibold border border-gray-500/50 rounded-md shadow-sm hover:bg-gray-500 transition duration-200 px-5 py-1 cursor-pointer"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
            <FileDown size={16} />
          </a>
          <Socials />
        </div>
      </section>
      <img
        className="w-44 h-44 rounded-2xl self-center"
        src="/images/jan.jpg"
        alt="Photo of Jan"
      />
    </article>
  );
}
