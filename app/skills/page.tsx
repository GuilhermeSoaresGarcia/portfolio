import SkillCard from "./SkillCard";
import { ISkill } from "./interfaces/ISkill";
import skillsDataFromFile from "../../public/json/skills.json";
import "../../styles/skills.css"

export default async function Skills() {

  async function fetchData() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Pretendo fazer um backend mais para frente, então implementei um timeout pra testar algumas coisas
      const data: ISkill[] = skillsDataFromFile.skills;
      return data;
    } catch (e: any) {
      console.error(e.message);
      return [];
    }
  }

  const skills = await fetchData();

  return (
    <div className="skill-container">
      {
        skills.map((skill: ISkill) => (
          <div className="skill-card" key={skill.id}>
            <SkillCard
              title={skill.title}
              subtitle={skill.subtitle}
              img={skill.img}
              description={skill.description}
            />
          </div>
        ))
      }
    </div>
  );
}
