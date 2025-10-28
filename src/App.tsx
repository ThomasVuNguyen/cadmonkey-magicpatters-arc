import React, { useState } from 'react';
import { Header } from './components/Header';
import { ParameterPanel } from './components/ParameterPanel';
import { ModelViewer } from './components/ModelViewer';
import { InputSection } from './components/InputSection';
export function App() {
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
    // Model generation logic would go here
  };
  const handleShare = () => {
    console.log('Sharing model');
    // Share logic would go here
  };
  const handleDownload = () => {
    console.log('Downloading model');
    // Download logic would go here
  };
  return <div className="w-full min-h-screen bg-[#2040fe] p-4 md:p-6 lg:p-8">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ModelViewer onShare={handleShare} onDownload={handleDownload} className="lg:order-2" />
        <div className="flex flex-col gap-6 lg:order-1">
          <ParameterPanel parameters={parameters} />
          <InputSection value={modelInput} onChange={setModelInput} onMakeIt={handleMakeIt} />
        </div>
      </div>
    </div>;
}