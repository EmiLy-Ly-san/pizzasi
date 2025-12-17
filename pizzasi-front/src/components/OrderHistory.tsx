import data from "../data/orderHistory.json";

type OrderStatus = "delivered" | "cancelled";

type Order = {
  id: string;
  name: string;
  date: string;
  status: OrderStatus;
  total: number;
  image: string;
  canReorder: boolean;
};

function formatEuro(value: number) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

function StatusPill({ status }: { status: OrderStatus }) {
  if (status === "delivered") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-200">
          ✓
        </span>
        Livrée
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs text-red-700">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-200">
        ×
      </span>
      Annulée
    </span>
  );
}

export default function OrderHistory() {
  const orders = data.orders as Order[];

  return (
    <section className="px-5 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] text-zinc-700">{data.title}</h3>

        <button className="flex items-center gap-2 text-xs text-zinc-400">
          {data.actionLabel}
          <img
            src="/icons/arrow-right.svg"
            alt=""
            className="h-4 w-4 opacity-70"
          />
        </button>
      </div>

      {/* List */}
      <div className="mt-4 space-y-4">
        {orders.map((o) => (
          <div
            key={o.id}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xs"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={o.image}
                  alt={o.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />

                <div>
                  <div className="text-[14px] text-zinc-700">{o.name}</div>
                  <div className="mt-1 text-xs text-zinc-400">{o.date}</div>
                  <div className="mt-2">
                    <StatusPill status={o.status} />
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-zinc-300">#{o.id}</div>
                <div className="mt-6 text-[14px] text-zinc-700">
                  {formatEuro(o.total)}
                </div>
              </div>
            </div>

            {/* Reorder button */}
            {o.canReorder && (
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D2D3D5] py-2 text-[12px] text-zinc-600
           transition-transform duration-150 active:scale-95"
              >
                <img src="/icons/reload.svg" alt="reorder" />
                Commander à nouveau
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}