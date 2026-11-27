<div align="center">

# SWE Quiz | منصة اختبارات هندسة البرمجيات

**تطبيق ويب تفاعلي لاختبارات هندسة البرمجيات بـ React و TypeScript و Vite — Interactive Software Engineering Quiz Platform**

[![React](https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=000000)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Fast_Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-99%25_Typed-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

[✨ Features](#-about-swe-quiz) · [🏗️ Architecture](#-architecture--tech-stack) · [🚀 Getting Started](#-getting-started)

</div>

---

## ✨ About SWE Quiz

**SWE Quiz** is a fast, strongly-typed interactive web application for practicing and testing **Software Engineering** concepts, built with **React**, **TypeScript**, and **Vite**.

- 🧠 **Curated Software Engineering Question Bank:** Structured TypeScript question models (`src/questionsData.ts` & `src/types.ts`) for reliable scoring and instant feedback.
- ⚡ **Instant Feedback & Score Tracking:** Responsive component-based quiz flow built for quick revision and exam preparation.
- 🎯 **Clean Modular Architecture:** Separation of data models, UI components (`src/components/`), and application state (`src/App.tsx`).

---

## 🏗️ Architecture & Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React · TypeScript |
| **Build Tooling** | Vite (`vite.config.ts`) |
| **Data Modeling** | Strictly-typed TypeScript interfaces (`src/types.ts`, `src/questionsData.ts`) |

```text
quiz/
├── src/
│   ├── components/          # Modular quiz UI components
│   ├── App.tsx              # Main quiz workflow & state orchestration
│   ├── questionsData.ts     # Structured Software Engineering question bank
│   └── types.ts             # TypeScript domain interfaces
├── index.html               # App entry point
├── vite.config.ts           # Vite build configuration
└── package.json             # Project dependencies & scripts
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/zxrelking/quiz.git
cd quiz
npm install
npm run dev
```

---

<div align="center">
  <sub>Built with ❤️ using React, TypeScript & Vite — <strong>SWE Quiz</strong></sub>
</div>
