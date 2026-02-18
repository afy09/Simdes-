import { NavLink } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "Bidan Desa",
    icon: "/images/logo/bidan.jpeg",
    description: "Layanan kesehatan ibu dan anak yang diberikan oleh bidan desa untuk memastikan kehamilan, persalinan, dan tumbuh kembang balita berjalan dengan optimal.",
  },
  {
    title: "Ambulan",
    icon: "/images/logo/ambulan.jpeg",
    description: "Layanan ambulans siaga untuk penanganan keadaan darurat medis dan rujukan pasien secara cepat, aman, dan profesional.",
  },
  {
    title: "Layanan Kesehatan",
    icon: "/images/logo/keluargawarja.jpeg",
    description: "Akses layanan kesehatan masyarakat meliputi pemeriksaan umum, konsultasi medis, serta pelayanan preventif dan promotif.",
  },
  {
    title: "Imunisasi Bayi",
    icon: "/images/logo/imunisasi.jpeg",
    description: "Program imunisasi rutin bagi bayi dan balita untuk meningkatkan kekebalan tubuh serta mencegah penyakit menular sejak dini.",
  },
  {
    title: "Kunjungan Rumah",
    icon: "/images/logo/pendidikan.jpeg",
    description: "Pelayanan kesehatan melalui kunjungan langsung ke rumah warga bagi pasien lansia, disabilitas, atau kondisi khusus.",
  },
  {
    title: "Laporan Warga",
    icon: "/images/logo/logostik.jpeg",
    description: "Fasilitas pengaduan dan laporan masyarakat terkait layanan publik, kesehatan, dan kondisi darurat di lingkungan sekitar.",
  },
  {
    title: "Lowongan Kerja",
    icon: "/images/logo/berkala.jpeg",
    description: "Informasi lowongan pekerjaan terbaru di wilayah Kota Dumai untuk membantu masyarakat memperoleh kesempatan kerja.",
  },
  {
    title: "Beasiswa & Pendidikan",
    icon: "/images/logo/kunjungan.jpeg",
    description: "Informasi program beasiswa dan bantuan pendidikan bagi pelajar dan mahasiswa untuk mendukung peningkatan kualitas sumber daya manusia.",
  },
];

const HeroDumai = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="relative overflow-hidden bg-[#f7f5fa] -mt-2">
      {/* BACKGROUND GEDUNG */}
      <img src="/images/gedung.png" className="absolute bottom-0 left-0 w-full h-[700px] pointer-events-none" alt="" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 max-sm:pt-5 max-sm:pb-32 md:py-20">
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl md:text-6xl">
            <span className="text-green-700">Simdes</span> <span className="text-amber-500">Meranti</span>
          </h1>

          <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg">Sistem Informasi Manajemen Desa Kepulauan Meranti</p>
        </div>

        {/* CARDS */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {services.map((item, idx) => (
              <button key={item.title} onClick={() => setSelectedService(item)} className={` bg-[#f7f7ef] rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition text-center cursor-pointer focus:outline-none`}>
                <div className="flex justify-center mb-3">
                  <img src={item.icon} alt="" className="w-14 h-14 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain" />
                </div>

                <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-tight">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>

            <div className="text-center">
              <img src={selectedService.icon} alt="" className="w-16 h-12 mx-auto mb-4" />

              <h3 className="text-lg font-semibold text-gray-800">{selectedService.title}</h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{selectedService.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroDumai;
