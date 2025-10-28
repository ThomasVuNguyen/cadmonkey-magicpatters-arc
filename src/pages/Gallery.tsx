import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, MessageCircleIcon } from 'lucide-react';
const avatarImage = 'https://www.figma.com/api/mcp/asset/6215c05c-23ac-4fde-b16e-b19d7d4cdfb8';
const modelImage = 'https://www.figma.com/api/mcp/asset/97910c8d-9a35-46f3-9e1f-f011ec02e591';
export function Gallery() {
  const navigate = useNavigate();
  return <div className="w-full min-h-screen bg-[#2040fe] p-4 md:p-6">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between mb-8">
        <h1 className="text-[#fffcec] text-4xl md:text-5xl font-bold tracking-tight">
          cadmonkey
        </h1>
        <div className="flex bg-[#fdfceb] rounded-full p-2 gap-2">
          <button onClick={() => navigate('/')} className="bg-transparent text-[#2040fe] px-8 py-4 rounded-full font-extrabold text-xl md:text-2xl hover:bg-white/50 transition-colors">
            workspace
          </button>
          <button className="bg-[#2040fe] text-white px-8 py-4 rounded-full font-extrabold text-xl md:text-2xl hover:bg-[#1a35d9] transition-colors">
            gallery
          </button>
        </div>
        <div className="w-[95px] h-[95px] bg-white rounded-[30px] flex items-center justify-center overflow-hidden">
          <img src={avatarImage} alt="User avatar" className="w-[70px] h-[70px] object-cover" />
        </div>
      </header>
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between mb-6">
        <h1 className="text-[#fffcec] text-5xl font-bold tracking-tight">
          cadmonkey
        </h1>
        <div className="w-[60px] h-[60px] bg-white rounded-[20px] flex items-center justify-center overflow-hidden">
          <img src={avatarImage} alt="User avatar" className="w-[45px] h-[45px] object-cover" />
        </div>
      </header>
      {/* Gallery Post */}
      <div className="max-w-[886px] mx-auto">
        <div className="bg-[#fdfceb] rounded-[30px] p-6 md:p-8">
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-6">
            cadmonkey
          </h2>
          <div className="w-full aspect-square bg-[#fdfceb] flex items-center justify-center mb-6">
            <img src={modelImage} alt="3D Model" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <button className="hover:opacity-70 transition-opacity">
              <HeartIcon className="w-8 h-8 md:w-10 md:h-10 text-black" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <MessageCircleIcon className="w-8 h-8 md:w-10 md:h-10 text-black" />
            </button>
          </div>
          <p className="text-black font-bold text-lg md:text-xl mb-2">
            12,542 Likes
          </p>
          <p className="text-black font-bold text-lg md:text-xl mb-4">a cat</p>
          <input type="text" placeholder="Add a comment..." className="w-full bg-transparent text-black placeholder-gray-400 text-base md:text-lg focus:outline-none" />
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-center mt-6">
        <div className="bg-[#fdfceb] rounded-full p-2 flex gap-2">
          <button onClick={() => navigate('/')} className="bg-transparent text-[#2040fe] px-6 py-3 rounded-full font-extrabold text-lg hover:bg-white/50 transition-colors">
            workspace
          </button>
          <button className="bg-[#2040fe] text-white px-6 py-3 rounded-full font-extrabold text-lg hover:bg-[#1a35d9] transition-colors">
            gallery
          </button>
        </div>
      </div>
    </div>;
}