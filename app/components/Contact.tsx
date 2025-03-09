// app/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative my-20 rounded-lg py-20 shadow-xl overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900"
    >
      {/* 背景 */}
      <div className="absolute inset-0 z-0 opacity-70"></div>
      <div className="relative container mx-auto max-w-4xl px-4">
        <Parallax translateY={["-20px", "20px"]}>
          <motion.h2
            className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-extrabold text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            お問い合わせ
          </motion.h2>
        </Parallax>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* フォーム */}
          <Parallax translateX={["-50px", "50px"]}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-lg shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold text-purple-300">問い合わせフォーム</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-gray-300">名前</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-gray-300">Eメール</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-gray-300">備考</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-purple-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                >
                  送信
                </button>
              </form>
            </motion.div>
          </Parallax>
          
          {/* 連絡先情報 */}
          <Parallax translateX={["50px", "-50px"]}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-lg shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold text-purple-300">問い合わせ情報 </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2 text-purple-400" />
                  <span className="text-gray-300">email@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-purple-400" />
                  <span className="text-gray-300">090-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-purple-400" />
                  <span className="text-gray-300">Tokyo, Japan</span>
                </div>
              </div>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Contact;