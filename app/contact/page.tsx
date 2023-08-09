"use client"

import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

export default function Contact() {
  const [showUserFeedback, setShowUserFeedback] = useState<any>([]);
  const form: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const serviceId: String | undefined = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId: String | undefined = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey: String | undefined = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const FormSchema = z.object({
    user_name:
      z.string()
        .nonempty({ message: 'O campo "Nome" é obrigatório' }),
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

      validationResult.error.issues.map((issue: any) => {
        registeredErrors.push(issue.message);
        setShowUserFeedback([...registeredErrors]);
        setTimeout(() => setShowUserFeedback([""]), 5000);
      })

    } else {
      setShowUserFeedback(["Mensagem enviada com sucesso!"]);
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

      <p>Para entrar em contato comigo, tu podes preencher o formulário abaixo ou me acionar pelo meu<Link href="https://www.linkedin.com/in/guilhermesoaresgarcia/" target="blank">Linkedin</Link></p>

      {showUserFeedback.map((item: any) => {
        return <div key={item.index}>{item}{item.index}</div>
      })}

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
    </div>
  )
}
