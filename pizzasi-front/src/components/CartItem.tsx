type CartItem = {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  price: number;     // prix unitaire
  qty: number;
  image: string;     // "/images/....svg"
};

function formatEuro(value: number) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export default function CartItemRow({
  item,
  onMinus,
  onPlus,
}: {
  item: CartItem;
  onMinus: () => void;
  onPlus: () => void;
}) {
  return (
    <div className="rounded-2xl bg-[#F5F6F8] px-4 py-3">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-12 w-12 object-contain"
        />

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-900">
            {item.subtitle ?? item.name}
          </div>

          {item.description ? (
            <div className="mt-0.5 text-[9px] leading-snug text-zinc-400">
              {item.description}
            </div>
          ) : null}

          <div className="mt-2 text-[14px] font-semibold text-zinc-900">
            {formatEuro(item.price)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Diminuer"
            onClick={onMinus}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-zinc-600 shadow-sm"
          >
            −
          </button>

          <span className="w-4 text-center text-[12px] text-zinc-700">
            {item.qty}
          </span>

          <button
            aria-label="Augmenter"
            onClick={onPlus}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white shadow-sm"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
