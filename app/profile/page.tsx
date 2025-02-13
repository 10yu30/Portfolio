// app/profile/page.tsx
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="grow bg-[#0F0F0F] px-4 py-20 text-[#F0F0F0]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-12 text-center text-4xl font-bold text-[#BB86FC]">プロフィール詳細</h1>
          <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full"
            />
            <div>
              <h2 className="mb-4 text-3xl font-semibold">山田 太郎</h2>
              <p className="mb-4 text-[#BBBBBB]">
                高度情報学科で学び、Webデザインとフロントエンド開発に情熱を注いでいます。
                最新のテクノロジーとクリエイティブなデザインを組み合わせ、革新的なWebエクスペリエンスを創造することを目指しています。
              </p>
              <h3 className="mb-2 text-2xl font-semibold">スキル</h3>
              <ul className="mb-4 list-inside list-disc text-[#BBBBBB]">
                <li>HTML/CSS</li>
                <li>JavaScript (React, Next.js)</li>
                <li>UI/UXデザイン</li>
                <li>レスポンシブウェブデザイン</li>
                <li>GraphQL</li>
                <li>Node.js</li>
                <li>データベース設計</li>
              </ul>
              <h3 className="mb-2 text-2xl font-semibold">経歴</h3>
              <ul className="mb-4 list-inside list-disc text-[#BBBBBB]">
                <li>20XX年: ○○大学 高度情報学科 卒業</li>
                <li>20XX年 - 20XX年: △△株式会社 Webデベロッパー</li>
                <li>20XX年 - 現在: フリーランスWebデザイナー/デベロッパー</li>
              </ul>
              <h3 className="mb-2 text-2xl font-semibold">資格</h3>
              <ul className="mb-4 list-inside list-disc text-[#BBBBBB]">
                <li>基本情報技術者</li>
                <li>応用情報技術者</li>
                <li>AWS認定ソリューションアーキテクト - アソシエイト</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

