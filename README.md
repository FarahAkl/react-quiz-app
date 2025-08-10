# 🎯 React Quiz App using useReducer & Context API

A simple and interactive quiz application built using **React** with two implementations: one using the **useReducer** hook only, and another using **useReducer** combined with the **Context API** for global state management. Both versions share the same project structure and logic but differ in how state is accessed and shared across components.

## 🚀 Features

- Built with React functional components  
- Two state management approaches:
  - **Version 1:** useReducer only  
  - **Version 2:** useReducer + Context API for global state sharing  
- Dynamic question loading from an API  
- Tracks user score in real-time  
- Timer for each quiz session  
- Displays final results and high score  
- Option to restart the quiz  
- Responsive and clean UI  

## 🛠️ Tech Stack

- **React** (Create React App)  
- **JavaScript** (ES6+)  
- **CSS** for styling  

## 📁 Project Structure

The app is divided into clear and reusable parts:

- **components/** → UI parts like quiz display, progress bar, and question renderer.  
- **context/** → Contains the Context API provider (for the Context version).  
- **data/** → Quiz questions (or fetched from API).  
- **App.js** → Overall layout and routing logic.  

## 🔄 State Management Approaches

### Version 1 – useReducer only  
State is managed inside a main component using `useReducer`. Child components receive props to interact with state.

### Version 2 – useReducer + Context API  
State is still handled with `useReducer`, but wrapped inside a Context Provider, allowing any component in the app to directly access and dispatch actions without prop drilling.

**Benefits of Context API in this app:**
- Eliminates long prop chains
- Makes the code more scalable for larger projects
- Keeps state and logic centralized

## 🧠 How It Works

1. User starts the quiz.  
2. Questions are loaded dynamically from an API.  
3. User selects answers → reducer updates score.  
4. Timer counts down per session.  
5. At the end, results and high score are shown.  
6. User can restart the quiz anytime.

## ▶️ Getting Started

1. Clone the repository:  

```
git clone "https://github.com/FarahAkl/react-quiz-app.git"
cd react-quiz-app
```
2. Install dependencies:

```
npm install
```
3. Start the app:

```
npm start
```
4. Start the mock API server:

```
npm run server
```
Visit http://localhost:3000 in your browser.

## 👀 Live Demo
[Click Here to see the live](https://react-quiz-app-rouge-rho.vercel.app/)