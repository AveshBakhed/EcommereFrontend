# 🛒 Avesh E-Commerce Frontend

A responsive single-page e-commerce frontend built with **React**, **Tailwind CSS**, **React Router v7**, and **Vite**.  
It features dynamic product listings, category filters, a functional cart system with local storage, **mock authentication**, and a **checkout flow** — all deployed via **Netlify** with **Continuous Integration and Deployment (CI/CD)** from GitHub.

## 🔗 Live Demo

👉 [Click here to view the live site](https://ecommerce-frontend-avesh.netlify.app/)

## ✨ Features

- ✅ Product listing from **FakeStoreAPI**
- ✅ Category filter (Men, Women, Electronics, Jewelry)
- ✅ Single product view with description and rating
- ✅ Add to cart / Remove from cart
- ✅ Increase / Decrease item quantity
- ✅ Cart state stored in `localStorage` (persists on refresh)
- ✅ Checkout page with **address & payment form**
- ✅ **Protected route** for checkout (requires login)
- ✅ **Mock login & logout** using localStorage token
- ✅ Dynamic navbar showing login/logout & cart count
- ✅ Client-side routing with **React Router v7**
- ✅ SPA fallback routing using Netlify `_redirects`
- ✅ Responsive layout with **Tailwind CSS**
- ✅ **Deployed using CI/CD pipeline** (GitHub → Netlify)
- ✅ Fast builds and HMR via **Vite**

## 🧱 Tech Stack

- **React** (v19+)
- **React Router DOM** (v7.9+)
- **Tailwind CSS**
- **Vite**
- **FakeStoreAPI (REST)**
- **LocalStorage**
- **Netlify**
- **GitHub (CI/CD)**

---

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

## ✅ **Summary:**

This project demonstrates an end-to-end **e-commerce frontend** with SPA routing, protected checkout flow, local persistence, and seamless deployment using **Netlify CI/CD**.

## 👨‍💻 Author

**Created by:** [Avesh Bakhed](https://www.linkedin.com/in/avesh1234/)  
Frontend Developer | React Enthusiast | JavaScript Developer

---

⭐ **If you like this project, consider giving it a star on GitHub!**
