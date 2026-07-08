function ProgressBar({ value, color = "#6366f1", height = 6 }) {
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height, background: "#1e293b" }}>
      <div
        className="h-full rounded-full"
        style={{ width: `${value}%`, background: color, transition: "width 1s ease" }}
      />
    </div>
  );
}
export default ProgressBar;