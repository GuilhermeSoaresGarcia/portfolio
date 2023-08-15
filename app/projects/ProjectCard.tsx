// import { ISkill } from "./interfaces/ISkill"

export default function ProjectCard({ name, description, html_url, language, topics }: any) {

    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{html_url}</h3>
            <h4>Tecnologias:</h4>
                {!topics.length ? <span>{language.toLowerCase()}</span> :
                    topics.map((topic: any, index: number) => (
                        <span key={index}>{topic}</span>))
                }            
            <br /><br />
        </>
    )
}
