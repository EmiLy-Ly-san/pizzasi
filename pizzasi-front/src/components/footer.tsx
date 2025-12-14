import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2">
      <div className="relative rounded-full bg-zinc-900 p-1 shadow-lg">
        <div className="flex items-center justify-between">
          {/* HOME */}
          <NavLink to="/dashboard" end>
            {({ isActive }) => (
              <img
                src={
                  isActive
                    ? "/icons/home.svg"
                    : "/icons/home-active.svg"
                }
                alt="Home"
              />
            )}
          </NavLink>

          <button aria-label="Panier">
            <img src="/icons/cart-icon.svg" alt="cart" />
          </button>

          <button aria-label="Profil">
            <img src="/icons/profil-icon.svg" alt="cart" />
          </button>

          <button
            aria-label="Menu"
          >
            <img src="/icons/menu-icon.svg" alt="menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}
