import { SkillItem, LanguageItem } from "../types/skill.type";
import { skills, languages } from "./data/skills";

export default function Skills() {
  return (
    <article id="skills" className="flex flex-col w-full gap-2">
      <h2>Skills</h2>
      <section className="flex flex-col gap-4 text-sm">
        {skills.map((skill: SkillItem) => (
          <div key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
        <span className="text-sm self-end">
          ...but there's always room for one more skill.
        </span>
      </section>
      <section className="flex items-center justify-center gap-4 mt-4">
        {languages.map((language: LanguageItem) => (
          <div
            key={language.name}
            className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 border-gray-600/50"
          >
            <span>{language.name}</span>
            <span className="text-xs">{language.level}</span>
          </div>
        ))}
      </section>
    </article>
  );
}
