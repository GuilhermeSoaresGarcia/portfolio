import SkillCard from "./SkillCard";
import { ISkill } from "./interfaces/ISkill";
import skillsDataFromFile from "../../public/json/skills.json";

export default async function Skills() {

  async function fetchData() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a delay of 1 second.
      const data: ISkill[] = skillsDataFromFile.skills;
      return data;
    } catch (e: any) {
      console.error(e.message);
      return [];
    }
  }

  const skills = await fetchData();

  return (
    <>
      {
        skills.map((skill: ISkill) => (
          <div key={skill.id}>
            <SkillCard
              title={skill.title}
              subtitle={skill.subtitle}
              img={skill.img}
              description={skill.description}
            />
          </div>
        ))
      }
    </>
  );
}
