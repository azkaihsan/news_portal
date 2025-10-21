# News Portal - Astro + React Integration

This is a news portal application that integrates a React frontend with Astro as the build system.

## Features

- Modern React-based news portal
- Responsive design with Tailwind CSS
- Multiple news categories and sources
- Search functionality
- Country-based news filtering
- Source-based news filtering

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:4321`

## Backend Configuration

The frontend is configured to connect to a backend API at `http://localhost:5000` by default. 

To change the backend URL, you can:
1. Set the `REACT_APP_BACKEND_URL` environment variable
2. Or modify the default URL in `src/services/api.js`

## Project Structure

- `src/components/` - React components including UI components
- `src/pages/` - React pages and Astro pages
- `src/services/` - API service layer
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/mock/` - Mock data for development

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- Astro (build system)
- React (frontend framework)
- Tailwind CSS (styling)
- React Router (routing)
- Axios (HTTP client)
- Radix UI (UI components)
- Lucide React (icons)
