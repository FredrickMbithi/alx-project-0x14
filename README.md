# CineSeek - Movie Discovery App

A modern movie discovery application built with Next.js 14, TypeScript, and Tailwind CSS. Browse thousands of movies, filter by genre and year, and discover your next cinematic experience.

## 🛠️ Tech Stack

- **Next.js 14** (Pages Router)
- **TypeScript**
- **Tailwind CSS**
- **Font Awesome** icons
- **MoviesDatabase API** (RapidAPI)

## 📁 Project Structure

```
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── Layout.tsx      # Page wrapper
│   ├── movies/
│   │   ├── MovieCard.tsx   # Movie display card
│   │   ├── Loading.tsx     # Loading skeleton
│   │   ├── FilterBar.tsx   # Year/genre filters
│   │   └── Pagination.tsx  # Page navigation
│   └── ui/
│       └── Button.tsx      # Reusable button
├── interfaces/
│   └── index.ts            # TypeScript interfaces
├── pages/
│   ├── api/
│   │   └── fetch-movies.ts # Movies API route
│   ├── movies/
│   │   └── index.tsx       # Movies listing page
│   ├── _app.tsx            # App wrapper
│   ├── _document.tsx       # HTML document
│   ├── index.tsx           # Landing page
│   └── 404.tsx             # Not found page
├── styles/
│   └── globals.css         # Global styles
└── .env.local              # Environment variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- RapidAPI account for MoviesDatabase API

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cineseek-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
# Create .env.local file with:
NEXT_PUBLIC_API_URL=https://moviesdatabase.p.rapidapi.com
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=moviesdatabase.p.rapidapi.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📡 API Endpoints

### `GET /api/fetch-movies`

Fetches movies from MoviesDatabase API.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `year` | number | Filter by release year |
| `genre` | string | Filter by genre |
| `list` | string | Movie list (default: top_rated_english_250) |

**Response:**

```json
{
  "results": [
    {
      "id": "tt1234567",
      "title": "Movie Title",
      "year": 2024,
      "image": "https://...",
      "rating": 8.5,
      "genre": ["Action", "Drama"],
      "description": "Movie description..."
    }
  ],
  "page": 1,
  "totalPages": 25,
  "totalResults": 250
}
```

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ Server-side rendering (SSR)
- ✅ API route for secure API key handling
- ✅ Movie filtering by year and genre
- ✅ Pagination support
- ✅ Loading skeletons
- ✅ Error handling with fallbacks
- ✅ TypeScript throughout
- ✅ Tailwind CSS styling

## 📜 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔒 Environment Variables

| Variable               | Required | Description                              |
| ---------------------- | -------- | ---------------------------------------- |
| `RAPIDAPI_KEY`         | Yes      | Your RapidAPI key                        |
| `RAPIDAPI_HOST`        | Yes      | API host (moviesdatabase.p.rapidapi.com) |
| `NEXT_PUBLIC_API_URL`  | No       | API base URL                             |
| `NEXT_PUBLIC_BASE_URL` | No       | App base URL for SSR                     |

## 📄 License

MIT License
