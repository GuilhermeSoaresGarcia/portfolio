"use client"

import Link from "next/link"
import "../styles/navbar.css"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import GitHubSVG from "../public/img/github.svg"
import LinkedinSVG from "../public/img/linkedin.svg"
import { useState } from "react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <button
                className="hambuguer_btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                &equiv;
            </button>
            <nav className={menuOpen ? "navbar_container open" : "navbar_container"}>
                <ul className="navbar">
                    <li><Link onClick={() => setMenuOpen(false)} href={"/"} className={pathname == "/" ? "active_section" : ""}>home</Link></li>
                    <li><Link onClick={() => setMenuOpen(false)} href={"about"} className={pathname == "/about" ? "active_section" : ""}>sobre mim</Link></li>
                    <li><Link onClick={() => setMenuOpen(false)} href={"skills"} className={pathname == "/skills" ? "active_section" : ""}>skills</Link></li>
                    <li><Link onClick={() => setMenuOpen(false)} href={"projects"} className={pathname == "/projects" ? "active_section" : ""}>projetos</Link></li>
                    <li><Link onClick={() => setMenuOpen(false)} href={"contact"} className={pathname == "/contact" ? "active_section" : ""}>entre em contato</Link></li>
                    <div className="social_media">
                        <Link onClick={() => setMenuOpen(false)} href={"https://github.com/GuilhermeSoaresGarcia"} target="_blank">
                            <Image
                                src={GitHubSVG}
                                alt="GitHub"
                            />
                        </Link>
                        <Link onClick={() => setMenuOpen(false)}
                            href={"https://www.linkedin.com/in/guilhermesoaresgarcia/"} target="_blank">
                            <Image
                                src={LinkedinSVG}
                                alt="Linkedin"
                            />
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    )
}
