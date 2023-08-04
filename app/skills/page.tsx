import skillsDataFromFile from "../../public/json/skills.json"

async function getData() {
  try {
    const data = skillsDataFromFile
    return data;
  } catch (e: any) {
    console.error(e.message);
  }
}

export default async function Skills() {
  const { skills }: any = await getData();
  console.log(skills);
  return (

    <>
      {skills.map((skill: any) => (
        <h1 key={skill.id}>{skill.title}</h1>
      ))}
    </>
  )
}
