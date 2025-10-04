# 🛒 Avesh E-Commerce Frontend

A responsive single-page e-commerce frontend built with **React**, **Tailwind CSS**, **React Router**, and **Vite**. It features dynamic product listings, category filters, a functional cart system with local storage, and routing — all deployed via Netlify with continuous deployment from GitHub.

## 🔗 Live Demo

👉 [Click here to view the live site](https://app.netlify.com/projects/avesh-ecommerce-frontend/overview)

---

## ✨ Features

- ✅ Product listing from fake API
- ✅ Category filter (men, women, electronics, jewelry)
- ✅ Single product view
- ✅ Add to cart / Remove from cart
- ✅ Increase / Decrease item quantity
- ✅ Cart state stored in `localStorage`
- ✅ Checkout page (protected route simulation)
- ✅ Client-side routing with React Router v7
- ✅ SPA fallback routing using Netlify `_redirects`
- ✅ Responsive layout with Tailwind CSS
- ✅ Deployed with Vite + Netlify (CDN)

---

## 🧱 Tech Stack

- **React** (v19+)
- **React Router DOM** (v7.9+)
- **Tailwind CSS**
- **Vite**
- **Netlify**
- **GitHub (CI/CD)**

---

## 📁 Folder Structure

### 📁 Folder Structure

- `project-root/`
- `public/`
- `_redirects` — SPA routing fix for Netlify (handles client-side routing)

- `src/`
  - `pages/` — Main pages like HomePage, ProductPage, CartPage, CheckoutPage, LoginPage
  - `components/` — Reusable UI components (Navbar, Hero, Footer, etc.)
  - `services/` — API functions and utilities
  - `App.jsx` — Main app component with routing setup
  - `main.jsx` — App entry point using RouterProvider
- `package.json` — Project dependencies and scripts
- `vite.config.js` — Vite configuration file
- `README.md` — Project documentation
