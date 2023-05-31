import React from 'react';


const RevenueCards = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Première carte */}
                <div className="bg-white p-3 rounded-lg shadow">
                    <h2 className="text-md font-semibold mb-2">Orders</h2>
                    <p className="text-lg font-bold text-center">25</p>
                </div>

                {/* Deuxième carte */}
                <div className="bg-white p-3 rounded-lg shadow">
                    <h2 className="text-md font-semibold mb-2">Orders</h2>
                    <p className="text-lg font-bold text-center">18</p>
                </div>

                {/* Troisième carte */}
                <div className="bg-white p-3 rounded-lg shadow">
                    <h2 className="text-md font-semibold mb-2">Orders</h2>
                    <p className="text-lg font-bold text-center">12</p>
                    <p className="text-md font-semibold text-center">12 orders today</p>
                </div>
            </div>
        </div>
    );
};

export default RevenueCards;
