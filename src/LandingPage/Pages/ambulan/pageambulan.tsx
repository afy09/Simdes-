import React from "react";
import { FaArrowLeft, FaAmbulance, FaPills, FaTruck, FaClipboardList, FaPhoneAlt, FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageAmbulan = () => {
  return (
    <div className="min-h-screen bg-[#f7f7ef] flex flex-col">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3 px-4 py-4 bg-white shadow-sm">
        <Link to={"/"}>
          <FaArrowLeft className="text-green-700 text-lg cursor-pointer" />
        </Link>
        <Link to={"/"}>
          <h1 className="text-lg font-semibold text-green-800">Ambulans & Logistik Obat</h1>
        </Link>
      </div>

      {/* ================= MAPS ================= */}
      <div className=" ">
        <div className="  overflow-hidden shadow-md">
          <img src="/images/maps2.png" alt="Maps" className="w-full h-56 object-cover" />
        </div>
      </div>

      {/* ================= STOK OBAT ================= */}
      <div className="py-4 bg-[#f7f7ef] rounded-3xl ">
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-green-900 text-lg">Stok Obat Desa</h2>
            <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow">
              <FaSyncAlt />
              Update Stok
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <FaPills className="text-green-700 text-2xl" />
            <p className="text-gray-700">
              <span className="font-semibold">IA Rasta:</span> 34 item tersedia
            </p>
          </div>
        </div>

        {/* ================= MENU FITUR ================= */}
        <div className="px-4 mt-3 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <FaPills className="text-green-700 text-2xl mb-2" />
            <p className="text-sm font-medium text-gray-700">Minta Obat Cepat</p>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <FaTruck className="text-green-700 text-2xl mb-2" />
            <p className="text-sm font-medium text-gray-700">Kirim Logistik</p>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <FaClipboardList className="text-green-700 text-2xl mb-2" />
            <p className="text-sm font-medium text-gray-700">Riwayat Pengiriman</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* ================= BUTTON BOTTOM ================= */}
        <div className="px-4 pb-6 mt-6">
          <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 text-base">
            <FaPhoneAlt />
            Panggil Ambulans Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageAmbulan;
