import { useRef } from "react";

function Search({ onSearch }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="Search for a movie..." />
      <button type="submit">Search 🔎</button>
    </form>
  );
}

export default Search;
