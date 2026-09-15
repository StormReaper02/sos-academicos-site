# 🚀 Como Hospedar a SOS Acadêmicos na Vercel (Grátis)

Hospedar o seu projeto na **Vercel** é a melhor opção. A plataforma é 100% gratuita para projetos como o seu, super rápida e fará o site abrir perfeitamente no celular!

## Passo a Passo

### 1. Baixe o projeto para o seu computador
1. Aqui mesmo no AI Studio (na barra esquerda), você tem a opção de baixar o seu projeto inteiro.
2. Baixe o projeto (geralmente como um arquivo `.zip`) e extraia a pasta no seu computador.

### 2. Crie uma conta no GitHub
1. Acesse [github.com](https://github.com/) e crie uma conta gratuita (caso ainda não tenha).
2. O GitHub é onde o código do seu site ficará guardado.

### 3. Crie um "Repositório" e suba seu código
1. No seu perfil do GitHub, clique em **"New"** (ou "New Repository").
2. Dê um nome, por exemplo: `sos-academicos-site`.
3. Deixe como "Public" ou "Private" (tanto faz).
4. Clique em **"Create repository"**.
5. Na tela seguinte, clique em **"uploading an existing file"** (enviar arquivos existentes).
6. Arraste **todos os arquivos da pasta que você baixou** (incluindo as pastas `src`, `public`, `package.json`, etc.) para essa tela do GitHub. 
7. Clique em **"Commit changes"** no botão verde lá embaixo. Pronto, seu código está na nuvem!

### 4. Conecte com a Vercel e coloque no ar!
1. Acesse [vercel.com](https://vercel.com/) e crie uma conta gratuita escolhendo **"Continue with GitHub"**.
2. Após o login, clique em **"Add New" > "Project"**.
3. A Vercel vai listar os seus repositórios do GitHub. Ache o `sos-academicos-site` e clique em **"Import"**.
4. Na tela de configuração, você não precisa mexer em **nada**! A Vercel já reconhece automaticamente que é um projeto React/Vite.
5. Clique no botão azul **"Deploy"**.

⏳ Aguarde cerca de 1 a 2 minutos...

🎉 **PRONTO!** A Vercel vai gerar um link profissional (ex: `sos-academicos-site.vercel.app`) que você já pode enviar para seus clientes. O site estará perfeitamente adaptado para celular, super rápido e sem bugs de rolagem!

---

### Como alterar Links, WhatsApp e Depoimentos depois?
Sempre que quiser alterar um texto:
1. Vá até o seu repositório no **GitHub**.
2. Abra a pasta `src` e clique no arquivo `data.ts` (ou no componente que deseja alterar, como `TestimonialsSection.tsx`).
3. Clique no ícone de lápis ✏️ no canto superior direito para editar.
4. Troque o número de WhatsApp, o texto do FAQ ou o depoimento.
5. Clique em **"Commit changes"**.

A mágica acontece agora: A Vercel percebe que você salvou no GitHub e **atualiza o seu site ao vivo automaticamente em segundos**!
