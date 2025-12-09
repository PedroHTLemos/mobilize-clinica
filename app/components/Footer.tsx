import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#075459] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-xl font-semibold mb-4">Mobilize</h3>
          <p className="text-sm opacity-80">
            Fisioterapia especializada em reabilitação funcional e prevenção.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <p className="text-sm opacity-80">WhatsApp: (47) 99999-9999</p>
          <p className="text-sm opacity-80">Email: contato@mobilize.com</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Localização</h3>
          <p className="text-sm opacity-80">
            Rua Tal, 123 — Centro, Blumenau/SC
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>

          <div className="flex gap-4 text-3xl">
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center opacity-80 text-sm">
        © 2025 Mobilize Fisioterapia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
