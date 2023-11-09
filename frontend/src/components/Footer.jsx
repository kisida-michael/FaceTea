import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 py-4 h-[26rem]">
            <div className="container mx-auto px-4">
                <nav className="flex justify-center space-x-8">
                    <a href="#menu" className="text-gray-400 hover:text-white">
                        Menu
                    </a>
                    <a href="#reviews" className="text-gray-400 hover:text-white">
                        Reviews
                    </a>
                    <a href="#contact" className="text-gray-400 hover:text-white">
                        Contact
                    </a>
                    <a href="/lake-mary" className="text-gray-400 hover:text-white">
                        Locations: Lake Mary
                    </a>
                    <a href="/orange-city" className="text-gray-400 hover:text-white">
                        Locations: Orange City
                    </a>
                </nav>
                <p className="text-center text-gray-400 text-sm mt-8">
                    © 2023 FaceTea. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
