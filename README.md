# Minesweeper Game - Next.js

![Minesweeper](https://img.shields.io/badge/Game-Minesweeper-blue)
![Node Version](https://img.shields.io/badge/Node-%3E=18.0.0-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Tailwind](https://img.shields.io/badge/tailwind4-blue)


A modern **Minesweeper** game built with **Next.js 16**, **React**, **Tailwind CSS 4** , and **TypeScript**.  
This project replicates the classic Minesweeper game with added features like timers, flags, and a responsive UI.

https://github.com/user-attachments/assets/1ef8e9f3-fba6-4c35-84c9-102c829514ee


---

## 🌐 Live Demo

You can try the game online:  
👉 [Play Minesweeper](https://minesweeper-game-zeta.vercel.app/)

---

## 🎮 Features

- Classic Minesweeper gameplay  
- Right-click to place flags on suspected mines  
- Timer in game   
- Win/Lose detection with notifications  
- Responsive grid layout using **Tailwind CSS**  
- Fully typed with **TypeScript**  
- Restart / End game buttons  

---

## 📦 Technologies Used

- **Next.js 16** – App router and server components  
- **React 19+** – UI components and state management  
- **TypeScript** – Static typing  
- **Tailwind CSS 4** – Styling  
- **react-hot-toast** – Notifications for win/lose  

---

## 🗂 Project Structure

- **/app** – Next.js App Router files  
- **/components** – React components  
  - **pages/** – Main pages and views  
  - **module/** – Game modules (Cell, Disk, etc.)  
  - **layout/** – Shared layouts and wrappers  
- **/hooks** – Custom hooks (e.g., `useMinesWeeper`)  
- **/functions** – Game logic functions (`generateDisk`, `openNeighbors`, `planMines`)  
- **/types** – TypeScript types  
- **/public** – Static assets and images  
- **emus/** –   Colors  
- **constant/** – Constant files and resources used in the game 

---

## 📝 How to Play

- **Click** a cell to reveal it  
- **Right-click** (desktop) or **hold** (mobile) a cell to place/remove a flag  
- Reveal all non-mine cells to **win**  
- Clicking on a mine **ends the game**  

---

## 🚀 Future Improvements

- Mobile-friendly touch controls  
- Customizable grid size and difficulty levels  
- Animations and effects for better UX  
- Sound effects for clicks and flags

 ## 📥 Getting Started

To clone the repository and run the project locally, use the following commands:

```bash
# Clone the repository
git clone https://github.com/hosseinmahdiian/Minesweeper-Game-.git

# Navigate into the project folder
cd Minesweeper-Game

# Install dependencies
npm install

# Run the development server
npm run dev
