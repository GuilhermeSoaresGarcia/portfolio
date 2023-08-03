"use client"

import Link from "next/link"
import "../styles/navbar.css"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import placeholderImg from "../public/placeholder.png"

export default function Navbar() {

    const pathname = usePathname()

    return (
        <>
            <nav className="navbar_container">
                <ul className="navbar">
                    <li><Link href={"/"} className={pathname == "/" ? "active_section" : ""}>home</Link></li>
                    <li><Link href={"about"} className={pathname == "/about" ? "active_section" : ""}>sobre mim</Link></li>
                    <li><Link href={"skills"} className={pathname == "/skills" ? "active_section" : ""}>skills</Link></li>
                    <li><Link href={"projects"} className={pathname == "/projects" ? "active_section" : ""}>projetos</Link></li>
                    <li><Link href={"contact"} className={pathname == "/contact" ? "active_section" : ""}>entre em contato</Link></li>
                    <div className="social_media">
                        <Link href={"https://github.com/GuilhermeSoaresGarcia"} target="_blank">
                            <Image
                                src={placeholderImg}
                                alt="GitHub"
                            />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/guilhermesoaresgarcia/"} target="_blank">
                            <Image
                                src={placeholderImg}
                                alt="Linkedin"
                            />
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    )
}
