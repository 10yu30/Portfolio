/* eslint-disable tailwindcss/migration-from-tailwind-2 */
// app/works/page.tsx
"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Dialog } from "@headlessui/react";

interface Work {
  id: string;
  title: string;
  image: string;
  category: string;
  link: string;
  duration: string;
  team: string;
  tech: string;
}

const works: Work[] = [
  { id: "a", title: "でしょdeショー！", image: "/image01.jpg?height=300&width=400", category: "一人", link: "https://desyodesyo.vercel.app/", duration: "7時間", team: "1人", tech: "HTML, CSS, JavaScript" },
  { id: "b", title: "Re:HAL名古屋WebSite", image: "/image02.jpg?height=300&width=400", category: "チーム", link: "https://re-hal-portal.vercel.app/", duration: "20時間", team: "5人", tech: "HTML, CSS" },
  { id: "c", title: "Re:Bouno Italia", image: "/image03.jpg?height=300&width=400", category: "一人", link: "https://wb-31-bouno.vercel.app/", duration: "20時間", team: "1人", tech: "HTML, CSS" },
  { id: "d", title: "Re:Bouno Italia", image: "/image04.jpg?height=300&width=400", category: "チーム", link: "https://wb-31-bouno.vercel.app/", duration: "20時間", team: "4人", tech: "HTML, CSS" },
  { id: "e", title: "でしょdeショー！", image: "/image05.jpg?height=300&width=400", category: "一人", link: "https://desyodesyo.vercel.app/", duration: "7時間", team: "1人", tech: "HTML, CSS, JavaScript" },
  { id: "f", title: "Re:HAL名古屋WebSite", image: "/image06.jpg?height=300&width=400", category: "チーム", link: "https://re-hal-portal.vercel.app/", duration: "20時間", team: "6人", tech: "HTML, CSS" },
];

const categories = ["すべて", "一人", "チーム"];

export default function WorksPage() {
  const [filter, setFilter] = useState("すべて");
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks = works.filter((work) => filter === "すべて" || work.category === filter);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <section className="grow px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <Parallax translateY={["-20px", "20px"]}>
            <h1 className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent">
              作品一覧
            </h1>
          </Parallax>

          <Parallax translateY={["20px", "-20px"]}>
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-4 py-2 transition-all duration-300 ${
                    filter === category ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Parallax>

          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorks.map((work) => (
              <Parallax key={work.id} translateY={["50px", "-50px"]} scale={[0.8, 1]} opacity={[0.5, 1]}>
                <motion.div
                  variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5 }}
                >
                  <button onClick={() => setSelectedWork(work)} className="group w-full cursor-pointer focus:outline-none">
                    <div className="overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        width={400}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-semibold text-purple-300">{work.title}</h2>
                      </div>
                    </div>
                  </button>
                </motion.div>
              </Parallax>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />

      {selectedWork && (
        <Dialog open={Boolean(selectedWork)} onClose={() => setSelectedWork(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">{selectedWork.title}</h2>
            <p className="mb-2 text-gray-300"><strong>カテゴリー:</strong> {selectedWork.category}</p>
            <p className="mb-2 text-gray-300"><strong>制作時間:</strong> {selectedWork.duration}</p>
            <p className="mb-2 text-gray-300"><strong>制作人数:</strong> {selectedWork.team}</p>
            <p className="mb-4 text-gray-300"><strong>使用技術:</strong> {selectedWork.tech}</p>
            <a href={selectedWork.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-purple-600 px-4 py-2 text-center text-white shadow-lg hover:bg-purple-700">サイトへ</a>
          </Dialog.Panel>
        </Dialog>
      )}
    </main>
  );
}