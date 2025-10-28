import React from 'react';
import { useNavigate } from 'react-router-dom';
const avatarImage = 'https://www.figma.com/api/mcp/asset/6215c05c-23ac-4fde-b16e-b19d7d4cdfb8';
export function Header() {
  const navigate = useNavigate();
  return <header className="flex items-center justify-between">
      <h1 className="text-[#fffcec] text-4xl md:text-5xl font-bold tracking-tight">
        cadmonkey
      </h1>
      <div className="hidden md:flex bg-[#fdfceb] rounded-full p-2 gap-2">
        <button className="bg-[#2040fe] text-white px-8 py-4 rounded-full font-extrabold text-xl md:text-2xl hover:bg-[#1a35d9] transition-colors">
          workspace
        </button>
        <button onClick={() => navigate('/gallery')} className="bg-transparent text-[#2040fe] px-8 py-4 rounded-full font-extrabold text-xl md:text-2xl hover:bg-white/50 transition-colors">
          gallery
        </button>
      </div>
      <div className="w-[95px] h-[95px] bg-white rounded-[30px] flex items-center justify-center overflow-hidden">
        <img src={avatarImage} alt="User avatar" className="w-[70px] h-[70px] object-cover" />
      </div>
    </header>;
}