// app/components/Footer.tsx
import { Github, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="playwrite-vn-guides-regular bg-gray-900 py-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm md:mb-0">&copy; 2025 Matsuoka Yuu. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-purple-400 transition-colors hover:text-white">
              <Github size={20} />
            </a>
            <a href="#" className="text-purple-400 transition-colors hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-purple-400 transition-colors hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

