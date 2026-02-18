import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`relative w-full text-white ${className || ""}`}
      style={{
        backgroundImage: "url('/images/gedung.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/85" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          {/* Logo */}
          <div className="bg-white rounded-3xl py-3 px-4 flex items-center gap-2 shrink-0">
            <img src="/images/logo_dumai.png" alt="Logo Dumai" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
            <div>
              <h3 className="font-semibold text-green-900 text-2xl md:text-3xl leading-tight">Dumai</h3>
              <div className="text-orange-400 text-lg md:text-xl -mt-1">Berkhitmad</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg xl:text-2xl text-gray-200 leading-relaxed text-center md:text-left">Dumai Berkhitmad adalah Portal Pemerintah Kota Dumai terkait layanan dan informasi kepada semua masyarakat di Kota Dumai</p>
        </div>

        {/* Info Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-6 md:gap-10 xl:gap-16">
          {/* Alamat */}
          <div className="flex items-start gap-3 max-w-sm">
            <div className="bg-orange-500 p-3 rounded-full shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div className="text-sm text-gray-200 leading-relaxed">
              <p className="font-semibold text-white mb-1">ALAMAT</p>
              Jl. Jendral Sudirman No.01,
              <br />
              Kel. Bagan Besar Barat,
              <br />
              Dumai, Riau, 28826, Indonesia
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="bg-orange-500 p-3 rounded-full shrink-0">
              <FaEnvelope />
            </div>
            <div className="text-sm text-gray-200">
              <p className="font-semibold text-white mb-1">EMAIL</p>
              diskominfo@dumai.go.id
            </div>
          </div>

          {/* Kontak */}
          <div className="flex items-start gap-3 max-w-sm">
            <div className="bg-orange-500 p-3 rounded-full shrink-0">
              <FaPhoneAlt />
            </div>
            <div className="text-sm text-gray-200 leading-relaxed">
              <p className="font-semibold text-white mb-1">KONTAK DARURAT</p>
              Layanan Kependadaruratan Media: 119 <br />
              Layanan Nomor Panggilan Darurat: 112 <br />
              Kantor UPTD PAL: 0800 8236 <br />
              Dumai Citizen Support: 0812 2983 223
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/30 text-center py-3 text-xs md:text-sm bg-emerald-950/80">Copyright © 2026 Dumai Berkhitmad. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
