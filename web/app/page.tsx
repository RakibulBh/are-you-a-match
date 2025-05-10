"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CreditCard, ChevronRight, Sparkles, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="max-w-2xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              <span className="font-inter">Find Your</span> <br />
              <span className="font-playfair">Perfect </span>
              <span className="text-orange-500 relative font-playfair">
                Match
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute w-full -bottom-2 left-0"
                  viewBox="0 0 358 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9.04938C65.3581 5.19969 127.716 3.59969 190.074 3.25937C239.469 2.99063 288.927 4.14688 338.129 8.99656C345.622 9.62312 353.178 9.99969 360.671 10.6262"
                    stroke="#FF6B00"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-xl text-gray-600 font-poppins"
            >
              Discover compatibility with potential partners through our
              advanced matching algorithm. No more guessing - find real
              connections based on values that matter.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/ats")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg shadow-orange-300/30 text-lg font-poppins flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ChevronRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FDF2F8" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-orange-500 px-8 py-3 rounded-md font-medium transition-all text-gray-800 hover:text-orange-500 text-lg font-poppins flex items-center justify-center gap-2"
              >
                <Sparkles size={18} />
                <span>See How It Works</span>
              </motion.button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-2 flex items-center gap-1 text-sm text-gray-500"
            >
              <CreditCard size={14} />
              <span className="font-inter">No credit card required</span>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <div className="flex -space-x-2">
                <motion.img
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/32?img=1"
                  alt="User"
                />
                <motion.img
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/32?img=2"
                  alt="User"
                />
                <motion.img
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/32?img=3"
                  alt="User"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-sm text-gray-600 font-poppins"
              >
                <span className="font-semibold">1,000+</span> matches made this
                week
              </motion.p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                "Advanced compatibility testing",
                "Value-based matching",
                "Personality analysis",
                "Free basic matching",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-orange-100 p-0.5 rounded-full">
                    <Check size={14} className="text-orange-500" />
                  </div>
                  <span className="text-gray-700 font-inter text-sm">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full md:w-2/5 h-80 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full"
            ></motion.div>
            <p className="text-orange-500 font-medium font-poppins">
              Hero image placeholder
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
