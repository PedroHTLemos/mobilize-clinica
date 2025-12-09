export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[1025px] flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('/images/clinica-mobilize.png')",
        backgroundSize: "cover",
        backgroundPosition: "center -550px",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative max-w-3xl mx-auto text-white">
        <h1 className="text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
          Movimento, Conforto e Qualidade de Vida
        </h1>

        <p className="mt-6 text-xl lg:text-2xl font-medium drop-shadow">
          Tratamento personalizado com resultados reais e mensuráveis.
        </p>

        <button
          className="mt-10 bg-[#075459] text-white px-10 py-4 rounded-full text-lg
                     hover:bg-[#043a3c] hover:scale-105 transition shadow-lg"
        >
          Agendar Avaliação
        </button>
      </div>
    </section>
  );
}
