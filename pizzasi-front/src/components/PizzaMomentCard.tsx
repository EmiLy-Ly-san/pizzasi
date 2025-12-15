export default function PizzaOfTheMomentCard() {
  return (
    <section className="px-5 mt-6">
      {/* Card */}
      <div className=" relative overflow-hidden rounded-xl bg-[#ad252e] px-5 py-6">
        {/* Text */}
        <div className=" max-w-[65%]">
          <h2 className="text-l text-white">
            Avez-vous vu
            <br />
            notre offre du moment ?
          </h2>

          <p className="mt-2 text-xs text-white/80">
            Proposez votre recette et
            <br />
            devenez la Pizza du Trimestre !
          </p>

          <button className="mt-4 inline-flex items-center rounded-full bg-white w-[153] h-[38] py-2 px-4 text-xs text-[#ad252e]">
            En savoir plus
          </button>
        </div>
        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/90" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </div>
      <img
        src="/images/pizza1.svg"
        alt="Pizza du moment"
        className="absolute -right-4 top-[280px] h-32 w-48 -translate-y-1/2 rotate-6 "
      />
    </section >
  );
}