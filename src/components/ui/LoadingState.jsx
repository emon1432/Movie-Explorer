function LoadingState({ message = "Loading titles..." }) {
  return (
    <div className="state-card" role="status" aria-live="polite">
      <div className="loading-spinner" />
      <p>{message}</p>
    </div>
  );
}

export default LoadingState;
