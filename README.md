# 🐷 JubJub Sukorn

A modern, responsive, single-page e-commerce web application for a premium pork shop. This project is built entirely with Vanilla JavaScript, HTML, and CSS, requiring no build tools or external databases to run.

## ✨ Features

* **Interactive Storefront:** Browse fresh cuts and processed pork products with real-time search and category filtering.
* **Multi-Language Support:** Seamlessly toggle between English and Thai (ภาษาไทย) translations.
* **Shopping Cart & Checkout:** Full cart functionality including quantity updates, subtotal calculations, and a simulated multi-step checkout process.
* **Loyalty Points System:** Customers earn points on purchases and can redeem them for discounts during checkout.
* **Role-Based Access Control:**
  * **Customer:** Browse products, place orders, view order history, and request refunds.
  * **Admin:** Dashboard to add, edit, or remove products (supporting direct Image URLs), and monitor overall store metrics.
  * **Warehouse:** Workflow panel to view pending orders and mark them as packed for delivery.
  * **Staff:** Customer service panel to review, approve, or reject refund requests.

## 🚀 How to Run

Because this app uses a purely front-end architecture with an in-memory state, there is no installation required.

1. Clone or download this repository.
2. Open the `JubJub Web` folder.
3. Double-click `index.html` to open it in your default web browser.

## 🔐 Demo Accounts

You can test the different role-based views using the following demo credentials. Click **Login** in the top right corner of the app.

| Role | Email | Password |
| :--- | :--- | :--- |
| **Customer** | `customer@demo.com` | `demo` |
| **Admin** | `admin@jubjub.com` | `admin` |
| **Warehouse** | `warehouse@jubjub.com` | `warehouse` |
| **Staff** | `staff@jubjub.com` | `staff` |

## 🛠️ Tech Stack

* **HTML5** (Structure)
* **CSS3** (Custom styling, CSS variables, glassmorphism UI)
* **Vanilla JavaScript** (State management, DOM manipulation, action handling)

## 📁 Project Structure

* `index.html` - The main entry point and app container.
* `styles.css` - All styling, layout, and responsive design rules.
* `app.js` - Consolidated application logic, including static data, state management, render functions, and user actions.
