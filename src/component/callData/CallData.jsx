'use client'

import { InstallAppsContext } from '@/context/InstalledAppsProvider';
import React, { useContext, useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';



const CallData = ({ callDt }) => {
    // console.log(callDt)

    const { notification, setNotification } = useContext(InstallAppsContext)
    console.log(notification,  'something') 

    const handleNotification = () => {
        console.log('handle notification now')
        setNotification([...notification, callDt])
    }


    return (
        <div
            onClick={handleNotification}
            className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">
            <div className="text-3xl">{callDt.type === 'Call' ? <FiPhoneCall /> :callDt.type === 'Text' ? <PiChatTextLight /> : <IoVideocamOutline />}</div>
            <p className="font-medium">{callDt.type}</p>
        </div>
    );
};

export default CallData;