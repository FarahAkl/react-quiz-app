# 🎯 React Quiz App using useReducer

A simple and interactive quiz application built using React and the useReducer hook. This app demonstrates how to manage complex component state in a clean and scalable way using reducer logic.

## 🚀 Features

- Built with React functional components

- Uses useReducer for managing quiz state

- Dynamic question loading

- Tracks user score

- Displays final results

- Option to restart the quiz

- Responsive and clean UI

## 🛠️ Tech Stack

- React (Create React App)

- JavaScript (ES6+)

- CSS

## 📁 Project Structure

The app is divided into clear and reusable parts:

- components/ folder contains small UI parts like the quiz display and question renderer.

- data/ folder includes the quiz questions.

- App.js handles the overall layout and logic.

## 🔄 useReducer Functionality

This app uses useReducer instead of multiple useState hooks to manage quiz-related state. The reducer handles selecting an answer, moving to the next question, calculating the score, and restarting the quiz. This approach keeps the state logic centralized and easier to manage.

## 🧠 How It Works

- User starts the quiz and answers multiple-choice questions.

- Each answer is handled through a reducer action.

- Score is updated based on correct answers.

- Once all questions are answered, the final result is displayed.

- A restart button allows the user to retake the quiz.

## ▶️ Getting Started

- Clone the repository

- Run npm install to install dependencies

- Use npm start to launch the development server

- Use npm run server to lanch the api server

Visit http://localhost:3000 to view the app in your browser

## 👀 Live Demo 

[Click Here to see the live](https://react-quiz-app-rouge-rho.vercel.app/)