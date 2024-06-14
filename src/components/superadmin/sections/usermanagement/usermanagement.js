import React, { useState } from 'react';
import Usermanagement from './components/usermanagement';
import User_report from './components/user_report';
import Group_permission from './components/group_permission';

const UserManagement = () => {

    
    const [activeComponent, setActiveComponent] = useState('Usermanagement');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Usermanagement':
                return <Usermanagement />;
            case 'User_report':
                return <User_report />;
            case 'Group_permission':
                return <Group_permission />;
            default:
                return <Usermanagement />;
        }
    };

    return (
        <div className='flex flex-col gap-4 mt-4 p-4'>
            <div className='flex justify-start gap-2 flex-wrap'>
                <button
                    onClick={() => setActiveComponent('Usermanagement')}
                    className={`px-3 py-1 rounded-xl ${
                        activeComponent === 'Usermanagement' ? 'bg-green-600 text-white' : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                    } transition-all duration-300`}
                >
                    + Add User
                </button>
                <button
                    onClick={() => setActiveComponent('User_report')}
                    className={`px-3 py-1 rounded-xl ${
                        activeComponent === 'User_report' ? 'bg-green-600 text-white' : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                    } transition-all duration-300`}
                >
                    User Report
                </button>
                <button
                    onClick={() => setActiveComponent('Group_permission')}
                    className={`px-3 py-1 rounded-xl ${
                        activeComponent === 'Group_permission' ? 'bg-green-600 text-white' : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                    } transition-all duration-300`}
                >
                    Group Permission
                </button>
            </div>

            <div className='mt-4'>
                {renderComponent()}
            </div>
        </div>
    );
}

export default UserManagement;
