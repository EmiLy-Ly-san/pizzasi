export default function SubscriptionCard() {
  return (
    <section className="px-5 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[18px]  text-zinc-700">
          Mes abonnements
        </h3>
        <button className="flex items-center gap-2 text-xs text-zinc-400">
          Gérer
          <img src="/icons/arrow-right.svg" alt="" className="h-4 w-4 opacity-70" />
        </button>
      </div>

      {/* Card */}
      <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Actif
          </div>
          <span className="text-zinc-400 text-xl leading-none">›</span>
        </div>

        <div className="mt-4 flex items-start gap-4">
          <img
            src="/images/pizza2.svg"
            alt="Pizza"
            className="h-16 w-16 rounded-xl object-cover"
          />

          <div className="flex-1">
            <div className="text-[16px]  text-zinc-700">
              Abonnement Pizza
            </div>
            <div className="text-xs text-zinc-400">Tous les lundis • 19h00</div>

            <span className="mt-2 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-400">
              2x Pizza Margherita - BE003
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-[#EEF5E7] px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
              <img src="/icons/calendar.svg" alt="" className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[15px]  text-zinc-700">
                Prochaine livraison
              </div>
              <div className="text-xs text-zinc-400">
                Lundi 9 Décembre • 19h00
              </div>
            </div>
          </div>

          <div className="text-[16px]  text-zinc-700">€54.00</div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-1 rounded-xl bg-zinc-100 px-3 py-2 text-[12px] font-medium text-zinc-700 ">
            <img src="/icons/stop.svg" alt="pause icon" />
            Mettre en pause
          </button>

          <button className="rounded-xl bg-[#59656C] py-2 text-[12px] text-white">
            Modifier
          </button>
        </div>
      </div>
    </section>
  );
}
