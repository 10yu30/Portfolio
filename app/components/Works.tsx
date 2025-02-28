// app/components/Works.tsx
"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Parallax } from "react-scroll-parallax"

const works = [
  { id: "a", title: "作品A", image: "/image01.jpg?height=300&width=400" },
  { id: "b", title: "作品B", image: "/image02.jpg?height=300&width=400" },
  { id: "c", title: "作品C", image: "/image03.jpg?height=300&width=400" },
]

const Works = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="works"
      ref={ref}
      className="playwrite-vn-guides-regular relative my-20 rounded-lg py-20 shadow-xl overflow-hidden"
    >
      {/* グラデーション背景 */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 opacity-70"></div>
      {/* 透過レイヤーで可読性向上 */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative container mx-auto max-w-6xl px-4">
        <Parallax translateY={["-20px", "20px"]}>
          <motion.h2
            className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            制作作品
          </motion.h2>
        </Parallax>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <Parallax key={work.id} translateY={["50px", "-50px"]} scale={[0.8, 1]} opacity={[0.5, 1]}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                <Link href={`/works/${work.id}`} className="group">
                  <div className="overflow-hidden rounded-lg bg-gray-800 bg-opacity-50 shadow-lg transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      width={400}
                      height={300}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-purple-400">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                </Link>
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
    </section>
  )
}

export default Works

