# Movie Explorer

A modern movie discovery app built with React + Vite and powered by the OMDb API.

## What Is Included

- Beautiful, responsive redesign with custom typography and cinematic visual style.
- Smart search with OMDb-supported filters:
	- title (`s`)
	- type (`movie`, `series`, `episode`)
	- year (`y`)
	- pagination (`page`, up to 100)
- Detailed movie pages using OMDb ID lookup (`i`) with full plot (`plot=full`).
- Persistent watchlist using local storage.
- Structured feature-based folder architecture for easier scaling.

## OMDb API Notes

The app uses these OMDb endpoints and parameters:

- Search: `https://www.omdbapi.com/?apikey=KEY&s=title&type=movie|series|episode&y=year&page=1`
- Detail: `https://www.omdbapi.com/?apikey=KEY&i=tt1234567&plot=full`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env
```

3. Add your OMDb API key in `.env`:

```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

4. Start development server:

```bash
npm run dev
```

## Project Structure

```text
src/
	app/
		App.jsx
	components/
		layout/
			Navbar.jsx
		ui/
			EmptyState.jsx
			LoadingState.jsx
	context/
		WatchlistContext.jsx
	features/
		movies/
			components/
				MovieCard.jsx
				MovieGrid.jsx
				Pagination.jsx
				SearchPanel.jsx
			hooks/
				useMovieSearch.js
	hooks/
		useLocalStorage.js
	pages/
		Home.jsx
		MovieDetail.jsx
		Watchlist.jsx
	services/
		omdb.js
	styles/
		globals.css
	utils/
		formatters.js
	App.jsx
	main.jsx
```

## Scripts

- `npm run dev`: Start Vite development server.
- `npm run build`: Build production bundle.
- `npm run preview`: Preview production build.
- `npm run lint`: Run ESLint.
