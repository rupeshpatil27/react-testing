# React Testing Lab 🧪

This project built to practice writing tests for React components. It uses **Vitest** (the testing runner) and **React Testing Library** (to interact with components).

## 🚀 Features

- **Component Testing:** Comprehensive suites using [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com).
- **Auth Mocking:** Demonstrates how to mock [Clerk SDK](https://clerk.com) hooks (`useUser`) and components (`SignedIn`, `SignedOut`).
- **Simulating Real User Behavior:** Using `@testing-library/user-event` instead of `fireEvent` for realistic event propagation.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Testing:** Vitest + JSDOM
- **Auth:** Clerk React
- **Routing:** React Router v7
- **UI Components:** Shadcn/UI

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
   
2. **Run the tests:**
   ```bash
   npm run test
   ```
   
3. **See tests in a browser (Visual Mode):**
   ```bash
   npm run test:ui
   ```