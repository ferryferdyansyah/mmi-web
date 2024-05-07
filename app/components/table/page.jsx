// pages/form.js

import React from 'react';
import SidebarLayout from '../../layouts/Admin.js';

const Table = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3">
            <SidebarLayout />
            <div className="col-span-3">
                <div className="md:ml-64 sm:ml-0" style={{ backgroundColor: '#1D293B', height: '40vh' }}></div>
                <div className="md:ml-64 sm:ml-0" style={{ backgroundColor: 'white', minHeight: '60vh', paddingTop: '20vh' }}>
                    {/* TABEL DATA */}
                    <div className='bg-white' style={{ marginLeft: 20, marginRight: 20, marginTop: -450, height: '85vh', borderRadius: 5, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)' }}>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-dark border-0">
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-dark text-xl font-bold">Tabel Data</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
