import React from 'react';
interface InputSectionProps {
  value: string;
  onChange: (value: string) => void;
  onMakeIt: () => void;
}
export function InputSection({
  value,
  onChange,
  onMakeIt
}: InputSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onMakeIt();
  };
  return <form onSubmit={handleSubmit} className="flex">
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder="a cat" className="flex-1 bg-[#fdfceb] text-black px-8 py-6 rounded-l-[30px] font-extrabold text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-white" />
      <button type="submit" className="bg-[#f25f6c] text-white px-12 py-6 rounded-r-[30px] font-extrabold text-xl md:text-2xl hover:bg-[#e14e5d] transition-colors">
        make it!
      </button>
    </form>;
}