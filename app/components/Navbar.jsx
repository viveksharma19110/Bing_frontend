"use client"
import React from 'react';
import {
    Menu,
    Search as SearchIcon,
    User,
    Shield,
    Smartphone,
    MoreHorizontal,
    Mic,
    Camera,
} from 'lucide-react';

const Navbar = () => {
    return (
        <div className="relative min-h-[400px]  bg-gradient-to-b from-gray-900/50 to-transparent">
            <nav className="flex items-center justify-between px-3 py-4">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1">
                        <div className="grid grid-cols-2 gap-[1px]">
                            <div className="w-3 h-3 bg-red-500"></div>
                            <div className="w-3 h-3 bg-green-500"></div>
                            <div className="w-3 h-3 bg-blue-500"></div>
                            <div className="w-3 h-3 bg-yellow-500"></div>
                        </div>
                        <span className="text-white text-xl font-semibold">Microsoft Bing</span>
                    </div>
                    <div className="flex items-center space-x-4 gap-6 pl-10">
                        <div className="flex items-center space-x-1 px-2 py-0.5 border-gray-200">
                            <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                            <span className="text-white text-sm font-normal hover:text-gray-300 ">Copilot</span>
                        </div>
                        <a href="https://www.bing.com/images?FORM=Z9LH1" className="text-white text- font-normal hover:text-gray-300 ">Images</a>
                        <a href="https://www.bing.com/videos/onecolumn/landing?form=Z9LH1" className="text-white text-sm font-normal hover:text-gray-300 ">Videos</a>
                        <a href="https://www.bing.com/shop?FORM=Z9LHS4" className="text-white text-sm font-normal hover:text-gray-300 ">Shopping</a>
                        <a href="https://www.bing.com/maps?FORM=Z9LH2&cp=28.727926%7E77.289505&lvl=11.0" className="text-white text-sm font-normal hover:text-gray-300 ">Maps</a>
                        <a href="https://www.bing.com/news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3" className="text-white text-sm font-normal hover:text-gray-300 ">News</a>
                        <div className="relative group">
                            <button className="text-xs text-white">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Translate</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Travel</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Real Estate</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MSN</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Start.gg</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Health</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Online Games</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Microsoft 365</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-6 pr-6">
                    <button className="flex items-center space-x-1 text-xs text-white hover:underline">
                        <span>Sign in</span>
                    </button>

                    <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                        <User className="w-4 h-4 text-gray-700" />
                    </div>

                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30">
                        <Shield className="w-4 h-4 text-white" />
                    </button>

                    <div className="flex items-center space-x-1">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30">
                            <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white">Mobile</span>
                    </div>

                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30">
                        <Menu className="w-5 h-5 text-white" />
                    </button>
                </div>
            </nav>

            <div className="container mx-auto px-4 mt-20">
                <div className="flex flex-col w-full max-w-3xl mx-auto">
                    <div className="relative w-full">
                        <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200 hover:border-gray-300 transition-all">
                            <div className="absolute left-4">
                                <SearchIcon className="w-5 h-5 text-gray-400" />
                            </div>

                            <input
                                type="text"
                                placeholder="Search the web"
                                className="w-full py-3 px-12 text-base text-gray-800 placeholder-gray-500 rounded-full focus:outline-none"
                            />

                            <div className="absolute right-4 flex items-center space-x-3">
                                <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
                                    <Mic className="w-5 h-5 text-blue-500" />
                                </button>
                                <button className="hover:bg-gray-100 p-1 rounded-full transition-colors">
                                    <Camera className="w-5 h-5 text-blue-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex  ml-4 space-x-2 text-sm text-white mt-2">
                        <span>Languages:</span>
                        <div className="flex flex-wrap gap-2">
                            <button className="shadow-lg p-0 hover:underline">हिंदी</button>
                            <button className="shadow-lg p-0 hover:underline">বাংলা</button>
                            <button className="shadow-lg p-0 hover:underline">اردو</button>
                            <button className="shadow-lg p-0 hover:underline">ਪੰਜਾਬੀ</button>
                            <button className="shadow-lg p-0 hover:underline">मराठी</button>
                            <button className="shadow-lg p-0 hover:underline">తెలుగు</button>
                            <button className="shadow-lg p-0 hover:underline">தமிழ்</button>
                            <button className="shadow-lg p-0 hover:underline">ಕನ್ನಡ</button>
                            <button className="shadow-lg p-0 hover:underline">ગુજરાતી</button>
                            <button className="shadow-lg p-0 hover:underline">മലയാളം</button>
                            <button className="shadow-lg p-0 hover:underline">ଓଡ଼ିଆ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;