import React from 'react';
import { LeftSection } from './homeSection/LeftSection';
import { Main } from './homeSection/Main';

export const Home = () => {
    return (
        <div className="w-screen h-screen flex flex-col md:flex-row bg-black">

            {/* Left Section */}
            <div className="w-full md:w-[30%] lg:w-[20%] h-[10%] md:h-full bg-black">
                <LeftSection />
            </div>

            {/* Main Section */}
            <div className="w-full md:w-[70%] lg:w-[80%] h-full">
                <Main />
            </div>

        </div>
    );
};
