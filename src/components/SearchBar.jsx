export default function SearchBar({ placeholder = "Search Visa, Flights, Hotels" }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 sm:px-4 py-2 soft-shadow">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-full px-1.5 sm:px-2 py-2 outline-none text-sm sm:text-base"
        />
        <button className="rounded-full bg-slate-900 text-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium hover:bg-slate-800">
          Search
        </button>
      </div>
    </div>
  );
}


