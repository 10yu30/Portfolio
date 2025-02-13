// app/page.tsx
import Header from "./components/Header"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Profile />
      <Works />
      <Contact />
      <Footer />
    </main>
  )
}

