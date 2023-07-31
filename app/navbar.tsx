import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href={"/"}>home</Link></li>
                <li><Link href={"about"}>sobre mim</Link></li>
                <li><Link href={"projects"}>projetos</Link></li>
                <li><Link href={"social_media"}>redes sociais</Link></li>
                <li><Link href={"contact"}>entre em contato</Link></li>
            </ul >
        </nav>
    )
}
