"use client";

export default function Location() {
  return (
    <section id="localizacao" className="px-6 lg:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "#075459" }}
          >
            Contato
          </h3>

          <p
            className="text-xl leading-relaxed mb-4"
            style={{ color: "#365462" }}
          >
            Atendemos em uma estrutura preparada para sua reabilitação com conforto e acessibilidade.
          </p>

          <div className="space-y-4 text-xl">
            <p style={{ color: "#365462" }}>
              <span className="font-semibold" style={{ color: "#075459" }}>Endereço:</span>  
              Rua … nº … – Centro
            </p>

            <p style={{ color: "#365462" }}>
              <span className="font-semibold" style={{ color: "#075459" }}>Atendimento:</span>  
              Segunda a Sexta, 08h - 19h
            </p>

            <p style={{ color: "#365462" }}>
              <span className="font-semibold" style={{ color: "#075459" }}>WhatsApp:</span>{" "}
              <a
                className="font-semibold hover:underline"
                href="https://wa.me/5500000000000"
                target="_blank"
                style={{ color: "#075459" }}
              >
                (00) 00000-0000
              </a>
            </p>
          </div>
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
