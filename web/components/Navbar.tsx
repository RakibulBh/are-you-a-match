import Link from "next/link";
import React from "react";
import { Heart, Menu, ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/ats"
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors flex items-center gap-1 font-poppins text-sm"
              >
                <FileText size={16} />
                <span>ATS Scanner</span>
              </Link>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => router.push("/ats")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-all flex items-center gap-1 font-poppins"
              >
                Get Started
                <ChevronRight size={16} />
              </button>
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
