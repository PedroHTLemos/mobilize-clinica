export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/images/clinica-mobilize.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="relative flex flex-col items-center justify-center max-w-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Movimento, Conforto e Qualidade de Vida
        </h1>

        <p className="mt-6 text-lg md:text-2xl font-medium drop-shadow">
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
