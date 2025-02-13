// app/works/id/page.tsx
"use client"

import { useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion, useAnimation } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import { useInView } from "react-intersection-observer"

const works = {
  a: { title: "作品A", image: "/image01.jpg", description: "作品Aの詳細な説明..." },
  b: { title: "作品B", image: "/image02.jpg", description: "作品Bの詳細な説明..." },
  c: { title: "作品C", image: "/image03.jpg", description: "作品Cの詳細な説明..." },
  d: { title: "作品D", image: "/image04.jpg", description: "作品Dの詳細な説明..." },
  e: { title: "作品E", image: "/image05.jpg", description: "作品Eの詳細な説明..." },
  f: { title: "作品F", image: "/image06.jpg", description: "作品Fの詳細な説明..." },
}

export default function Work({ params }: { params: { id: string } }) {
  const work = works[params.id as keyof typeof works]
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  if (!work) {
    notFound()
  }

  return (
    <main className="playwrite-vn-guides-regular flex min-h-screen flex-col bg-black text-white">
      <Header />
      <section className="relative grow overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl">
          <Parallax translateY={["-50px", "50px"]}>
            <motion.h1
              className="mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {work.title}
            </motion.h1>
          </Parallax>
          <Parallax translateY={["100px", "-100px"]} scale={[0.8, 1]} opacity={[0.5, 1]}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 h-0 w-full overflow-hidden rounded-lg pb-[56.25%] shadow-2xl"
            >
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </Parallax>
          <Parallax translateY={["50px", "-50px"]}>
            <motion.p
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="rounded-lg bg-gray-900 bg-opacity-50 p-6 text-lg text-gray-300 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {work.description}
            </motion.p>
          </Parallax>
        </div>
      </section>
      <Footer />
    </main>
  )
}



