import Image from "next/image";
import Photo from "../public/img/gsg.jpg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Guidje&apos;s Portfolio</h1>
      <h2>Seja muito bem-vindo!</h2>
      <hr />
      <div className="home-content-container">
        <p>
        Aqui você encontra uma amostra dos meus projetos e trabalhos. Fique à vontade 
        para explorar e espero que goste do que viu. Se tiver alguma dúvida ou quiser 
        saber mais, é só me dar um toque!
        </p>
        <Image src={Photo} alt="Foto" />
      </div>
    </div>
  )
}
