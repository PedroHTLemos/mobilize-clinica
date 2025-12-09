export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold" style={{ color: "#075459" }}>
          Mobilize
        </h2>

        {/* Menu */}
        <nav className="flex gap-6 text-[#222]">
          <a href="#inicio" className="hover:text-[#075459] transition">Início</a>
          <a href="#sobre" className="hover:text-[#075459] transition">Sobre</a>
          <a href="#especialidades" className="hover:text-[#075459] transition">Especialidades</a>
          <a href="#localizacao" className="hover:text-[#075459] transition">Contato</a>
        </nav>
      </div>
    </header>
  );
}
