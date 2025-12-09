"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhats() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5 right-5
        bg-[#25D366]
        text-white
        w-16 h-16
        rounded-full
        flex items-center justify-center
        text-4xl
        shadow-lg
        hover:scale-110
        hover:shadow-xl
        transition
        z-50
      "
    >
      <FaWhatsapp />
    </a>
  );
}
