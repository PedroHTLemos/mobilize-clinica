"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "A fisioterapia dói?",
    answer:
      "Dependendo do caso, pode haver leve desconforto no início. Nosso foco é aliviar a dor e restaurar os movimentos com segurança.",
  },
  {
    question: "Quantas sessões eu preciso?",
    answer:
      "Depende da avaliação. Alguns casos exigem poucas sessões, outros requerem acompanhamento contínuo.",
  },
  {
    question: "Preciso de pedido médico?",
    answer:
      "Não. Você pode agendar diretamente conosco, mas aceitamos pedidos médicos quando houver.",
  },
  {
    question: "Quanto tempo dura a sessão?",
    answer:
      "Normalmente entre 45 e 60 minutos, dependendo da necessidade do paciente.",
  },
  {
    question: "Vocês atendem pós-operatório?",
    answer:
      "Sim, temos protocolos específicos para cirurgias ortopédicas, garantindo recuperação segura.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-6 lg:px-20 py-10 bg-[#F5FAFA]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center">
          <img
            src="/images/exercicio-1.jpg"
            alt="Exercício fisioterapêutico"
            className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-12" style={{ color: "#075459" }}>
            Perguntas Frequentes
          </h3>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full px-6 py-4
                  text-left text-[#365462] font-semibold"
                >
                  {item.question}
                  <span className="text-[#075459] font-bold text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 text-[#365462] text-justify">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
