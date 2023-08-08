import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="about-container">
      <h1>Um pouco sobre mim</h1>
      <h2>Um subtítulo qualquer</h2>
      <hr />
      <p>
        Desde pequeno sempre gostei bastante de entender o funcionamento das coisas, então eu costumava abrir os brinquedos e tirar os "motorezinhos" daqui,
        colocar uma "lampadinha" ali, etc. Eu também costumava (e ainda o faço na verdade) consertar as coisas em casa: de radinhos de pilha, passando por
        fechaduras de porta, até equipamentos como fornos de microondas, máquinas de lavar, etc.
      </p>
      <br />
      <p>
        Com o passar do tempo, essa minha curiosidade de saber como tudo acontecia por trás dos panos me fez despertar o interesse pela informática - já que,
        pra mim era quase uma evolução natural das coisas com as quais eu já mexia. E no final dos anos 90, minha mãe comprou um PC (na época, uma "supermáquina":
        era um Pentium II MMX, de 266Mhz, com incríveis 32Mb de memória e um HDD gigante de 4GB - além de um "soft-modem" de 36kbpps, o que permitia acessar aquela
        novidade que era a <span className="text-italic">internet</span>&nbsp;) para ajudar a minha irmã e a mim com os estudos.
      </p>
      <br />
      <p>
        Foi com esse PC que eu comecei a desenvolver uma afinidade com a informática e entre uma formatada aqui, uma troca de memória acolá, comecei a ser o "técnico 
        da vizinhança". Ganhei uns "pilas" nesses bicos e mais tarde, comecei a frequentar palestras e congressos que tinham alguma relação com a área. Eu ia em  
        <span className="text-italic">&nbsp;qualquer</span> evento gratuito, então acabei participando de algumas coisas que só anos mais tarde fariam algum sentido pra mim.
        Lembro-me, por exemplo, de uma palestra sobre programação orientada à objetos em PHP - a qual fui sem ter a menor ideia do que se tratava e saí de lá sem também 
        entendeer nada... Mas depois acabei estudando um pouco de PHP justamente em virtude da curiosidade que aquilo havia me despertado. 
      </p>
      <br />
      <p>
        De lá para cá, trabalhei em diversas micro-empresas de informática e eletrônica, também prestei suporte por telefone na Dell computadores e trabalhei em escritórios
        diversos como help-desk e analista pleno. Me formei em gestão de TI pelo Senac e mais recentemente concluí o curso de desenvolvimento web pela 
        <Link href="https://www.betrybe.com/" target="blank">Trybe</Link>
      </p>
    </div>
  )
}
