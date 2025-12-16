import { useState } from "react";
import ProductCardPlaceholder from "../components/ProductCardPlaceholder";
import { productsMock, type ProductCategory } from "../data/products-mock";


const filters: { label: string; value: ProductCategory }[] = [
  { label: "Tous", value: "tous" },
  { label: "Frais", value: "frais" },
  { label: "Surgelé", value: "surgele" },
  { label: "Pizza", value: "pizza" },
];

export default function ProductsList() {
  const [activeFilter, setActiveFilter] =
    useState<ProductCategory>("tous");

  const filteredProducts =
    activeFilter === "tous"
      ? productsMock
      : productsMock.filter(
        (p) => p.category === activeFilter
      );

  return (
    <div className="pb-28 px-5 pt-6">
      <h1 className="text-[22px] font-semibold text-zinc-800">
        Liste des produits
      </h1>

      {/* Search (fake)
      <div className="mt-4 flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-3 text-sm text-zinc-400">
        <img src="/icons/search.svg" alt="search" />
        Rechercher
      </div> */}

      {/* Filters */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${activeFilter === f.value
              ? "bg-black text-white"
              : "bg-zinc-100 text-zinc-600"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {filteredProducts.map((p) => (
          <ProductCardPlaceholder key={p.id} />
        ))}
      </div>
    </div>
  );
}
