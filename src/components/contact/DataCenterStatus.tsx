
import React from 'react';
import DataCenterMap from '../map/DataCenterMap';

const DataCenterStatus = ({ apiKey }: { apiKey: string }) => {
  return (
    <div className="mt-8">
      <h4 className="text-lg font-medium text-precision-dark mb-4">Data Center Locations</h4>
      
      <DataCenterMap apiKey={apiKey} />
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">New York (NY4)</span>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">London (LD4)</span>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Tokyo (TY3)</span>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Sydney (SY1)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterStatus;
