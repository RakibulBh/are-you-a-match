"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { FileText, Link, ArrowRight, FileUp, Check, Globe } from "lucide-react";

export default function AtsPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
    multiple: false,
  } as any); // Type assertion to bypass strict type checking

  const handleScrapeUrl = () => {
    if (!jobUrl) return;

    setIsLoading(true);
    // This would be where you make an API call to scrape the URL
    // For now, just simulate a delay and set dummy text
    setTimeout(() => {
      setJobDescription("This job description was scraped from: " + jobUrl);
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      jobDescription,
      jobUrl,
      file,
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  const scaleUp = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="bg-white rounded-xl shadow p-6 md:p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Job Description Side */}
                <motion.div
                  variants={scaleUp}
                  initial="initial"
                  animate="animate"
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 font-playfair">
                    Job Details
                  </h2>

                  <div className="mb-6">
                    <label
                      htmlFor="jobDescription"
                      className="block text-sm font-medium text-gray-700 mb-2 font-poppins"
                    >
                      Job Description
                    </label>
                    <textarea
                      id="jobDescription"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Paste the job description here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md h-64 focus:ring-orange-500 focus:border-orange-500 text-gray-800 placeholder-gray-400 font-poppins"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 font-poppins">
                      Or import from a job posting URL:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={jobUrl}
                        onChange={(e) => setJobUrl(e.target.value)}
                        placeholder="https://example.com/job-posting"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-800 placeholder-gray-400 font-poppins"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={handleScrapeUrl}
                        disabled={!jobUrl || isLoading}
                        className="px-4 py-2 border border-orange-500 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 whitespace-nowrap font-poppins"
                      >
                        {isLoading ? (
                          <span>Loading...</span>
                        ) : (
                          <>
                            <Globe size={16} />
                            <span>Scrape</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                    <p className="text-xs text-gray-500 font-poppins">
                      Job description and requirements will be extracted
                      automatically
                    </p>
                  </div>
                </motion.div>

                {/* Resume Upload Side */}
                <motion.div
                  variants={scaleUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 font-playfair">
                    Your Resume
                  </h2>

                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-all ${
                      isDragActive
                        ? "border-orange-400 bg-orange-50"
                        : file
                        ? "border-green-400 bg-green-50"
                        : "border-gray-300 hover:border-orange-400 hover:bg-orange-50"
                    }`}
                  >
                    <input {...getInputProps()} />

                    {file ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center text-green-600 gap-2">
                          <Check size={24} />
                          <span className="font-medium font-poppins">
                            Resume uploaded
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-poppins">
                          {file.name}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFile(null);
                          }}
                          className="text-xs text-orange-600 hover:text-orange-800 underline font-poppins"
                        >
                          Remove
                        </button>
                      </div>
                    ) : isDragActive ? (
                      <div className="space-y-3">
                        <FileUp size={36} className="mx-auto text-orange-500" />
                        <p className="text-gray-700 font-poppins">
                          Drop your resume here...
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <FileUp size={36} className="mx-auto text-gray-400" />
                        <p className="text-gray-600 font-poppins">
                          Drag & drop your resume here, or{" "}
                          <span className="text-orange-500 font-medium">
                            browse files
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 font-poppins">
                          Accepts PDF and DOCX files only
                        </p>
                      </div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4"
                  >
                    <button
                      type="submit"
                      disabled={!(file && jobDescription)}
                      className={`w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center gap-2 transition-all ${
                        !(file && jobDescription)
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-orange-600 shadow-lg shadow-orange-300/30"
                      }`}
                    >
                      <span className="font-poppins">Analyze Resume Match</span>
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
