
import React from 'react';

interface ColorSampleProps {
  name: string;
  color: string;
  hexCode: string;
}

const ColorSample = ({ name, color, hexCode }: ColorSampleProps) => (
  <div className="flex flex-col">
    <div className={`w-full h-16 ${color} rounded-t-md`}></div>
    <div className="bg-white p-2 rounded-b-md shadow">
      <p className="font-medium text-sm">{name}</p>
      <p className="text-xs text-gray-500">{hexCode}</p>
    </div>
  </div>
);

const ColorPalette = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-heading font-bold mb-6">Hybrid Color Palette</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Gold Theme Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSample name="Gold" color="bg-precision-gold" hexCode="#edc001" />
          <ColorSample name="Gold Dark" color="bg-precision-gold-dark" hexCode="#c09c00" />
          <ColorSample name="Gold Light" color="bg-precision-gold-light" hexCode="#fff5cc" />
          <ColorSample name="Dark" color="bg-precision-dark" hexCode="#1A1F2C" />
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Ocean Blue Colors</h3>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
          <ColorSample name="900" color="bg-ocean-900" hexCode="#03045E" />
          <ColorSample name="800" color="bg-ocean-800" hexCode="#023E8A" />
          <ColorSample name="700" color="bg-ocean-700" hexCode="#0077B6" />
          <ColorSample name="600" color="bg-ocean-600" hexCode="#0096C7" />
          <ColorSample name="500" color="bg-ocean-500" hexCode="#00B4D8" />
          <ColorSample name="400" color="bg-ocean-400" hexCode="#48CAE4" />
          <ColorSample name="300" color="bg-ocean-300" hexCode="#90E0EF" />
          <ColorSample name="200" color="bg-ocean-200" hexCode="#ADE8F4" />
          <ColorSample name="100" color="bg-ocean-100" hexCode="#CAF0F8" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Gradient Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-24 ocean-gradient rounded-md"></div>
          <div className="h-24 gold-ocean-gradient rounded-md"></div>
          <div className="h-24 bg-gradient-to-r from-precision-gold via-ocean-500 to-ocean-900 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
