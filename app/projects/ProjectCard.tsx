// import { ISkill } from "./interfaces/ISkill"
import Link from "next/link"

export default function ProjectCard({ name, description, html_url, language, topics }: any) {

    return (
        <Link href={html_url} target="_blank">
            <h1>{name}</h1>
            <hr />
            <h2>{description}</h2>
            <div className="project-card-tecnologies">
                <p>Tecnologias:&nbsp;</p>
                {!topics.length ? <span data-text={language.toLowerCase()}>{language.toLowerCase()}</span> :
                    topics.map((topic: any, index: number) => (
                        <span data-text={topic} key={index}>{topic}</span>))
                }
            </div>
        </Link>
    )
}
