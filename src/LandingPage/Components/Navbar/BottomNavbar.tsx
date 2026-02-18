import { NavLink } from "react-router-dom";
import { FaAmbulance, FaUserNurse, FaPills, FaExclamationTriangle } from "react-icons/fa";

const BottomNavbar = () => {
  const menuItems = [
    {
      name: "Darurat",
      label: "Ambulans",
      icon: <FaAmbulance size={22} />,
      path: "/darurat",
    },
    {
      name: "Hubungi",
      label: "Bidan",
      icon: <FaUserNurse size={22} />,
      path: "/bidan",
    },
    {
      name: "Minta",
      label: "Obat",
      icon: <FaPills size={22} />,
      path: "/obat",
    },
    {
      name: "Lapor",
      label: "Kejadian",
      icon: <FaExclamationTriangle size={22} />,
      path: "/lapor",
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 block md:hidden">
      <div className="bg-white shadow-xl  flex justify-between px-6 py-3 border border-gray-200">
        {menuItems.map((item, index) => (
          <NavLink key={index} to={item.path} className={({ isActive }) => `flex flex-col items-center text-xs font-medium transition-all duration-200 ${isActive ? "text-green-600 scale-105" : "text-gray-500 hover:text-green-500"}`}>
            <div className="mb-1">{item.icon}</div>
            <span>{item.name}</span>
            <span className="text-[11px] leading-none">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
