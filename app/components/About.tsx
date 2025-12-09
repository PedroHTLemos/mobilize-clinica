export default function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#075459" }}
          >
            Sobre a Mobilize
          </h2>

          <p
            className="mt-6 text-xl leading-relaxed text-justify"
            style={{ color: "#365462" }}
          >
            A Mobilize é uma clínica especializada em fisioterapia ortopédica
            com foco em reabilitação funcional e alívio da dor.
            Nosso atendimento é individualizado, baseado em evidências científicas,
            e voltado para restaurar mobilidade, força e qualidade de vida.
          </p>

          <p
            className="mt-4 text-xl leading-relaxed text-justify"
            style={{ color: "#365462" }}
          >
            Trabalhamos com avaliação detalhada, planejamento objetivo
            e protocolo terapêutico personalizado para cada caso.
            Acreditamos que cada movimento conta — e nossa missão é fazer você voltar a se mover com segurança.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/avaliacao-postura.jpg"
            alt="Avaliação de Postura"
            className="w-full h-[380px] object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
