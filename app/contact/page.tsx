"use client"

import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const serviceId: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey: any = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          window.alert("Mensagem enviada com sucesso!");
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <h1>Contato</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome:
          <input
            name="user_name"
            type="text"
            placeholder="Nome"
          />
        </label>
        <label>E-mail:
          <input
            name="user_email"
            type="email"
            placeholder="nome@email.com"
          />
        </label>
        <label>Mensagem:
          <textarea
            name="message"
            placeholder="Digite aqui sua mensagem...">
          </textarea>
        </label>
        <input
          type="submit"          
          value="Enviar"
        />
      </form>
    </>
  )
}
