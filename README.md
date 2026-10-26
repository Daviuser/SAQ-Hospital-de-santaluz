# Hospital Municipal de Santaluz — Landing de atendimento

Página estática (HTML, CSS e JavaScript puro). Sem build, sem dependências.

## Rodar localmente
Abra `index.html` no navegador, ou, na pasta do projeto:

    python3 -m http.server 8080

e acesse http://localhost:8080 (apenas para teste; não use esta URL no QR Code).

## Canal de atendimento
O único canal de atendimento é o WhatsApp oficial: (75) 98844-2372. O botão está configurado diretamente em `index.html` com o link https://wa.me/5575988442372.

## Publicar na Vercel
1. Envie a pasta para um repositório novo (independente de outros projetos).
2. Na Vercel: Add New → Project → importe o repositório.
3. Framework Preset: Other. Build Command e Output Directory: vazios. Deploy.
4. Com a URL pública definitiva, gere o QR Code.
