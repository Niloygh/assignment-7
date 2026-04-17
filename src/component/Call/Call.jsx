'use client'

import { InstallAppsContext } from '@/context/InstalledAppsProvider';
import React, { useContext, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';
import { toast } from 'react-toastify';

const Call = ({app}) => {

    const { timeline, setTimeline } = useContext(InstallAppsContext)

    console.log(timeline)
    
    const handleData = (app, type) => {
        setTimeline((prev) => [...prev, {...app, time: new Date(), type}])
        toast.success(`${type} added`);
    }

    return (
        <div className='grid grid-cols-3 gap-5'>
            <div
                onClick={()=> handleData(app, 'call')}
                className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">

                <p><FiPhoneCall className='text-2xl' /></p>
                <p>call</p>
            </div>


            <div
                onClick={()=> handleData(app, 'text')}
                className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">

                <p><PiChatTextLight className='text-2xl' /></p>
                <p>Text</p>
            </div>


            <div
                onClick={()=> handleData(app, 'video')}
                className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">

                <p><IoVideocamOutline className='text-2xl' /></p>
                <p>Video</p>
            </div>
        </div>
    );
};

export default Call;