// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollTo = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-opacity-80 backdrop-blur-md bg-gray-900 px-6 py-4 text-gray-100 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-purple-400 tracking-wide">
          Portfolio
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href={isHomePage ? "#profile" : "/#profile"} className="hover:text-purple-400" onClick={() => isHomePage && scrollTo("profile")}>
            プロフィール
          </Link>
          <Link href={isHomePage ? "#works" : "/#works"} className="hover:text-purple-400" onClick={() => isHomePage && scrollTo("works")}>
            作品一覧
          </Link>
          <Link href={isHomePage ? "#contact" : "/#contact"} className="hover:text-purple-400" onClick={() => isHomePage && scrollTo("contact")}>
            お問い合わせ
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex flex-col space-y-4 md:hidden"
        >
          <Link href={isHomePage ? "#profile" : "/#profile"} className="hover:text-purple-400" onClick={() => { isHomePage && scrollTo("profile"); setIsMenuOpen(false); }}>プロフィール</Link>
          <Link href={isHomePage ? "#works" : "/#works"} className="hover:text-purple-400" onClick={() => { isHomePage && scrollTo("works"); setIsMenuOpen(false); }}>作品一覧</Link>
          <Link href={isHomePage ? "#contact" : "/#contact"} className="hover:text-purple-400" onClick={() => { isHomePage && scrollTo("contact"); setIsMenuOpen(false); }}>お問い合わせ</Link>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;