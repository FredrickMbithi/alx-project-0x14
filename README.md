# CineSeek - Movie Discovery App

A modern movie discovery application built with Next.js 14, TypeScript, and Tailwind CSS. Browse thousands of movies, filter by genre and year, and discover your next cinematic experience.

# ALX Project 0x14 – CineSeek Movie App

This repository contains a Next.js 14 application (Pages Router) that integrates with the MoviesDatabase API on RapidAPI to list and filter movies.

## API Overview

The MoviesDatabase API provides structured movie metadata including titles, images, release years, and pagination helpers. You can query titles by year, genre, lists (e.g., top rated), and paginate results.

Key features:

- Title search and list endpoints
- Filter by year and genre
- Paginated results
- Includes primary images and title text per item

## Version

API version: Refer to RapidAPI MoviesDatabase documentation (current version exposed via `titles` endpoints; versioning managed by provider on RapidAPI).

## Available Endpoints

- `GET /titles` – Fetch titles. Supports query params like `year`, `genre`, `page`, `limit`, `sort`.
- `GET /titles?list=top_rated_english_250` – Predefined list of top-rated English titles.
- `GET /titles/search/keyword/{keyword}` – Search titles by keyword.
- Other variations exist; consult the RapidAPI docs for complete list.

## Request and Response Format

Example request:

```
GET https://moviesdatabase.p.rapidapi.com/titles?year=2024&sort=year.decr&limit=12&page=1
Headers:
  x-rapidapi-host: moviesdatabase.p.rapidapi.com
  x-rapidapi-key: <YOUR_API_KEY>
```

Typical response shape:

```json
{
  "page": 1,
  "next": "...",
  "entries": 250,
  "results": [
    {
      "id": "tt1234567",
      "primaryImage": {
        "url": "https://m.media-amazon.com/...jpg"
      },
      "titleText": { "text": "Movie Title" },
      "releaseYear": { "year": 2024 }
    }
  ]
}
```

Frontend-transformed shape used by this app (subset):

```ts
interface MoviesProps {
  id: string;
  primaryImage: { url: string };
  titleText: { text: string };
  releaseYear: { year: string };
}
```

## Authentication

All requests require RapidAPI headers:

- `x-rapidapi-host: moviesdatabase.p.rapidapi.com`
- `x-rapidapi-key: <YOUR_API_KEY>`

Store your key in `.env.local`:

```
MOVIE_API_KEY=YOUR_RAPIDAPI_KEY
```

Never commit secrets to version control.

## Error Handling

Common errors:

- `401/403` – Invalid key or not subscribed to API
- `429` – Rate limit exceeded
- `5xx` – Provider-side issue

Client pattern:

- Use `try/catch`
- Check `response.ok`; if false, read body and show user-friendly message
- Provide a retry action

Server route (`pages/api/fetch-movies.ts`): returns `{ movies }` on success; responds `405` for non-POST.

## Usage Limits and Best Practices

- Respect rate limits; cache or debounce on the client
- Request only needed fields and use pagination (`limit`, `page`)
- Validate filters (year, genre) before requests
- Secure keys via environment variables
- Handle `primaryImage` missing cases with fallbacks

## Tech Stack

- Next.js 14 (Pages Router)
- TypeScript
- Tailwind CSS
- Font Awesome
- MoviesDatabase API (RapidAPI)

## Project Structure

```
components/
  commons/
    Button.tsx
    Loading.tsx
    MovieCard.tsx
  layouts/
    Header.tsx
    Footer.tsx
    Layout.tsx
interfaces/
  index.ts
pages/
  api/
    fetch-movies.ts
  index.tsx
  movies/
    index.tsx
styles/
  globals.css
next.config.js
.env.local
```

## Getting Started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment Variables

- `MOVIE_API_KEY`: RapidAPI key for MoviesDatabase

## Notes

- Next.js Image is configured for external domains including `m.media-amazon.com`.
- The movies page calls `/api/fetch-movies` via POST with `{ page, year, genre }`.

MIT License
