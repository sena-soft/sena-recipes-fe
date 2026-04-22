import { NavLink, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import { useMemo } from "react";
function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const headerClasses = `relative bg-slate-800 ${isHome ? "bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat" : ""}`;

  return (
    <header className={headerClasses}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src={Logo} alt="logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white text-lg font-bold" : "text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "text-white text-lg font-bold" : "text-gray-400"
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="mt-20 md:w-1/2 2xl:w-1/3 p-10 rounded-lg shadow space-y-6 bg-zinc-500">
            <div className="space-y-4">
              <label
                htmlFor="search"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Search for recipes
              </label>
              <input
                id="search"
                className="w-full bg-amber-50 rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Search for recipes..."
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="search"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full bg-amber-50 rounded-lg p-3 focus:outline-none"
              >
                <option value="">Select a category...</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white rounded-lg p-3 font-bold hover:bg-amber-600 transition-colors"
            >
              Search
            </button>
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
