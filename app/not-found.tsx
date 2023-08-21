import Image from "next/image"
import NotFoundImg from "../public/img/not-found.svg"
import "../styles/not-found.css"

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1>404 - Opa... Algo de errado não está certo!</h1>
            <h2>Página não encontrada</h2>
            <Image src={NotFoundImg} alt="Not Found" />
        </div>
    )
}