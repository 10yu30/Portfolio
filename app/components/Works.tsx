/* eslint-disable tailwindcss/migration-from-tailwind-2 */
// app/components/Works.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

interface Work {
  id: string;
  title: string;
  image: string;
  link: string;
  duration: string;
  team: string;
  tech: string;
}

const works: Work[] = [
  { id: "a", title: "でしょdeショー！", image: "/image01.jpg?height=400&width=600", link: "https://desyodesyo.vercel.app/", duration: "7時間", team: "1人", tech: "HTML, CSS, JavaScript" },
  { id: "b", title: "Re:HAL名古屋WebSite", image: "/image02.jpg?height=400&width=600", link: "https://re-hal-portal.vercel.app/", duration: "20時間", team: "1人", tech: "HTML, CSS" },
  { id: "c", title: "Re:Bouno Italia", image: "/image03.jpg?height=400&width=600", link: "https://wb-31-bouno.vercel.app/", duration: "20時間", team: "1人", tech: "NextJs" },
];

const Works = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section id="works" ref={ref} className="relative my-20 overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 shadow-xl">
      <div className="absolute inset-0 z-0 opacity-70"></div>
      <div className="container relative mx-auto max-w-6xl px-4">
        <Parallax translateY={["-20px", "20px"]}>
          <motion.h2 className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-extrabold text-transparent"
            initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
            My Works
          </motion.h2>
        </Parallax>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <Parallax key={work.id} translateY={["50px", "-50px"]} scale={[0.8, 1]} opacity={[0.5, 1]}>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}>
                <button onClick={() => setSelectedWork(work)} className="group w-full cursor-pointer focus:outline-none">
                  <div className="overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 shadow-lg transition-all duration-300 group-hover:scale-105">
                    <Image src={work.image || "/placeholder.svg"} alt={work.title} width={600} height={400} className="h-64 w-full rounded-t-lg object-cover" />
                    <div className="p-4">
                      <h3 className="mb-2 text-xl font-semibold text-white transition-colors">{work.title}</h3>
                    </div>
                  </div>
                </button>
              </motion.div>
            </Parallax>
          ))}
        </div>
        <div className="text-center">
        <Link
          href="/works"
          className="inline-block rounded-full bg-purple-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700"
        >
          View More
        </Link>
      </div>
      </div>

      {selectedWork && (
        <Dialog open={Boolean(selectedWork)} onClose={() => setSelectedWork(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">{selectedWork.title}</h2>
            <p className="mb-2 text-gray-300"><strong>制作時間 : </strong> {selectedWork.duration}</p>
            <p className="mb-2 text-gray-300"><strong>制作人数 : </strong> {selectedWork.team}</p>
            <p className="mb-4 text-gray-300"><strong>使用言語 : </strong> {selectedWork.tech}</p>
            <a href={selectedWork.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-purple-600 px-4 py-2 text-center text-white shadow-lg hover:bg-purple-700">サイトへ</a>
          </Dialog.Panel>
        </Dialog>
      )}
      
    </section>
  );
};

export default Works;
