"use client";

export default function Contact() {
  return (
    <section id="contato" className="px-6 lg:px-20 py-24 bg-[#f7fafb]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          <h3 className="text-3xl font-bold mb-6" style={{ color: "#075459" }}>
            Entre em Contato
          </h3>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#365462" }}>
            Temos atendimento rápido e humanizado.  
            Tire dúvidas, agende uma avaliação ou envie seu caso.
          </p>

          <div className="space-y-4 text-lg">
            <p><strong>WhatsApp:</strong> (00) 00000-0000</p>
            <p><strong>E-mail:</strong> contato@mobilize.com.br</p>
            <p><strong>Horário:</strong> Seg - Sex • 08h às 19h</p>
          </div>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="inline-block mt-8 bg-[#075459] text-white px-10 py-4 rounded-full
                       hover:bg-[#043a3c] hover:scale-105 transition shadow-lg text-lg"
          >
            Chamar no WhatsApp
          </a>
        </div>
        <div className="rounded-xl shadow overflow-hidden h-[350px] border">
          <iframe
            src="https://maps.google.com/maps?q=São%20Paulo&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
