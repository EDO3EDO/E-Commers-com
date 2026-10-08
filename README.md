# 🛒 Fresh Cart

> A modern, responsive e-commerce web application built to provide a seamless online shopping experience with product browsing, filtering, and cart state management.

---

## 🔗 Quick Links

- **Live Demo:** [View Live Demo](https://edo3edo.github.io/E-Commers-com/Home)
- **Status:** Finished / Live

---

## 🎥 Project Demo

![Fresh Cart Demo](./public/demo.gif)

---

## 🛠️ Tech Stack

- **Frontend:** Angular, Standalone Components, TypeScript, RxJS
- **Backend:** .Net
- **Styling & UI:** Bootstrap 5, Font Awesome, Custom CSS (HEX values)
- **API Communication:** Angular HttpClient, RxJS, Dependency Injection
- **Deployment:** GitHub Pages

---

## ✨ Key Features

- **Product Catalog & Browsing:** Dynamic product listing with smooth grid layouts and category filtering.
- **Shopping Cart Management:** Add, update quantities, and remove items seamlessly using API requests.
- **User Authentication:** Secure login and registration flows with token-based session handling.
- **Responsive Design:** Fully optimized UI layout across mobile, tablet, and desktop screens.

---

## 💡 Technical Challenges & Solutions

1. **Challenge 1 (Moving API calls from Components to Services):**
   - _What happened:_ At first, I was writing all the API requests and HTTP methods directly inside the components, which made the code messy and hard to manage.
   - _How I fixed it:_ I learned how to use Angular **Dependency Injection** and moved everything into dedicated **Services** to keep the components clean and well-organized.
2. **Challenge 2 (Handling User Tokens):**
   - _What happened:_ Needed a way to securely send the user token with requests so the backend could recognize authorized actions.
   - _How I fixed it:_ Managed token storage properly and attached the authorization headers to the necessary API calls to keep user data secure.

---

## ⚙️ Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/USERNAME/E-Commers-com.git](https://github.com/USERNAME/E-Commers-com.git)
   ```
