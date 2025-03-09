// app/components/Profile.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="profile"
      ref={ref}
      className="relative my-20 rounded-lg py-20 shadow-xl overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    >
      <div className="absolute inset-0 z-0 opacity-70"></div>

      <div className="relative container mx-auto max-w-4xl px-4">
        <Parallax translateY={["-20px", "20px"]}>
          <motion.h2
            className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-extrabold text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Profile
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
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-purple-500"
              />
            </motion.div>
          </Parallax>
          <Parallax translateX={["50px", "-50px"]}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-lg shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-semibold text-purple-300">Matsuoka Yuu</h3>
              <p className="mb-4 text-gray-300">Creative Developer | 26卒</p>
              <h4 className="mb-2 text-xl font-semibold text-purple-300">Skills</h4>
              <ul className="mb-4 list-inside list-disc text-gray-300">
                <li>JavaScript</li>
                <li>React / Next.js</li>
                <li>Flutter / Mobile Development</li>
                <li>kintone / customize</li>
              </ul>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Profile;