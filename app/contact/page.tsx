// app/contact/page.tsx
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <main className="playwrite-vn-guides-regular flex min-h-screen flex-col">
      <Header />
      <section className="grow bg-[#0F0F0F] px-4 py-20 text-[#F0F0F0]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-12 text-center text-4xl font-bold text-[#BB86FC]">お問い合わせ</h1>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">お問い合わせフォーム</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-[#3700B3] bg-[#1A1A1A] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BB86FC]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-[#3700B3] bg-[#1A1A1A] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BB86FC]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-[#3700B3] bg-[#1A1A1A] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BB86FC]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-[#BB86FC] px-6 py-3 text-[#0F0F0F] transition-all duration-300 hover:scale-105 hover:bg-[#3700B3] hover:text-[#F0F0F0]"
                >
                  送信
                </button>
              </form>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold">連絡先情報</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2 text-[#BB86FC]" />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-[#BB86FC]" />
                  <span>090-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-[#BB86FC]" />
                  <span>東京都渋谷区</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

