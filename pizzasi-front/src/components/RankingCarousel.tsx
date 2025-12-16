type RankingCard = {
  id: string;
  title: string;
  badge: string; // ex: "#3"
  percent: number; // 0-100
  subtitle: string; // ex: "3ème sur 40"
  location: string; // ex: "Pays de la Loire"
  tone: "green" | "dark";
};

const CARDS: RankingCard[] = [
  {
    id: "pizzeria",
    title: "Votre pizzeria",
    badge: "#3",
    percent: 75,
    subtitle: "3ème sur 40",
    location: "Pays de la Loire",
    tone: "green",
  },
  {
    id: "region",
    title: "Votre région",
    badge: "#1",
    percent: 95,
    subtitle: "1ère région",
    location: "France",
    tone: "dark",
  },
];

function toneClasses(tone: RankingCard["tone"]) {
  if (tone === "green") {
    return {
      card: "bg-[#8FBE6E] text-white",
      badge: "bg-white/20 text-white",
      track: "bg-white/25",
      bar: "bg-white",
      small: "text-white/90",
      tiny: "text-white/80",
    };
  }
  return {
    card: "bg-[#56656C] text-white",
    badge: "bg-white/20 text-white",
    track: "bg-white/25",
    bar: "bg-white",
    small: "text-white/90",
    tiny: "text-white/80",
  };
}

function Progress({ value, track, bar }: { value: number; track: string; bar: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={`h-2 w-full rounded-full ${track}`}>
      <div className={`h-2 rounded-full ${bar}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function RankingsCarousel() {
  return (
    <section className="mt-8">
      <div className="px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
            <span className="text-xl">🏆</span>
          </div>
          <h3 className="text-[18px] font-semibold text-zinc-900">Classements</h3>
        </div>

        <div className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-500">
          Décembre 2025
        </div>
      </div>

      <div className="mt-4 px-5">
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CARDS.map((c) => {
            const t = toneClasses(c.tone);
            return (
              <article
                key={c.id}
                className={`min-w-[260px] flex-1 rounded-[22px] p-5 ${t.card}`}
              >
                {/* top row */}
                <div className="flex items-center justify-between">
                  <div className={`text-sm ${t.small}`}>{c.title}</div>
                  <div className={`rounded-full px-3 py-1 text-sm ${t.badge}`}>
                    {c.badge}
                  </div>
                </div>

                {/* percent */}
                <div className="mt-6 text-[44px] leading-none font-semibold">
                  {c.percent}%
                </div>

                {/* subtitle + progress */}
                <div className={`mt-4 text-sm ${t.small}`}>{c.subtitle}</div>
                <div className="mt-2">
                  <Progress value={c.percent} track={t.track} bar={t.bar} />
                </div>

                {/* location */}
                <div className={`mt-4 text-sm ${t.tiny}`}>{c.location}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
