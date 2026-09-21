// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
        Production-ready expertise across full-stack development, cloud services, and real-time integrations — built through shipping features for 12,000+ users.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className={`bg-gray-900 backdrop-blur-md px-5 sm:px-8 py-7 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
            category.skills.length > 5 ? "lg:col-span-2" : ""
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-5 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(148px,1fr))] gap-3 w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 min-w-0 w-full bg-transparent border-2 border-gray-700 rounded-2xl py-2.5 px-3 hover:border-[#8245ec]/60 transition-colors"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 object-contain"
                />
                <span className="text-[11px] sm:text-xs text-gray-300 leading-tight break-words">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
