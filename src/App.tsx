import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ParameterPanel } from './components/ParameterPanel';
import { ModelViewer } from './components/ModelViewer';
import { InputSection } from './components/InputSection';
export function App() {
  const navigate = useNavigate();
  const [modelInput, setModelInput] = useState('a cat');
  const [parameters] = useState({
    body_height: 100,
    body_width: 60,
    body_depth: 40,
    head_height: 50,
    head_width: 30,
    head_depth: 20,
    head_radius: 20,
    neck_height: 30,
    neck_width: 15,
    neck_depth: 10,
    neck_radius: 10,
    arm_length: 70
  });
  const handleMakeIt = () => {
    console.log('Generating model for:', modelInput);
  };
  const handleShare = () => {
    console.log('Sharing model');
  };
  const handleDownload = () => {
    console.log('Downloading model');
  };
  return <div className="w-full h-screen bg-[#2040fe] p-4 md:p-6 flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 min-h-0">
        <ModelViewer onShare={handleShare} onDownload={handleDownload} className="lg:order-2" />
        <div className="flex flex-col gap-4 lg:order-1 min-h-0">
          <ParameterPanel parameters={parameters} />
          <InputSection value={modelInput} onChange={setModelInput} onMakeIt={handleMakeIt} />
        </div>
      </div>
      <div className="flex md:hidden justify-center mt-4">
        <div className="bg-[#fdfceb] rounded-full p-2 flex gap-2">
          <button className="bg-[#2040fe] text-white px-6 py-3 rounded-full font-extrabold text-lg hover:bg-[#1a35d9] transition-colors">
            workspace
          </button>
          <button onClick={() => navigate('/gallery')} className="bg-transparent text-[#2040fe] px-6 py-3 rounded-full font-extrabold text-lg hover:bg-white/50 transition-colors">
            gallery
          </button>
        </div>
      </div>
    </div>;
}