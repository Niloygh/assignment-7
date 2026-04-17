import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="bg-green text-center pt-10 pb-8 px-2">
            <div className='container mx-auto space-y-4'>
                <h2 className='text-3xl md:text-6xl font-bold'>KeenKeeper</h2>
                <p className='text-white/60'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <p>Social Links</p>
                <div className="flex justify-center items-center gap-4 ">
                    <span className='bg-white text-black p-3 rounded-full transition transform hover:scale-110 duration-300'><FaInstagram className='text-xl' /></span>

                    <span className='bg-white text-black p-3 rounded-full transition transform hover:scale-110 duration-300'><ImFacebook2 className='text-xl' /></span>

                    <span className='bg-white text-black p-3 rounded-full transition transform hover:scale-110 duration-300'><FaXTwitter className='text-xl' /></span>
                </div>

                <hr className='text-white/10 mt-10 mb-7'/>

                <div className="flex flex-col md:flex-row mt-3 md:mt-0 justify-between text-white/60">
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex justify-center gap-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;