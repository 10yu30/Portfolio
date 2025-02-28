// app/components/Profile.tsx
"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"

const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="profile"
      ref={ref}
      className="playwrite-vn-guides-regular relative my-20 rounded-lg py-20 shadow-xl overflow-hidden"
    >
      {/* グラデーション背景 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 opacity-70"></div>
      {/* 透過レイヤーで可読性向上 */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative container mx-auto max-w-4xl px-4">
        <Parallax translateY={["-20px", "20px"]}>
          <motion.h2
            className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            プロフィール
          </motion.h2>
        </Parallax>
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <Parallax translateX={["-50px", "50px"]}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/image0.jpg?height=300&width=300"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </motion.div>
          </Parallax>
          <Parallax translateX={["50px", "-50px"]}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-black bg-opacity-30 p-6 rounded-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold text-purple-300">松岡 優翔</h3>
              <p className="mb-4 text-gray-300">
                HAL名古屋高度情報学科3年。
                26卒。
              </p>
              <h4 className="mb-2 text-xl font-semibold text-purple-300">スキル</h4>
              <ul className="mb-4 list-inside list-disc text-gray-300">
                <li>React</li>
                <li>Next</li>
                <li>Flutter</li>
                <li>kintone</li>
              </ul>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  )
}

export default Profile
