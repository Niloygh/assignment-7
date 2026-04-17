'use client'

import { InstallAppsContext } from '@/context/InstalledAppsProvider';
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';
import { RiArrowDropDownLine } from 'react-icons/ri';

const timeline = () => {

    const { notification, setNotification } = useContext(InstallAppsContext)
    console.log(notification, 'notification')
    
    
    return (
        <div className='bg-slate-100 '>
            <div className="container mx-auto py-10 ">
                <div className="">
                    <h1 className='font-bold text-5xl'>Timeline</h1>

                    <div className="flex justify-between items-center p-2 w-60 mt-5 shadow bg-white/40">
                        <p>Filter timeline</p>
                        <RiArrowDropDownLine />
                    </div>
                </div>
                

                <div className="">
                    {notification.map(nData => <div 
                    key={nData.id}
                    className='shadow bg-white rounded-md mt-5 py-6 px-5'>

                        <div className="flex gap-4 items-center">
                            <div className="text-3xl">{nData.type === 'Call' ? <FiPhoneCall /> :nData.type === 'Text' ? <PiChatTextLight /> : <IoVideocamOutline />}</div>

                            <div className="">
                                <h1 className='font-semibold'>{nData.type === 'Call' ? 'MeetUp' : nData.type}</h1>
                                <p>{nData.date}</p>
                            </div>
                        </div>


                    </div>) }
                </div>

            </div>
        </div>
    );
};

export default timeline;