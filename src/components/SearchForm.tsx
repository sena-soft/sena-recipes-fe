import { useAppStore } from "../stores/useAppStore";

type SearchFormProps = {
  searchFilters: {
    query: string;
    category: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

function SearchForm({ searchFilters, onChange, onSubmit }: SearchFormProps) {
  const { categories } = useAppStore((state) => state.categories);

  return (
    <form className="mt-20 md:w-1/2 2xl:w-1/3 p-10 rounded-lg shadow space-y-6 bg-zinc-500" onSubmit={onSubmit}>
      <div className="space-y-4">
        <label
                htmlFor="query"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Search for recipes
              </label>
              <input
                id="query"
                className="w-full bg-amber-50 rounded-lg p-3 focus:outline-none"
                type="text"
                name="query"
                value={searchFilters.query}
                onChange={onChange}
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
                name="category"
                value={searchFilters.category}
                onChange={onChange}
              >
                <option value="">Select a category...</option>
                {categories.map((category) => (
                  <option key={category.idCategory} value={category.idCategory}>
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white rounded-lg p-3 font-bold hover:bg-amber-600 transition-colors"
            >
              Search
            </button>
          </form>
  );
}

export default SearchForm;
