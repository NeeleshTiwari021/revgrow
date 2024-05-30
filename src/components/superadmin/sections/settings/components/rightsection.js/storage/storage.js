import React, { useState } from 'react';
import Local from './components/local';
import Aws from './components/aws';
import Wasabi from './components/wasabi';

const Storage = () => {
    const [activeComponent, setActiveComponent] = useState('Local');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Local':
                return <Local />;
            case 'Aws':
                return <Aws />;
            case 'Wasabi':
                return <Wasabi />;
            default:
                return null;
        }
    };

    return (
        <div className='shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4'>
            <p className='font-medium text-lg'>ReCaptcha Settings</p>
            <hr />

            <div className='flex gap-2 mb-8'>
                <button
                    className={`px-5 py-1 border-2 rounded-lg transition-all duration-300 ${activeComponent === 'Local' ? 'bg-green-700 text-white' : 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'}`}
                    onClick={() => setActiveComponent('Local')}
                >
                    Local
                </button>
                <button
                    className={`px-5 py-1 border-2 rounded-lg transition-all duration-300 ${activeComponent === 'Aws' ? 'bg-green-700 text-white' : 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'}`}
                    onClick={() => setActiveComponent('Aws')}
                >
                    AWS
                </button>
                <button
                    className={`px-5 py-1 border-2 rounded-lg transition-all duration-300 ${activeComponent === 'Wasabi' ? 'bg-green-700 text-white' : 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'}`}
                    onClick={() => setActiveComponent('Wasabi')}
                >
                    Wasabi
                </button>
            </div>

            {renderComponent()}
        </div>
    );
};

export default Storage;
