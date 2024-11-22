import React from 'react';
import { Home, Search, UserCircle, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const menuItems = [
        { icon: Home, label: 'Home', path: '/Home' },
        { icon: Search, label: 'Enquiries', path: '/Enquiry' },
        //{ icon: ShoppingCart, label: 'Sales', path: '/sales' },
        //{ icon: Package, label: 'Products', path: '/products' },
        { icon: UserCircle, label: 'Account', path: '/account' },
    ];
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigate('/login');
    }
    const user = JSON.parse(localStorage.getItem('user'))///getting things we need

    return (
        <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col"
        >

            <div className=" p-6 border-b ">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent "
                >
                    CCBOND
                    <button className=" text-gray-600 hover:text-red-600 ml-20">
                        <LogOut className=" w-5 h-5 " onClick={logout} />
                    </button>
                </motion.h1>

            </div>

            <nav className="flex-1 py-6">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = useLocation.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition-colors ${isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''}`}
                        >
                            <Icon className="w-5 h-5 mr-3" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-9 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl font-medium text-blue-600">{user?.Name?.[0]}</span>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{user?.Name}</p>

                    <p className="text-xs text-gray-500">{user?.email}</p>
                </div>

            </div>
        </motion.div>
    );
};

export default Sidebar;
