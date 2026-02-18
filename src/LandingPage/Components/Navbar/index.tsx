import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const NavbarDumai = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hindari flicker kecil
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll ke bawah
        setShowNavbar(false);
      } else {
        // Scroll ke atas
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`w-full fixed left-0 top-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white shadow-sm">
        <div className="px-4 md:px-6 lg:px-10 h-[74px] flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/images/logo_dumai.png" alt="Dumai" className="h-14 md:h-16 object-contain" />
            <div className="hidden sm:block">
              <p className="text-4xl font-semibold text-green-700 leading-none">SIMDES MERANTI</p>
              <hr />
              <p className="text-xs text-gray-500 text-center">Sistem Informasi Manajemen Desa Kepulauan Meranti</p>
            </div>
          </NavLink>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-green-600">
              Beranda
            </NavLink>
            <NavLink to="/" className="hover:text-green-600">
              Bidan
            </NavLink>
            <NavLink to="/darurat" className="hover:text-green-600">
              Ambulance
            </NavLink>
          </nav>

          {/* RIGHT BUTTON */}
          <div className="hidden lg:flex items-center">
            <NavLink to="/" className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-full font-semibold transition">
              Masuk
            </NavLink>
          </div>

          {/* HAMBURGER */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`lg:hidden fixed top-[74px] left-0 w-full bg-white shadow-md transition-all duration-300 ${open ? "max-h-screen py-6" : "max-h-0 overflow-hidden"}`}>
        <div className="flex flex-col items-center gap-5 text-gray-700 font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Beranda
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Bidan
          </NavLink>
          <NavLink to="/darurat" onClick={() => setOpen(false)}>
            Ambulance
          </NavLink>

          <NavLink to="/" className="bg-green-700 text-white px-6 py-2 rounded-full" onClick={() => setOpen(false)}>
            Masuk
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavbarDumai;
