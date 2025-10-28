import React from 'react';
const avatarImage = 'https://www.figma.com/api/mcp/asset/6215c05c-23ac-4fde-b16e-b19d7d4cdfb8';
export function Header() {
  return <header className="flex items-center justify-between">
      <h1 className="text-[#fffcec] text-4xl md:text-5xl font-bold tracking-tight">
        cadmonkey
      </h1>
      <div className="w-[95px] h-[95px] bg-white rounded-[30px] flex items-center justify-center overflow-hidden">
        <img src={avatarImage} alt="User avatar" className="w-[70px] h-[70px] object-cover" />
      </div>
    </header>;
}