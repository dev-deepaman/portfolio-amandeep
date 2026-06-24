import { FaMoon, FaSun } from "react-icons/fa";

function ThemeSwitcher({ darkMode, setDarkMode }) {
  return (
    <div className="theme-switcher">
      <button
        className={`theme-switcher-button`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <>
            <FaSun />
            <span>Light</span>
          </>
        ) : (
          <>
            <FaMoon />
            <span>Dark</span>
          </>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
