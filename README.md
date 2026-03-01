# CryptoPulse – Crypto Market Dashboard

CryptoPulse is a responsive cryptocurrency dashboard that enables users to monitor real-time market prices, quickly search assets, and maintain a personalized watchlist. The application is built with React and Vite for a fast and modern user experience.

---

## Live Demo

https://crypto-pulse-dash.vercel.app/

---

## Features

- Real-time cryptocurrency data from CoinGecko API  
- Search assets by name or symbol  
- Add and remove assets from watchlist  
- Persistent watchlist using localStorage  
- Responsive dashboard layout  
- Edit List functionality for watchlist management  
---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│   └── ApiWarning.jsx
├── sections/
│   └── Watchlist.jsx
├── services/
│   └── cryptoApi.js
├── assets/
│   └── logo.svg
├── App.jsx
└── global.css
```

---

## Tech Stack

- React (Vite)  
- Custom CSS  
- CoinGecko API  
- React Hooks  
- localStorage  
- Vercel  

---

## Figma Reference

https://www.figma.com/design/dfIdRbqpxLwHEVGKEO4VUf/Crypto-Market-Overview?node-id=19-316&t=Eco5uA3tsW9PHMog-0

## Getting Started

### Prerequisites

- Node.js 18+  
- npm  

### Installation

```bash
git clone https://github.com/pranav-ib/Crypto-Pulse.git
cd Crypto-Pulse
npm install
```

### Run locally

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Data Persistence

The watchlist is stored in browser localStorage so selected assets remain saved after page refresh without requiring a backend.

---

## Deployment

This project is deployed using Vercel.
