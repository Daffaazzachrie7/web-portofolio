import React from "react";
import { Plus } from "lucide-react";
import { Skill } from "../../types/portfolio";

interface SkillsTabProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  { id: "1", name: "Python" },
  { id: "2", name: "Kotlin" },
  { id: "3", name: "Java" },
  { id: "4", name: "Streamlit" },
  { id: "5", name: "React" },
  { id: "6", name: "Natural Language Processing (NLP)" },
  { id: "7", name: "Android Development" },
  { id: "8", name: "Git / GitHub" },
  { id: "9", name: "Machine Learning" },
  { id: "10", name: "Team Collaboration" },
  { id: "11", name: "Fast Learner" },
];

export function SkillsTab({ skills = defaultSkills }: SkillsTabProps) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-white text-base sm:text-lg md:text-xl font-bold">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-2 select-none transition-transform duration-150 hover:translate-x-0.5"
          >
            <Plus
              className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0 stroke-[3]"
              aria-hidden="true"
            />
            <span className="tracking-tight">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
