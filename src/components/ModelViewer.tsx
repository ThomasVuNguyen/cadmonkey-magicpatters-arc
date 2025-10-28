import React from 'react';
const modelImage = 'https://www.figma.com/api/mcp/asset/97910c8d-9a35-46f3-9e1f-f011ec02e591';
interface ModelViewerProps {
  onShare: () => void;
  onDownload: () => void;
  className?: string;
}
export function ModelViewer({
  onShare,
  onDownload,
  className = ''
}: ModelViewerProps) {
  return <div className={`bg-[#fdfceb] rounded-[30px] p-8 relative min-h-[600px] flex items-center justify-center ${className}`}>
      <button onClick={onShare} className="absolute top-6 right-6 bg-black text-white px-8 py-6 rounded-[30px] font-extrabold text-xl md:text-2xl hover:bg-gray-800 transition-colors">
        share
      </button>
      <div className="w-full max-w-[600px] aspect-square flex items-center justify-center">
        <img src={modelImage} alt="3D Model visualization" className="w-full h-full object-contain" />
      </div>
      <button onClick={onDownload} className="absolute bottom-6 right-6 bg-black text-white px-8 py-6 rounded-[30px] font-extrabold text-xl md:text-2xl hover:bg-gray-800 transition-colors">
        download
      </button>
    </div>;
}