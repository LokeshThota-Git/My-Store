import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  const navigate = useNavigate();
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`px-6 py-4 flex justify-between items-center shadow-md ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h1
        onClick={() => navigate("/")}
        className="text-xl cursor-pointer font-bold text-indigo-600"
      >
        FakeStore
      </h1>

      <div className="flex items-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-500 font-semibold" : "text-gray-500"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-indigo-500 font-semibold" : "text-gray-500"
          }
        >
          Products
        </NavLink>

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="border px-3 py-1 rounded text-sm hover:bg-indigo-500 hover:text-white transition"
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
