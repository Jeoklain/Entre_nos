# Entre Nós Duas ❤️

Um cantinho especial com memórias, fotos e músicas.

## 📁 Como fazer upload para GitHub

Se você está tendo problema em fazer upload da pasta `img/`, siga estas opções:

### Opção 1: Usar GitHub Desktop (Recomendado - Mais Fácil)

1. Baixe GitHub Desktop: https://desktop.github.com
2. Abra GitHub Desktop e vá em "File" → "Add Local Repository"
3. Selecione a pasta `Valentine's Day`
4. Clique em "Publish repository" e confirme

### Opção 2: Usar Git Bash (Linha de Comando)

1. Baixe Git: https://git-scm.com/download/win
2. Abra Git Bash nesta pasta (botão direito → "Git Bash Here")
3. Execute os comandos:

```bash
git add .
git commit -m "Initial commit - Valentine's Day website"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/valentine-day.git
git push -u origin main
```

**Importante:** Troque `SEU-USUARIO` pelo seu usuário do GitHub!

### Opção 3: GitHub Web Upload

1. Crie um repositório em https://github.com/new
2. Vá para o repositório → "Upload files"
3. Arraste os arquivos (HTML, CSS, JS, pasta `img/` com as fotos)

## 📸 Estrutura do Projeto

```
Valentine's Day/
├── index.html          # Página principal
├── script.js           # Lógica JavaScript
├── style.css           # Estilos
├── .gitignore         # Configuração Git
├── README.md          # Este arquivo
└── img/               # Pasta com fotos
    ├── photo-01.jpeg
    ├── photo-02.jpeg
    └── ... (até photo-10.jpeg)
```

## ✅ Checklist Antes de Fazer Upload

- [x] Imagens renomeadas sem espaços (`photo-01.jpeg`, etc.)
- [x] `.gitignore` criado (NÃO bloqueia a pasta `img/`)
- [ ] Git instalado (se usar Git Bash)
- [ ] Repositório criado no GitHub
- [ ] Comando `git push` executado

## 🎵 Funcionalidades

- Galeria de fotos (imagens 1-4)
- Nossas memórias (imagens 5-10)
- Playlist interativa
- Contador de dias
- Design responsivo

---

**Feito com ❤️ para você**
