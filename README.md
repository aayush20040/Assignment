# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# News App

## 📌 Project Overview
This is a React-based News App that fetches and displays the top 5 daily news articles. It allows users to mark articles as favorites, which are stored in `localStorage` for persistence.

## 🚀 Features
- Fetches top 5 daily news headlines using NewsAPI
- Allows users to mark articles as favorites
- Stores favorite articles in `localStorage`
- Responsive UI with smooth animations using `framer-motion`
- Back button for easy navigation

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion
- **API:** NewsAPI.org
- **Icons:** Lucide-react

## 📦 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/aayush20040/Assignment.git
cd Assignment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
The application will be available at `http://localhost:3000/`.

## 🔨 Build Instructions
To create a production build, run:
```sh
npm run build
```
This will generate an optimized `build/` folder.

## 🎨 Design Decisions
- **Framer Motion** was used for animations to enhance user experience.
- **LocalStorage** was chosen for storing favorites to provide a simple, client-side persistence solution.
- **Tailwind CSS** was used for styling to ensure a clean and responsive design.

## 📌 Future Improvements
- Add user authentication for personalized favorite articles
- Implement pagination for more news articles
- Add a dark/light mode toggle

## 🤝 Contributing
Feel free to open issues and create pull requests!

## 📜 License
This project is licensed under the MIT License.

