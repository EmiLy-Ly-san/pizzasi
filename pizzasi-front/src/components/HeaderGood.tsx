export default function Header() {
  return (
    <header className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/profil.svg"
            alt="Avatar"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="text-[15px] font-semibold text-zinc-900">
              Benvenuto <span className="ml-1">Angelo</span> !
            </p>
            <p className="text-xs text-zinc-500">Partenaire</p>
          </div>
        </div>

        <button
          aria-label="Notifications"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white"
        >
          <img src="/icons/bell.svg" alt="bell" className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>

      {/* Search bar */}
      <div className="mt-4">
        <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
          <img
            src="/icons/search.svg"
            alt="search"
            className="h-5 w-5 opacity-60"
          />
          <input
            type="text"
            placeholder="Rechercher une pizza, un ingrédient…"
            className="w-full bg-transparent text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
