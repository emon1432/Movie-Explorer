function Pagination({ page, totalPages, onPageChange }) {
  const canGoBack = page > 1;
  const canGoNext = page < totalPages;

  return (
    <nav className="pagination" aria-label="Pagination navigation">
      <button
        className="btn btn-outline-secondary btn-ghost"
        onClick={() => onPageChange(page - 1)}
        disabled={!canGoBack}
      >
        Previous
      </button>
      <p className="m-0 fw-semibold">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </p>
      <button
        className="btn btn-outline-secondary btn-ghost"
        onClick={() => onPageChange(page + 1)}
        disabled={!canGoNext}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;
