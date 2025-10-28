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
  return <div className={`bg-[#fdfceb] rounded-[30px] p-4 md:p-6 relative flex items-center justify-center ${className}`}>
      <button onClick={onShare} className="absolute top-4 right-4 bg-black text-white px-4 py-3 md:px-6 md:py-4 rounded-[30px] font-extrabold text-sm md:text-lg hover:bg-gray-800 transition-colors z-10">
        share
      </button>
      <div className="w-full aspect-square flex items-center justify-center">
        <img src={modelImage} alt="3D Model visualization" className="w-full h-full object-contain" />
      </div>
      <button onClick={onDownload} className="absolute bottom-4 right-4 bg-black text-white px-4 py-3 md:px-6 md:py-4 rounded-[30px] font-extrabold text-sm md:text-lg hover:bg-gray-800 transition-colors z-10">
        download
      </button>
    </div>;
}