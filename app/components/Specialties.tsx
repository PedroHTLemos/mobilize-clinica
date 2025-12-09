export default function Especialidades() {
  const items = [
    {
      title: "Dor Lombar / Lombalgia",
      desc: "Tratamento da dor na região lombar com foco em mobilidade, estabilidade e função.",
    },
    {
      title: "Hérnia de Disco",
      desc: "Protocolo conservador e progressivo para redução de dor e restauração funcional.",
    },
    {
      title: "Dor Cervical",
      desc: "Reabilitação da cervical com técnicas específicas que aliviam tensão e rigidez.",
    },
    {
      title: "Reabilitação Pós-Cirúrgica",
      desc: "Planejamento individual para retorno seguro ao movimento após cirurgias ortopédicas.",
    },
    {
      title: "Lesões Esportivas",
      desc: "Tratamento de entorses, tendinites e sobrecargas, com foco em retorno ao esporte.",
    },
    {
      title: "ATM (Mandíbula)",
      desc: "Tratamento funcional da articulação temporomandibular para dor e disfunção.",
    },
    {
      title: "Ombro e Manguito Rotador",
      desc: "Reabilitação de bursite, tendinite e limitações no ombro.",
    },
    {
      title: "Joelho e Ligamentos",
      desc: "Avaliação e reabilitação de dor e instabilidade no joelho.",
    },
  ];

  return (
    <section id="especialidades" className="px-6 lg:px-20 py-15 bg-[#e8f1f0]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-extrabold text-[#075459]">
          Especialidades
        </h2>

        <p className="max-w-3xl mx-auto mt-3 text-[#365462] text-lg">
          Tratamentos baseados em evidências, com foco em reabilitar o movimento, reduzir dor e devolver qualidade de vida.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-left border border-[#07545933]
                         shadow-sm hover:shadow-md hover:border-[#075459] transition"
            >
              <h3 className="text-xl font-semibold text-[#075459]">
                {item.title}
              </h3>
              <p className="mt-2 text-[#365462] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
