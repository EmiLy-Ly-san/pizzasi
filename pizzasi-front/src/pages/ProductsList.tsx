import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json";
import type { ProductCategory } from "../data/products-mock";
import { useCart } from "../hook/useCart";

type FilterValue = ProductCategory | "tous";

type ProductJson = {
  sku: string;
  id: string;
  category: ProductCategory;
  name: string;
  subtitle: string;
  price: number;
  unit: string; // ex: "€/carton"
  image: string;
};

const filters: { label: string; value: FilterValue }[] = [
  { label: "Tous", value: "tous" },
  { label: "Frais", value: "frais" },
  { label: "Surgelé", value: "surgele" },
  { label: "Pizza", value: "pizza" },
  { label: "Fond", value: "fond" },
];



export default function ProductsList() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("tous");

  const products = data.products as ProductJson[];

  const filteredProducts = useMemo(() => {
    if (activeFilter === "tous") return products;
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter, products]);

  const { addItem } = useCart();

  return (
    <div className="pb-32 px-5 pt-6">
      <h1 className="text-[22px] font-semibold text-zinc-800">
        Liste des produits
      </h1>

      {/* Filters swipe */}
      <div className="mt-4 -mx-5 px-5">
        <div
          className="
            flex gap-2 overflow-x-auto pb-2 pr-10
            [scrollbar-width:none] [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm whitespace-nowrap ${activeFilter === f.value
                ? "bg-black text-white"
                : "bg-zinc-100 text-zinc-700"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {filteredProducts.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="flex flex-col rounded-2xl bg-zinc-100 p-4"
          >
            {/* Image */}
            <div className="flex h-24 items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-20 object-contain"
              />
            </div>

            {/* Title */}
            <div className="mt-3 min-h-10 text-sm font-semibold leading-tight text-zinc-800">
              {p.name}
            </div>

            {/* Subtitle */}
            <div className="min-h-7 text-xs text-zinc-400">
              {p.subtitle}
            </div>

            {/* Bottom (price + cart) */}
            <div className="mt-auto flex items-end justify-between pt-4">
              <div className="text-zinc-800">
                <span className="text-lg font-semibold">{p.price}</span>{" "}
                <span className="text-xs text-zinc-400">{p.unit}</span>
              </div>

              <button
                type="button"
                className="
                  flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white
                  transition-transform duration-150 ease-out
                  hover:scale-[1.03] active:scale-95
                  hover:shadow-md
                "
                aria-label="Ajouter"
                onClick={(e) => {
                  e.preventDefault(); // reste sur la liste (ne navigue pas)
                  addItem({
                    id: p.id,
                    name: p.name,
                    sku: p.sku,
                    price: p.price,
                    quantity: 1,
                    image: p.image,
                    description: p.subtitle, // en attendant une vraie description
                  });
                }}>
                <img src="/icons/cart-icon.svg" alt="cart icon" className="h-6 w-6" />
              </button>
            </div>
          </Link>

        ))}
      </div>
    </div >
  );
}



