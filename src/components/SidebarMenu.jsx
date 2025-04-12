import React from "react";
import {
  FaClock,
  FaHeadphones,
  FaBlender,
  FaMobileAlt,
  FaHome,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const SidebarMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-20 flex justify-around items-center bg-[#59B0FF] border-b">
        <img className="object-cover w-32 h-auto" src="/logo.svg" alt="" />
        <button className="text-white" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-gray-600 text-sm">Categories</h2>
        <hr className="mt-3 w-full" />
        <ul className="p-4 space-y-6 text-gray-700 text-sm">
          <Link to={"/home"} className="flex items-center gap-2 cursor-pointer">
            <FaHome className="text-blue-500" />
            <span>Home</span>
          </Link>
          <Link
            to={"/mobiles"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaMobileAlt className="text-blue-500" />
            <span>Mobiles</span>
          </Link>
          <Link
            to={"/watches"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaClock className="text-blue-500" />
            <span>Watches</span>
          </Link>
          <Link
            to={"/accessories"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaHeadphones className="text-blue-500" />
            <span>Accessories</span>
          </Link>
          <Link
            to={"/homeappliances"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <FaBlender className="text-blue-500" />
            <span>Home Appliances</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
