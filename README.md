# 🧭 WanderList — Travel Itinerary Planner

A modern, responsive React application for planning trips day-by-day. Create trips, organize activities into a daily itinerary, and manage everything from one clean dashboard.

**🔗 Live Demo:** https://peggieprospers.github.io/wanderlist/

## Features

- Create and delete trips with name, destination, and dates
- View all trips in a responsive card grid
- Add multiple days to a trip
- Add stops to each day with name, time, category, and notes
- Color-coded categories (Sightseeing, Food, Transport, Other)
- Friendly empty states and error handling throughout
- Fully responsive design for desktop, tablet, and mobile
- Client-side routing with dynamic trip detail pages

## Technologies Used

- **React 19** — component-based UI library
- **Vite** — fast build tool and dev server
- **React Router DOM** — client-side routing (HashRouter for GitHub Pages compatibility)
- **Plain CSS** — custom, responsive styling (no UI framework)
- **GitHub Pages** — deployment/hosting

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/peggieprospers/wanderlist.git
cd wanderlist
npm install
```

## Running Locally

```bash
npm run dev
```

Then open `http://localhost:5173/` in your browser.

## Project Structure
wanderlist/
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── TripCard.jsx
│ │ ├── TripForm.jsx
│ │ ├── DaySection.jsx
│ │ ├── StopCard.jsx
│ │ └── StopForm.jsx
│ ├── pages/ # Route-level page components
│ │ ├── Home.jsx
│ │ ├── TripDetail.jsx
│ │ └── NotFound.jsx
│ ├── data/
│ │ └── trips.js # Mock trip data
│ ├── App.jsx # Main app + routing + shared state
│ └── main.jsx # App entry point
├── package.json
└── vite.config.js


## How It Works

- Trip data is managed in React state (`useState`) at the top level (`App.jsx`) and passed down to pages and components via props.
- Trips, days, and stops are updated immutably using `map()`, `filter()`, and the spread operator — never mutated directly.
- React Router handles navigation between the trip list (Home) and individual trip itineraries (Trip Detail), using a dynamic `:tripId` route parameter.
- All forms (Create Trip, Add Stop) are controlled components with basic validation and error messaging.
- Mock data (`src/data/trips.js`) simulates a backend — no real database is connected. Data resets on page refresh since it lives only in memory.

## Future Improvements

- Persist trips using `localStorage` or a real backend/database
- Drag-and-drop reordering of stops within a day
- Search and filter trips
- Trip cover images
- Map view showing all stops for a day
- User accounts and authentication

## Author

Built by Peggie Fisher as a portfolio project to practice modern React fundamentals: component composition, state management, controlled forms, dynamic routing, and responsive design.