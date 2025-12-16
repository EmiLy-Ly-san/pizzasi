export default function Product() {
  // ⛔ Fake data pour l’instant (remplaçable plus tard par JSON / route param)
  const product = {
    sku: "BE002",
    name: "Truffe et champignons",
    size: "28 cm",
    type: "Végétarien",
    description:
      "Crème, mozzarella, champignons frais, éclats de truffe, parmesan",
    price: 120,
    image: "/images/pizza-truffe.png", // a changer
    packaging: [
      "Emballée individuellement",
      "9 pièces par carton",
      "72 cartons par palette",
    ],
    quantity: 4,
  };

  return (
    <div className="pb-28">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto mt-6 h-72 w-72 rounded-full object-cover"
        />

        {/* Back */}
        <button className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          ←
        </button>

        {/* Favorite */}
        <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 px-5 mb-4">
        <div className="text-xs text-zinc-400">{product.sku}</div>

        <h1 className="mt-1 text-[22px] font-semibold text-zinc-800">
          {product.name}
        </h1>

        {/* Tags */}
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500">
            ⌀ {product.size}
          </span>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
            🌿 {product.type}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-zinc-500">
          {product.description}
        </p>

        {/* Packaging */}
        <div className="mt-6">
          <h3 className="text-[16px] font-semibold text-zinc-700">
            Description d’emballage
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-zinc-500">
            {product.packaging.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* Price + quantity */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-400">Prix total</div>
            <div className="text-[22px] font-semibold text-zinc-800">
              {product.price}€
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-100 px-3 py-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow">
              −
            </button>

            <span className="text-sm font-medium">{product.quantity}</span>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-lg text-white shadow">
              +
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-[90%] max-w-md m-auto">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#18181b]  text-white text-[15px] font-medium">
          <img src="/icons/cart-icon.svg" alt="cart icon" className="h-10 w-10" />
          Ajouter
        </button>
      </div>
    </div>
  );
}

