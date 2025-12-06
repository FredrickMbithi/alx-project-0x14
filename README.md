# CineSeek - Movie Discovery App

A modern movie discovery application built with Next.js 14, TypeScript, and Tailwind CSS. Browse thousands of movies, filter by genre and year, and discover your next cinematic experience.

# ALX Project 0x14 – CineSeek Movie App

This repository contains a Next.js 14 application (Pages Router) that integrates with the MoviesDatabase API on RapidAPI to list and filter movies.

## API Overview

The MoviesDatabase API on RapidAPI provides rich, up-to-date metadata for movies, series, episodes, and actors. It supports filtering by year and genre, predefined lists (e.g., top rated), keyword and title search, pagination, and optional "info" selections to control payload size.

Key features:

- Title discovery and predefined lists
- Keyword/title/aka search endpoints
- Year/genre filters and sorting (e.g., `year.decr`)
- Consistent paginated responses with `page`, `entries`, and `results`
- Actor endpoints and utility endpoints (genres, title types, lists)

## Version

The API is currently unversioned on RapidAPI; endpoints are served under `https://moviesdatabase.p.rapidapi.com`. Versioning and schema changes are managed by the provider. Always consult the RapidAPI documentation for the latest behavior.

## Available Endpoints

- `GET /titles` – Returns titles with optional filters (`year`, `genre`, `limit`, `page`, `sort`, `info`).
- `GET /titles/{id}` – Returns a single title by IMDb ID.
- `GET /titles/{id}/ratings` – Returns rating and votes for a title.
- `GET /titles/series/{id}` – Returns episodes (light) for a series.
- `GET /titles/series/{id}/{season}` – Returns episode IDs for a specific season.
- `GET /titles/x/upcoming` – Returns upcoming titles.
- `GET /titles/search/keyword/{keyword}` – Search titles by keyword.
- `GET /titles/search/title/{title}` – Search titles by title (supports `exact=true`).
- `GET /actors` – Returns actors with pagination.
- `GET /actors/{id}` – Returns actor details.
- `GET /title/utils/titleType` – Returns available title types.
- `GET /title/utils/genres` – Returns available genres.
- `GET /title/utils/lists` – Returns predefined title lists (e.g., `top_rated_250`).

## Request and Response Format

Example request:

```
GET https://moviesdatabase.p.rapidapi.com/titles?year=2024&sort=year.decr&limit=12&page=1
Headers:
  x-rapidapi-host: moviesdatabase.p.rapidapi.com
  x-rapidapi-key: <YOUR_API_KEY>
```

Typical response shape (paginated collections):

```json
{
  "page": 1,
  "next": "https://...page=2",
  "entries": 250,
  "results": [
    {
      "id": "tt1234567",
      "primaryImage": { "url": "https://m.media-amazon.com/...jpg" },
      "titleText": { "text": "Movie Title" },
      "releaseYear": { "year": 2024 }
    }
  ]
}
```

Subset used in this app:

```ts
interface MoviesProps {
  id: string;
  primaryImage: { url: string };
  titleText: { text: string };
  releaseYear: { year: string };
}
```

## Authentication

Include RapidAPI headers with each request:

- `x-rapidapi-host: moviesdatabase.p.rapidapi.com`
- `x-rapidapi-key: <YOUR_API_KEY>`

Store your key in `.env.local`:

```
MOVIE_API_KEY=YOUR_RAPIDAPI_KEY
```

Never commit secrets to version control.

## Error Handling

Common errors:

- `401/403` – Invalid API key or subscription issue
- `429` – Rate limit exceeded
- `5xx` – Provider-side issue

Handling strategy:

- Check `response.ok` and surface meaningful messages
- Wrap fetches in `try/catch`; provide retry actions
- Gracefully handle empty/missing fields (e.g., `primaryImage`)

Server route (`pages/api/fetch-movies.ts`) returns `{ movies }` on success and `405` for non-POST.

## Usage Limits and Best Practices

- Respect rate limits (debounce user input; paginate results)
- Request only necessary data via `info` parameter
- Validate filters and sanitize inputs
- Cache results where practical (client-side or server-side)
- Keep API keys in environment variables and out of source control

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
