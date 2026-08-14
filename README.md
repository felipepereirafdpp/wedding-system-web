<<<<<<< HEAD
# 💍 Wedding System — Front-End

`React` `TypeScript` `Vite` `HTML5` `CSS3` `REST API` `Evo Code` `Status: Em desenvolvimento`

## 📌 Sobre o Projeto

O **Wedding System Front-End** é a interface web de uma plataforma personalizada para gerenciamento de casamentos, desenvolvida pela **Evo Code** para um cliente.

A aplicação foi desenvolvida para proporcionar uma experiência moderna, intuitiva e responsiva para os diferentes usuários do sistema.

O Front-End é responsável pela interface de interação com os usuários e pela comunicação com a API do Wedding System.

---

## 🏢 Desenvolvido por

### 🚀 Evo Code

A **Evo Code** é uma empresa de desenvolvimento de software focada na criação de soluções personalizadas para empresas e clientes.

Neste projeto, a Evo Code é responsável pelo desenvolvimento da aplicação Web e sua integração com o Back-End.

---

## 🧠 Arquitetura do Sistema

O projeto foi estruturado buscando manter uma organização clara entre páginas, componentes, serviços e regras de navegação.

```text
📦 Components
   → Componentes reutilizáveis da interface

📄 Pages
   → Páginas e telas da aplicação

🔀 Routes
   → Gerenciamento das rotas

🌐 Services
   → Comunicação com a API

📡 API
   → Configuração das requisições HTTP

🎨 Styles
   → Estilos e identidade visual

🧩 Types
   → Tipagens utilizadas pela aplicação
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
>>>>>>> 1f1b947942562d0ba9b0bb02ef28d0c781f8c703
