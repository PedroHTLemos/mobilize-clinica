"use client";

export default function Differentials() {
  const items = [
    "Atendimento humanizado",
    "Equipe multidisciplinar",
    "Estrutura moderna",
    "Alta tecnologia em diagnóstico",
    "Protocolos personalizados",
    "Resultados mensuráveis",
  ];

  return (
    <section
      id="diferenciais"
      className="px-6 lg:px-20 py-10 bg-[#E4F1F0]"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <h3 className="text-3xl font-bold text-[#075459] mb-12">
          Por que escolher a Mobilize?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border border-[#07545933] rounded-xl p-6
                         bg-white text-[#365462] font-medium shadow-sm
                         hover:shadow-md hover:border-[#075459] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#075459"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" />
                <circle cx="12" cy="12" r="9" />
              </svg>

              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
