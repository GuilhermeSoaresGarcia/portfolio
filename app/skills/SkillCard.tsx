import Image from "next/image"
import { ISkill } from "./interfaces/ISkill"

export default async function SkillCard({ title, subtitle, img, description }: ISkill) {

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Image src={img} height="32" width="32" alt={title} />
            <p>{description}</p>
        </div>
    )
}
