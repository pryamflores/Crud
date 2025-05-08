import React from 'react';

export default function Monitoring() {
    return (
        <div className="monitoring-container">
            <h1 className="text-xl font-bold">Monitoring</h1>
            <div className="button-group">
                <button className="pt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                    Click Me
                </button>
                <button className="pt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
                    Button 2
                </button>
                <button className="pt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none">
                    Button 3
                </button>
            </div>
        </div>
    );
}
