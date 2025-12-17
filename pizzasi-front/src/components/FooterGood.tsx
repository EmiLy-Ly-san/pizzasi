import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="fixed bottom-6 left-[190px] z-50 w-[85%] max-w-md -translate-x-1/2">
      <div className="relative rounded-full bg-zinc-900 p-1 shadow-lg">
        <div className="flex items-center justify-between">

          <NavLink to="/" end>
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

          <NavLink to="/cart" end>
            {({ isActive }) => (
              <img
                src={
                  isActive
                    ? "/icons/cart-icon.svg"
                    : "/icons/cart-icon.svg"
                }
                alt="cart"
              />
            )}
          </NavLink>

          <NavLink to="/dashboard" end>
            {({ isActive }) => (
              <img
                src={
                  isActive
                    ? "/icons/profil-icon.svg"
                    : "/icons/profil-icon.svg"
                }
                alt="profil"
              />
            )}
          </NavLink>
          <NavLink to="/products" end>
            {({ isActive }) => (
              <img
                src={
                  isActive
                    ? "/icons/menu-icon.svg"
                    : "/icons/menu-icon.svg"
                }
                alt="liste des produits"
              />
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
