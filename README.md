# Minesweeper Game - Next.js

![Minesweeper](https://img.shields.io/badge/Game-Minesweeper-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Node Version](https://img.shields.io/badge/Node-%3E=18.0.0-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16-blue)

A modern **Minesweeper** game built with **Next.js 16**, **React**, and **TypeScript**.  
This project replicates the classic Minesweeper game with added features like timers, flags, and a responsive UI.

---

## 🌐 Live Demo

You can try the game online: [Your Deployed Link Here](#)

---

## 🎮 Features

- Classic Minesweeper gameplay  
- Right-click to place flags on suspected mines  
- Double-click to auto-open neighboring cells  
- Timer to track game duration  
- Win/Lose detection with notifications  
- Responsive grid layout using **Tailwind CSS**  
- Fully typed with **TypeScript**  
- Restart / End game buttons  

---

## 📦 Technologies Used

- **Next.js 16** – App router and server components  
- **React 18+** – UI components and state management  
- **TypeScript** – Static typing  
- **Tailwind CSS** – Styling  
- **react-hot-toast** – Notifications for win/lose  

---

## 🗂 Project Structure

- **/app # Next.js App Router files
- **/components # React components (Cell, Disk, etc.)
- **/hooks # Custom hooks (useMinesWeeper)
- **/functions # Game logic (generateDisk, openNeighbors, planMines)
- **/types # TypeScript types
- **/public # Static assets and images

## How to Play
- **Click a cell to reveal it
- **Right-click to place/remove a flag
- **Double-click on a number to auto-open surrounding cells if flagged correctly
- **Reveal all non-mine cells to win
- **Clicking on a mine ends the game


## 🚀 Future Improvements
- **Mobile-friendly touch controls
- **Customizable grid size and difficulty levels
- **Persistent high scores using local storage
- **Animations and effects for better UX
- **Sound effects for clicks and flags
