import { IProject } from "./interfaces/IProject";
import ProjectCard from "./ProjectCard";
import "../../styles/projects.css"



// FONTE: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
async function getData() {
  const url = process.env.GH_API_URL as string;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Projects() {
  const data = await getData();
  const ghRepositories = data.filter((repo: IProject) => (repo.description !== null));

  return (
    <div className="projects-container">
      <h1>Projetos</h1>
      <h2>Repositórios de alguns projetos pessoais</h2>
      <hr />
      <p>
        Aqui estão listados alguns dos códigos dos meus projetos armazenado no GitHub.
        Utilizei a API da plataforma para relacionar as informações que considerei mais
        relevantes sobre eles - como as tecnologias utilizadas e a descrição do uso. Para 
        acessar o repositório do projeto, basta clicar sobre o card.
      </p>
      <div className="projects-card-container">
        {ghRepositories.map((item: IProject) => (
          <div className="project-card" key={item.id}>
            <ProjectCard
              name={item.name}
              description={item.description}
              html_url={item.html_url}
              language={item.language}
              topics={item.topics}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
