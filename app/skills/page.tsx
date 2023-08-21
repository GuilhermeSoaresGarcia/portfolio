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
      <h1>Skills</h1>
      <h2>Algumas das minhas &quot;hard-skills&quot;</h2>
      <hr />
      <p>
        Abaixo estão listadas algumas das linguagens, ferramentas e tecnologias que 
        considero mais relevantes e com as quais já trabalhei até o momento. A listagem 
        não está em nenhuma ordem específica e coloquei um texto descritivo que não possui 
        caráter técnico mas meramente alguma observação pessoal de porque aquilo tem alguma
        importância para mim.
      </p>
      <div className="skills-card-container">
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
    </div>
  );
}
