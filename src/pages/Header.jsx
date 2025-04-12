import React, { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import SidebarMenu from "../components/SidebarMenu";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const techProducts = [
    { id: 1, title: "Wireless Earbuds", pic: "/image1.webp" },
    { id: 2, title: "Smartwatch Series 7", pic: "/image2.webp" },
    { id: 3, title: "Trimmer", pic: "/image3.webp" },
    { id: 4, title: "Wall Charger", pic: "/image4.webp" },
    { id: 5, title: "Tablets", pic: "/image5.webp" },
  ];

  return (
    <>
      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="w-full bg-blue-500 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-y-4 sm:gap-y-0">
        <div className="flex items-center gap-4">
          <button
            className="text-white text-2xl"
            onClick={() => setIsSidebarOpen(true)}
          >
            <RxHamburgerMenu />
          </button>
          <Link to={"/home"}>
            <img
              loading="lazy"
              className="w-24 sm:w-28 h-auto"
              src="/logo.svg"
              alt="logo"
            />
          </Link>
        </div>

        <div className="relative w-full sm:w-1/2 order-3 sm:order-none">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 sm:p-3 rounded-md text-black"
          />
          <span className="absolute right-4 top-1/2 text-xl transform -translate-y-1/2 text-gray-500">
            <CiSearch />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={"/cart"}
            className="p-2 text-xl px-5 sm:px-7 bg-white text-blue-600 rounded-sm"
          >
            <BsCart3 />
          </Link>
          <button
            onClick={() => logout()}
            className="p-2 text-xs px-5 sm:px-7 border text-white rounded-sm"
          >
            Logout
          </button>
        </div>
      </div>

      <section className="flex bg-white justify-start sm:justify-center overflow-x-auto px-3 py-1 gap-4 sm:gap-24">
        {techProducts.map((item) => (
          <div key={item.id} className="flex-shrink-0 text-center w-20 sm:w-24">
            <img
              loading="lazy"
              className="w-12 h-12 sm:w-12 sm:h-auto object-cover rounded mx-auto"
              src={item.pic}
              alt={item.title}
            />
            <h2 className="text-[10px] sm:whitespace-nowrap sm:text-[12px] text-gray-600 font-medium mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default Header;
