import React from 'react';
interface ParameterPanelProps {
  parameters: {
    body_height: number;
    body_width: number;
    body_depth: number;
    head_height: number;
    head_width: number;
    head_depth: number;
    head_radius: number;
    neck_height: number;
    neck_width: number;
    neck_depth: number;
    neck_radius: number;
    arm_length: number;
  };
}
export function ParameterPanel({
  parameters
}: ParameterPanelProps) {
  return <div className="bg-[#fdfceb] rounded-[30px] p-8 min-h-[500px]">
      <pre className="font-extrabold text-black text-xl md:text-2xl leading-relaxed">
        <div className="mb-4"> // Lady Parameters</div>
        Lady Parameters
        {Object.entries(parameters).map(([key, value]) => <div key={key}>
            {key} = {value};
          </div>)}
      </pre>
    </div>;
}