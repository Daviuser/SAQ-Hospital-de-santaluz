# Hospital Municipal de Santaluz — Landing de atendimento

Página estática (HTML, CSS e JavaScript puro). Sem build, sem dependências.

## Rodar localmente
Abra `index.html` no navegador, ou, na pasta do projeto:

    python3 -m http.server 8080

e acesse http://localhost:8080 (apenas para teste; não use esta URL no QR Code).

## Configurar contatos e links
Edite o objeto `CONFIG` no início de `js/script.js`:

- `whatsappNumber`: número institucional, só dígitos, com DDI (ex.: `5575999999999`)
- `evaluationUrl`: link de avaliação definido pela administração
- `ombudsmanUrl`: link oficial da Ouvidoria
- `reclameAquiUrl`: perfil oficial, somente após confirmação

Canais vazios aparecem como "Indisponível no momento" (sem link). Sem número de WhatsApp, o botão fica oculto.

## Publicar na Vercel
1. Envie a pasta para um repositório novo (independente de outros projetos).
2. Na Vercel: Add New → Project → importe o repositório.
3. Framework Preset: Other. Build Command e Output Directory: vazios. Deploy.
4. Com a URL pública definitiva, gere o QR Code.
