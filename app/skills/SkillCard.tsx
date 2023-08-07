import Image from "next/image"
import { ISkill } from "./interfaces/ISkill"

export default function SkillCard({ title, subtitle, img, description }: ISkill) {

    return (
        <>
            <div className="card-titles">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <Image className="card-img" src={img} height="32" width="32" alt={title} />
            <hr />
            <p>{description}</p>
        </>
    )
}
