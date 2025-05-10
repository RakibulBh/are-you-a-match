import Link from "next/link";
import React from "react";
import {
  Heart,
  Menu,
  ChevronRight,
  Home,
  Settings,
  Users,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navList = [
    {
      name: "Home",
      href: "/",
      icon: <Home size={16} />,
    },
    {
      name: "Features",
      href: "/features",
      icon: <Settings size={16} />,
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <Users size={16} />,
    },
    {
      name: "About",
      href: "/about",
      icon: <Info size={16} />,
    },
  ];

  return (
    <div className="absolute top-4 left-0 w-full flex justify-center z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-full py-2 px-6 max-w-3xl w-full mx-4 backdrop-blur-sm bg-opacity-95"
      >
        <div className="flex justify-between items-center">
          {/* Logo and title */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Heart className="text-orange-500 mr-1" size={24} fill="#f97316" />
            <h1 className="text-xl font-bold">
              <Link href="/" className="flex items-center">
                <span className="text-orange-500 font-poppins">Are</span>
                <span className="mx-1 font-inter">You a</span>
                <span className="text-orange-500 font-playfair">Match?</span>
              </Link>
            </h1>
          </motion.div>

          {/* Navbar items */}
          <div className="hidden md:flex items-center space-x-6">
            {navList.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-orange-500 transition-colors flex items-center gap-1 font-poppins text-sm"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-all flex items-center gap-1 font-poppins"
              >
                Get Started
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
