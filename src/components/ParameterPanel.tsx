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
  return <div className="bg-[#fdfceb] rounded-[30px] p-4 md:p-6 flex-1 overflow-auto">
      <pre className="font-extrabold text-black text-sm md:text-lg leading-relaxed">
        <div className="mb-2"> // Lady Parameters</div>
        Lady Parameters
        {Object.entries(parameters).map(([key, value]) => <div key={key}>
            {key} = {value};
          </div>)}
      </pre>
    </div>;
}