export default function OrderTrackingCard() {
  return (
    <section className="px-5 mt-8">
      {/* Header ligne */}
      <div className="flex items-center justify-between">
        <h3 className="text-[16px]text-zinc-700">Suivi de commandes</h3>
        <button className="flex items-center gap-2 text-sm text-zinc-400">
          Gérer
          <img src="/icons/arrow-right.svg" alt="" className="h-4 w-4 opacity-70" />
        </button>
      </div>

      {/* Card */}
      <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
        {/* Status + order id */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,237,212,0.7)] px-4 py-2 text-xs text-[#FF6900] font-medium">
            <span className="h-2 w-2 rounded-full  bg-[#FF6900]" />
            En cours de livraison
          </span>
          <span className="text-xs text-zinc-400">#12345</span>
        </div>

        {/* Item row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/pizza2.svg"
              alt="Pizza"
              className="h-16 w-16 rounded-xl object-cover"
            />

            <div>
              <div className="text-[16px] text-zinc-700">
                Pizza Diavola x2
              </div>
              <div className="text-xs text-zinc-400">+ 1 autre article</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-zinc-400">Total</div>
            <div className="text-[18px] text-zinc-700">€54.00</div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-zinc-100" />

        {/* Delivery info */}
        <div className="text-xs font-medium text-zinc-400">
          Informations de livraison
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* Courier */}
          <div className="flex items-center gap-3">
            <img src="/images/miko.svg" alt="Miko" className="h-11 w-11" />
            <div>
              <div className="text-[15px] text-zinc-700">Miko</div>
              <div className="text-xs text-zinc-400">Livreur</div>
            </div>
          </div>

          {/* Call button */}
          <button
            aria-label="Appeler"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100"
          >
            <img src="/icons/phone.svg" alt="" className="h-5 w-5" />
          </button>
        </div>

        {/* Arrived block */}
        <div className="mt-5 rounded-xl bg-zinc-50 p-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFEDD4] opacity-70">
            <img src="/icons/clock.svg" alt="" className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[15px] text-zinc-700">
              Arrivée estimée
            </div>
            <div className="text-xs text-zinc-400">Demain</div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-6 w-full rounded-xl bg-[#4D6269] py-3 text-white flex items-center justify-center gap-2 text-[15px]">
          <img src="/icons/position.svg" alt="" className="h-5 w-5" />
          Suivre la livraison
        </button>
      </div>
    </section>
  );
}
