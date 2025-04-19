import { useState } from "react";
import TabSwitcher from "./ui/TabSwitcher";
import ExperienceItem from "../types/expirience.type";
import VisitButton from "./ui/VisitButton";
import { workExperience, educationExperience } from "./data/expirience";



export default function Experience() {
  const [isWorkTab, setIsWorkTab] = useState(true);
  const currentExperience = isWorkTab ? workExperience : educationExperience;

  return (
    <article id="experience" className="flex flex-col w-full gap-2">
      <h2>Experience</h2>
      <TabSwitcher isWorkTab={isWorkTab} setIsWorkTab={setIsWorkTab} />
      <section className="flex flex-col w-full border-1 rounded-xl border-gray-600/50">
        <ul className="flex flex-col gap-8 ml-10 p-4 border-l-1 border-gray-500/50">
          {currentExperience.map((item: ExperienceItem, index) => (
            <li key={index} className="relative right-10 flex gap-4">
              <img
                className="w-12 h-12 border border-gray-500/50 rounded-full"
                src={item.logo}
                alt="Company Logo"
              />
              <div className="flex flex-col w-full">
                <p className="text-xs font-semibold text-gray-500">
                  {item.duration}
                </p>
                <p className="text-lg leading-5 font-semibold">{item.title}</p>
                <p className="text-sm font-semibold text-gray-500">
                  {item.subtitle}
                </p>
                <ul className="text-sm font-medium text-gray-300 list-disc ml-4">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                {item.url && (
                  <VisitButton
                    url={item.url}
                    label="Visit Włóczęga.pl"
                    marginTop={2}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
