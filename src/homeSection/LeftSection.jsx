import React from 'react';
import musicLogo from '../utils/music.png';
import DreamMusic from '../utils/DreamMusic.png';
import Home from '../utils/Home.png';
import Trends from '../utils/trends.png';
import audio from '../utils/audio.png';
import arrows from '../utils/arrows.png';
import LogOut from '../utils/LogOut.png';
import Settings from '../utils/Settings.png';

export const LeftSection = () => {
    return (
        <div className="flex flex-col h-full md:h-screen bg-black text-white px-4 py-4 md:px-6 lg:px-8 xl:px-12">

            {/* Logo Section */}
            <div className="flex justify-center md:justify-start items-center gap-4">
                <img src={musicLogo} alt="music-logo" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                <img
                    src={DreamMusic}
                    alt="dream-music-logo"
                    className="w-28 md:w-36 lg:w-44 xl:w-52"
                />
            </div>

            {/* Menu Section */}
            <div className="flex flex-col mt-10 gap-6">
                <p className="text-xs md:text-sm lg:text-base tracking-wide">MENU</p>
                <div className="flex items-center gap-4">
                    <img src={Home} alt="home" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <p className="text-sm md:text-base lg:text-lg">Home</p>
                </div>
                <div className="flex items-center gap-4">
                    <img src={Trends} alt="trends" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <p className="text-sm md:text-base lg:text-lg">Trends</p>
                </div>
                <div className="flex items-center gap-4">
                    <img src={audio} alt="library" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <p className="text-sm md:text-base lg:text-lg">Library</p>
                </div>
                <div className="flex items-center gap-4">
                    <img src={arrows} alt="discover" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <p className="text-sm md:text-base lg:text-lg">Discover</p>
                </div>
            </div>

            {/* General Section */}
            <div className="flex flex-col mt-auto gap-6">
                <p className="text-xs md:text-sm lg:text-base tracking-wide">GENERAL</p>
                <div className="flex items-center gap-4">
                    <img src={Settings} alt="settings" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <p className="text-sm md:text-base lg:text-lg">Settings</p>
                </div>
                <div className="flex items-center gap-4">
                    <img src={LogOut} alt="logout" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    <p className="text-sm md:text-base lg:text-lg">Log Out</p>
                </div>
            </div>

        </div>
    );
};
