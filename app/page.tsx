'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, Star, Users, Zap, Shield, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="relative bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ModernSite
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-gray-300">
                  ホーム
                </a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-gray-300">
                  機能
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-gray-300">
                  概要
                </a>
                <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  お問い合わせ
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300">
                ホーム
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300">
                機能
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300">
                概要
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300">
                お問い合わせ
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              未来を
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                創造する
              </span>
              <br />
              モダンなソリューション
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              最新の技術を使って、ユーザー体験を向上させ、ビジネスの成長を加速します。
              私たちと一緒に、デジタル変革の旅を始めましょう。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                今すぐ始める
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                デモを見る
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                なぜ私たちを選ぶのか
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                革新的な機能と優れたパフォーマンスで、あなたのビジネスを次のレベルへ
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">高速パフォーマンス</h3>
                <p className="text-gray-600 dark:text-gray-300">最適化されたコードで、Lightning Fast な体験を提供</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">セキュア</h3>
                <p className="text-gray-600 dark:text-gray-300">エンタープライズレベルのセキュリティで安心</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-lg mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">チーム連携</h3>
                <p className="text-gray-600 dark:text-gray-300">シームレスなコラボレーション機能</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-lg mb-4">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">高評価</h3>
                <p className="text-gray-600 dark:text-gray-300">数千のユーザーから5つ星評価</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  私たちについて
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  10年以上の経験を持つ開発チームが、最新の技術トレンドを取り入れながら、
                  お客様のビジネス目標達成をサポートします。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">React/Next.js のエキスパート</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">クラウドネイティブアーキテクチャ</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">DevOps & CI/CD パイプライン</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">実績</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-blue-100">完了プロジェクト</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-blue-100">満足クライアント</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">99.9%</div>
                      <div className="text-blue-100">稼働率</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-blue-100">サポート</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              プロジェクトを始めませんか？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              無料相談から始めて、あなたのアイデアを現実に変えましょう
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                無料相談を予約
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
                資料をダウンロード
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ModernSite</h3>
              <p className="text-gray-400">
                未来を創造するモダンなソリューションプロバイダー
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ウェブ開発</li>
                <li>モバイルアプリ</li>
                <li>クラウド構築</li>
                <li>コンサルティング</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li>概要</li>
                <li>チーム</li>
                <li>キャリア</li>
                <li>ニュース</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@modernsite.com</li>
                <li>03-1234-5678</li>
                <li>東京都渋谷区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ModernSite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}