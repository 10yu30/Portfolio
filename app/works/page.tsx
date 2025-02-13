/* eslint-disable tailwindcss/migration-from-tailwind-2 */
// app/works/page.tsx
"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

const works = [
  { 
    id: "a",
    title: "作品A",
    image: "/image01.jpg?height=300&width=400",
    category: "一人"
  },
  {
    id: "b",
    title: "作品B",
    image: "/image02.jpg?height=300&width=400",
    category: "チーム",
  },
  { 
    id: "c",
    title: "作品C",
    image: "/image03.jpg?height=300&width=400",
    category: "一人"
  },
  { 
    id: "d",
    title: "作品D",
    image: "/image04.jpg?height=300&width=400",
    category: "チーム"
  },
  {
    id: "e",
    title: "作品E",
    image: "/image05.jpg?height=300&width=400",
    category: "一人",
  },
  {
    id: "f",
    title: "作品F",
    image: "/image06.jpg?height=300&width=400",
    category: "チーム",
  },
]

const categories = ["すべて", "一人", "チーム"]

export default function WorksPage() {
  const [filter, setFilter] = useState("すべて")

  const filteredWorks = works.filter((work) => filter === "すべて" || work.category === filter)

  return (
    <main className="playwrite-vn-guides-regular flex min-h-screen flex-col bg-black">
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

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredWorks.map((work) => (
              <Parallax key={work.id} translateY={["50px", "-50px"]} scale={[0.8, 1]} opacity={[0.5, 1]}>
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <Link href={`/works/${work.id}`}>
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
                        <p className="text-sm text-gray-400">{work.category}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </Parallax>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

