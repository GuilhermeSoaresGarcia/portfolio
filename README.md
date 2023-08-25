# Código fonte do meu portfólio

O *deploy* deste projeto pode ser acessado diretamente em [https://guidjesportfolio.vercel.app/](https://guidjesportfolio.vercel.app/), mas caso prefira, siga as instruções abaixo para rodá-lo localmente em seu computador.

## Instruções:

1. Após a clonagem/download dos arquivos, instalar as dependências:

```bash
npm install 
```
2. Este projeto utiliza o serviço [EmailJS](https://www.emailjs.com/) para o envio de formulários (da seção "entre em contato".) Portanto, deve ser criada uma conta e, após, devem ser configuradas as variáveis de ambiente no arquivo **".env.local"**, inserindo os IDs necessários bem como a URL da API dos repositórios do GitHub (que é consumida na seção "projetos"): 
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID="Service ID"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="Template ID"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="Public Key"
GH_API_URL=https://api.github.com/users/username/repos
```
3. Executar o projeto:
```
npm run dev
```

4. Para acessar o projeto, abra o navegador e acesse [http://localhost:3000](http://localhost:3000)
