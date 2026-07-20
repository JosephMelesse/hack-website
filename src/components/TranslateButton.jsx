// TRANSLATE BUTTON - Tasfia
// English/Spanish toggle. State lives in App; this only renders and fires onToggle.
function TranslateButton({ spanish, onToggle, label }) {
  return (
    <button
      type="button"
      className="translate-btn"
      onClick={onToggle}
      lang={spanish ? "en" : "es"}
      aria-pressed={spanish}
    >
      {label}
    </button>
  );
}
export default TranslateButton;
