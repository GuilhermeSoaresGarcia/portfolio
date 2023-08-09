"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import "../../styles/contact.css"

export default function Contact() {
  const [showUserFeedback, setShowUserFeedback] = useState<any>([]);
  const [isError, setIsError] = useState<any>(false);
  const form: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const serviceId: String | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId: String | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey: String | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => { }, [isError]);

  const FormSchema = z.object({
    user_name:
      z.string()
        .nonempty({ message: 'O campo "Nome" é obrigatório' })
        .min(3, { message: 'O campo "Nome" deve ter pelo menos 3 caracteres' }),
    user_email:
      z.string()
        .nonempty({ message: 'O campo "E-mail" é obrigatório' })
        .email({ message: 'E-mail inválido' }),
    message:
      z.string()
        .nonempty({ message: 'O campo "Mensagem" deve ser preenchido' })
        .max(250, { message: "A mensagem não deve ultrapassar 250 caracteres" }),
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    const { user_email, user_name, message } = e.target;

    const formFields = {
      user_email: user_email.value,
      user_name: user_name.value,
      message: message.value,
    }

    const validationResult = FormSchema.safeParse(formFields)

    if (validationResult.success === false) {
      const registeredErrors: Array<String> = [];
      setIsError(true);
      validationResult.error.issues.map((issue: any) => {
        registeredErrors.push(issue.message);
        setShowUserFeedback([...registeredErrors]);
        setTimeout(() => (setIsError(false), setShowUserFeedback([""])), 10000);
      })

    } else {
      () => (setIsError(false), setShowUserFeedback(["Mensagem enviada com sucesso!"]));
      setTimeout(() => setShowUserFeedback([""]), 3000);
    }
  }


  // emailjs.sendForm(serviceId as string, templateId as string, form.current!, publicKey as string)
  //   .then((result) => {
  //     console.log(result.text);
  //     e.target.reset();
  //     window.alert("Mensagem enviada com sucesso!");
  //   }, (error) => {
  //     console.log(error.text);
  //   });

  return (
    <div className="contact-container">
      <h1>Contato</h1>
      <h2>Vamos conversar?</h2>
      <hr />

      <p>Para entrar em contato comigo, preencha o formulário abaixo ou me contate via
        <Link href="https://www.linkedin.com/in/guilhermesoaresgarcia/" target="blank">Linkedin</Link></p>
      <br />

      {isError ? showUserFeedback.map((item: any, index: number) => {
        return <div className="contact-user-feedback" key={index}>{item}</div>
      }) : " "}

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Nome:</label>
        <input
          id="user_name"
          name="user_name"
          type="text"
          placeholder="Nome"
        />
        <label htmlFor="user_email">E-mail:</label>
        <input
          id="user_email"
          name="user_email"
          type="text"
          placeholder="nome@email.com"
        />
        <label htmlFor="message">Assunto:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Digite aqui sua mensagem...">
        </textarea>
        <div className="contact-form-buttons">
          <input
            type="reset"
            value="Limpar"
          />
          <input
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  )
}
