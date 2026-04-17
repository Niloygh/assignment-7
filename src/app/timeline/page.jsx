'use client'

import { InstallAppsContext } from '@/context/InstalledAppsProvider';
import React, { useContext, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';
import { RiArrowDropDownLine } from 'react-icons/ri';

const timeline = () => {

    const { timeline, setTimeline } = useContext(InstallAppsContext)
    console.log(timeline, 'timeline')

    const [sortingType, setSortingType] = useState('')
    console.log(sortingType)

    const [sortData , setSortData] = useState(timeline)
    
    const handleFilter = (timeline, type) => {
        setSortingType(type.toUpperCase())
        const filter = timeline.filter(data => data.type == type)
        // setTimeline(filter)
        setSortData(filter)
    }

    return (
        <div className='bg-slate-100 '>
            <div className="container mx-auto py-10 ">
                {/* <div className="">
                    <h1 className='font-bold text-5xl'>Timeline</h1>

                    <div className="flex justify-between items-center p-2 w-60 mt-5 shadow bg-white/40">
                        <p>Filter timeline</p>
                        <RiArrowDropDownLine />
                    </div>
                </div> */}

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn my-5">

                        <div className="flex justify-between items-center py-2 w-60 ">
                            <p>{sortingType === "" ? "Filter timeline" : sortingType }</p>
                            <RiArrowDropDownLine />
                        </div>
                        
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleFilter(timeline, 'call') }><a>Call</a></li>
                        <li onClick={() => handleFilter(timeline, 'text') }><a>Text</a></li>
                        <li onClick={() => handleFilter(timeline, 'video') }><a>Video</a></li>
                        
                    </ul>
                </div>





                <div className="">
                    {sortData.map((nData, index) => <div
                        key={index}
                        className='shadow bg-white rounded-md mt-5 py-6 px-5'>

                        <div className="flex gap-4 items-center">
                            <div className="text-3xl">{nData.type === 'call' ? <FiPhoneCall /> : nData.type === 'text' ? <PiChatTextLight /> : <IoVideocamOutline />}</div>

                            <div className="">
                                <h1 className='font-semibold'>
                                    <span className='font-bold text-green text-xl'>{nData.type === 'call' ? 'MeetUp' : nData.type}</span> with {nData.name} 
                                </h1>
                                <p>{new Date(nData.time).toLocaleString()}</p>
                            </div>
                        </div>


                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default timeline;