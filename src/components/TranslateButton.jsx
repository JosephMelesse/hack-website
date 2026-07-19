// TRANSLATE BUTTON - Tasfia
// English/Spanish toggle stub. Do not implement translation logic here yet.
import data from "../data.json";
 



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
