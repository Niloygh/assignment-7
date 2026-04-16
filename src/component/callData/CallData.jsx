'use client'

import React, { useContext, useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';



const CallData = () => {

    // const [data, setData] = useContext([]) 
    // console.log(data)

    const handleCall = (callDt) => {
        setData([...data, callDt])
    }


    return (
        <div className="bg-white px-5 py-6 rounded-md shadow space-y-3">
            <p>Quick Check-In</p>

            <div className=" grid grid-cols-3 gap-5 ">
                <div 
                
                className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">
                    <div className="text-3xl"><FiPhoneCall /></div>
                    <p className="font-medium">Call</p>
                </div>
                <div 

                className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner">
                    <div className="text-3xl"><PiChatTextLight /></div>
                    <p className="font-medium">Text</p>
                </div>
                <div 
                
                className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">
                    <div className="text-3xl"><IoVideocamOutline /></div>
                    <p className="font-medium">Video</p>
                </div>
            </div>
        </div>
    );
};

export default CallData;