// src/pages/Cart.tsx
import { useCart } from "../hook/useCart";

function formatMoney(v: number) {
  return v.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Cart() {
  const { items, increase, decrease } = useCart();
  if (items.length === 0) {
    return (
      <div className="px-5 pt-4 pb-32">
        <h1 className="mt-2 text-[18px] font-medium text-zinc-700">Mon panier</h1>

        <div className="mt-10 rounded-2xl bg-zinc-50 p-6 text-center">
          <div className="text-[14px] font-medium text-zinc-700">
            Vous n’avez rien dans votre panier
          </div>
          <div className="mt-2 text-xs text-zinc-400">
            Ajoutez des produits depuis la liste ou une fiche produit.
          </div>
        </div>
      </div>
    );
  }

  const discount = 8.99;
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="px-5 pt-4 pb-32">
        <h1 className="mt-2 text-[18px] font-medium text-zinc-700">Mon panier</h1>

        <div className="mt-10 rounded-2xl bg-[#F6F8FA] p-6 text-center">
          <div className="text-[14px] text-zinc-700">Vous n’avez rien dans votre panier</div>
          <div className="mt-2 text-[12px] text-zinc-400">
            Ajoutez des produits depuis la liste ou une fiche produit.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pt-4 pb-32">
      <h1 className="mt-2 text-[18px] font-medium text-zinc-700">Mon panier</h1>

      {/* Items */}
      <div className="mt-5 space-y-4">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex items-center justify-between gap-4 rounded-xl bg-[#F6F8FA] px-4 py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={it.image ?? "/images/pizza1.svg"}
                alt={it.name}
                className="h-14 w-14 rounded-xl object-contain"
              />

              <div className="leading-tight">
                <div className="text-[10px] text-zinc-700">
                  {it.name} {it.sku ? `- €{it.sku}` : ""}
                </div>
                <div className="mt-1 max-w-[180px] text-[8px] text-zinc-400">
                  {it.description ?? "Description à remplir plus tard"}
                </div>
                <div className="mt-2 text-[20px] text-zinc-700">
                  {formatMoney(it.price)}€
                </div>
              </div>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Diminuer"
                onClick={() => decrease(it.id)}
                className="
                  flex h-7 w-7 items-center justify-center rounded-full
                  bg-white text-zinc-700 shadow-sm
                  transition-transform duration-150
                  active:scale-90 active:shadow-none
                "

              >
                –
              </button>

              <span className="w-3 text-center text-[12px] text-zinc-700">
                {it.quantity}
              </span>

              <button
                aria-label="Augmenter"
                onClick={() => increase(it.id)}
                className="
                flex h-7 w-7 items-center justify-center rounded-full
                bg-zinc-900 text-white
                transition-transform duration-150
                active:scale-90
              "
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom summary */}
      <div className="mt-16 space-y-5">
        <div className="flex items-center justify-between text-[10px] text-zinc-400">
          <span>Votre réduction</span>
          <span className="text-[16px] text-zinc-700">{formatMoney(discount)}€</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] text-zinc-400">Prix total</div>
            <div className="text-[20px] text-zinc-700">{formatMoney(total)}€</div>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-[#1A1A1A] px-8 py-3 text-[12px] text-white">
            <img src="/icons/mdi_cart-outline.svg" alt="cart" />
            Commander
          </button>
        </div>
      </div>
    </div >
  );
}

