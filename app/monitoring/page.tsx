import React from 'react';

export default function Monitoring() {
    return (
        <div className="monitoring-container p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Monitoring</h1>
            <div className="button-group flex gap-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Click Me
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                    Button 2
                </button>
                <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Button 3
                </button>
            </div>
        </div>
    );
}
