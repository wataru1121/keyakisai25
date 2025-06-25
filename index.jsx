// src/App.js

import React from 'react';
// アイコンをインポートします (npm install react-icons が必要)
import { FaLaptopCode, FaSearch, FaGithub, FaServer, FaExclamationTriangle, FaRss, FaUser, FaRegCalendarAlt, FaComments, FaTag } from 'react-icons/fa';
import { SiReact, SiPython, SiDocker, SiAmazonaws, SiKubernetes } from "react-icons/si";


// --- ダミーデータ (本来はAPIなどから取得します) ---
const currentUser = { name: "鈴木" };

const announcements = [
  { id: 1, text: "【重要】XXサーバー 12/25 02:00-04:00 停止メンテナンスのお知らせ" },
  { id: 2, text: "新しい社内経費精算ツールをリリースしました。各自マニュアルを確認してください。" },
];

const blogPosts = [
  { id: 1, title: "React Hooks完全に理解するための入門", author: "佐藤", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=80&w=400" },
  { id: 2, title: "DB正規化の勘所と実践アンチパターン", author: "高橋", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&q=80&w=400" },
  { id: 3, title: "Dockerを使ったローカル開発環境の高速化", author: "田中", image: "https://images.unsplash.com/photo-1617470702154-52319343be28?ixlib=rb-4.0.3&q=80&w=400" },
];

const projects = [
    { id: 1, name: "PJ-A: 新勤怠管理システム", status: "設計中", members: "鈴木, 高橋" },
    { id: 2, name: "PJ-B: 全社インフラ監視ツール", status: "テスト中", members: "田中" },
    { id: 3, name: "PJ-C: 顧客データ分析基盤", status: "完了", members: "佐藤, 鈴木" },
];

const events = [
    { id: 1, date: "12/15 18:00", title: "React中級者向け勉強会" },
    { id: 2, date: "12/22 19:00", title: "IT部門 忘年会 @第一会議室" },
];

// --- ここからコンポーネント ---
// 実際にはこれらのコンポーネントを別ファイルに分割します

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaLaptopCode className="text-3xl text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">IT部門ポータル</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">技術ブログ</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">プロジェクト</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">便利ツール集</a>
      </nav>
      <div className="flex items-center space-x-3">
        <FaUser className="text-gray-600" />
        <span className="text-gray-700 font-medium">{currentUser.name} さん</span>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="bg-blue-600 text-white text-center py-12 px-4 rounded-lg my-6">
    <h2 className="text-4xl font-extrabold mb-2">ようこそ、{currentUser.name}さん！</h2>
    <p className="text-lg text-blue-200 mb-6">IT部門のナレッジとコラボレーションのハブへ</p>
    <div className="max-w-2xl mx-auto relative">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input 
        type="search" 
        placeholder="サイト内を検索 (例: AWS, Python, 障害報告...)" 
        className="w-full p-3 pl-10 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      />
    </div>
    <div className="mt-6 flex justify-center flex-wrap gap-3">
      <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"><FaGithub /> Gitリポジトリ</a>
      <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"><FaServer /> ステージング環境</a>
      <a href="#" className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"><FaExclamationTriangle /> 障害報告</a>
    </div>
  </div>
);

const Card = ({ children, title }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />

      <main className="container mx-auto p-4">
        <Hero />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* メインコンテンツ (2/3) */}
          <div className="w-full lg:w-2/3">
            <Card title="重要なお知らせ">
              <ul className="space-y-2">
                {announcements.map(item => (
                  <li key={item.id} className="text-gray-700 flex items-start gap-2">
                    <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="新着技術ブログ">
              <div className="grid md:grid-cols-3 gap-4">
                {blogPosts.map(post => (
                  <div key={post.id} className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={post.image} alt={post.title} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <h4 className="font-bold text-md mb-1">{post.title}</h4>
                      <p className="text-sm text-gray-600">by {post.author}さん</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="進行中プロジェクト">
               <ul className="space-y-3">
                 {projects.map(p => (
                   <li key={p.id} className="flex items-center justify-between">
                     <div>
                       <span className="font-semibold">{p.name}</span>
                       <span className="text-sm text-gray-500 block">担当: {p.members}</span>
                     </div>
                     <span className={`text-sm font-bold px-2 py-1 rounded-full ${p.status === '完了' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{p.status}</span>
                   </li>
                 ))}
               </ul>
            </Card>
            
            <Card title="勉強会・イベントカレンダー">
              <ul className="space-y-2">
                {events.map(event => (
                  <li key={event.id} className="flex items-center gap-3">
                    <FaRegCalendarAlt className="text-blue-500" />
                    <span className="font-mono text-gray-600">{event.date}</span>
                    <span className="font-semibold">{event.title}</span>
                  </li>
                ))}
              </ul>
            </Card>

          </div>

          {/* サイドバー (1/3) */}
          <aside className="w-full lg:w-1/3">
            <Card title="カテゴリ / タグ">
              <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><SiAmazonaws /> AWS</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><SiPython /> Python</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><SiReact /> React</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><FaExclamationTriangle /> Security</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><SiDocker /> Docker</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><SiKubernetes /> k8s</span>
              </div>
            </Card>

            <Card title="便利リンク集">
              <ul className="space-y-2 text-blue-600">
                <li><a href="#" className="hover:underline">社内Wiki (Confluence)</a></li>
                <li><a href="#" className="hover:underline">勤怠管理システム</a></li>
                <li><a href="#" className="hover:underline">経費精算システム</a></li>
                <li><a href="#" className="hover:underline">ドキュメント管理 (Google Drive)</a></li>
              </ul>
            </Card>
            
            <Card title="貢献度ランキング 🏆">
                <ol className="list-decimal list-inside space-y-2">
                    <li><span className="font-bold">佐藤さん</span> (15 posts)</li>
                    <li><span className="font-bold">高橋さん</span> (12 posts)</li>
                    <li><span className="font-bold">田中さん</span> (10 posts)</li>
                </ol>
            </Card>

            <Card title="部員のつぶやき">
              <div className="space-y-3">
                  <div className="flex gap-2 text-sm">
                      <FaComments className="text-gray-400 mt-1" />
                      <p><span className="font-semibold">鈴木:</span> 新しいモニター最高！作業効率2倍になった気がする。</p>
                  </div>
                  <div className="flex gap-2 text-sm">
                      <FaComments className="text-gray-400 mt-1" />
                      <p><span className="font-semibold">田中:</span> ランチどこ行こうかな... おすすめあります？ #lunch</p>
                  </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-8 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2023 [会社名] IT Department.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">このサイトについて</a>
            <a href="#" className="hover:underline">管理者へ連絡</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
