'use client'

import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';

const CallData = ({callDt}) => {
    console.log(callDt)

    const [data, setData] = useState([])
    // console.log(data)
    
    const handleCall = (callDt) => {
        setData([...data, callDt])
    }
    
    
    return (
        <div
            onClick={() => handleCall(callDt)}
            className="card-body items-center text-center bg-slate-100 rounded-md cursor-pointer transition duration-150 hover:shadow-md active:scale-95 active:shadow-inner ">

            <div className="text-3xl">{callDt.type == 'Call' ? <FiPhoneCall /> : callDt.type == 'Text' ? <PiChatTextLight /> : <IoVideocamOutline />}</div>
            <p className="font-medium">{callDt.type}</p>

        </div>
    );
};

export default CallData;