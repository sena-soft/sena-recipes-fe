import { NavLink, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "../stores/useAppStore";
import SearchForm from "./SearchForm";
function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const [searchFilters, setSearchFilters] = useState({
    query: "",
    category: "",
  });
  const headerClasses = `relative bg-slate-800 ${isHome ? "bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat" : ""}`;
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const meals = useAppStore((state) => state.meals);
  console.log(meals);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => 
    setSearchFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(searchFilters).includes("")) {
      console.error("Please fill in all fields");
      return;
    }
    searchRecipes(searchFilters);
  }

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
          <SearchForm searchFilters={searchFilters} onChange={handleChange} onSubmit={handleSubmit} />
        )}
      </div>
    </header>
  );
}

export default Header;
