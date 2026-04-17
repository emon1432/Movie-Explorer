import { useState } from "react";

function SearchPanel({ initialQuery, initialType, initialYear, onSubmit }) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState(initialType);
  const [year, setYear] = useState(initialYear);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      nextQuery: query.trim(),
      nextType: type,
      nextYear: year.trim(),
    });
  };

  const handleReset = () => {
    setQuery("Avengers");
    setType("");
    setYear("");
    onSubmit({
      nextQuery: "Avengers",
      nextType: "",
      nextYear: "",
    });
  };

  return (
    <section className="search-panel">
      <h1>Find Your Next Screen Obsession</h1>
      <p>
        Search across movies, series, and episodes using OMDb with rich filters
        and fast paging.
      </p>

      <form className="search-form row g-3" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6 col-lg-7">
          <label className="field-label" htmlFor="query">
            Title
          </label>
          <input
            id="query"
            className="field form-control"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Inception, Batman, The Office..."
            required
          />
        </div>

        <div className="col-6 col-md-3 col-lg-3">
          <label className="field-label" htmlFor="type">
            Type
          </label>
          <select
            id="type"
            className="field form-select"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>

        <div className="col-6 col-md-3 col-lg-2">
          <label className="field-label" htmlFor="year">
            Year
          </label>
          <input
            id="year"
            className="field form-control"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="2019"
            pattern="[0-9]{4}"
            title="Use a 4-digit year"
          />
        </div>

        <div className="action-row col-12">
          <button type="submit" className="btn btn-primary px-4">
            Search
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-ghost px-4"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchPanel;
