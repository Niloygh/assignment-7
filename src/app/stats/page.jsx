'use client'

import { InstallAppsContext } from '@/context/InstalledAppsProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import timeline from '../timeline/page';





const stats = () => {
    const { timeline } = useContext(InstallAppsContext)
    console.log(timeline)

    const textCount = timeline.filter(item => item.type === 'text').length;
    const callCount = timeline.filter(item => item.type === 'call').length;
    const videoCount = timeline.filter(item => item.type === 'video').length;


    const data = [
        { name: 'Text', value: textCount, fill: '#7E35E1' },
        { name: 'Call', value: callCount, fill: '#244D3F' },
        { name: 'Video', value: videoCount, fill: '#37A163' },
    ];




    return (
        <div className="bg-slate-100 py-10">
            <div className="container mx-auto ">
                <h2 className='text-4xl'>Friendship Analytics</h2>
                <div className="bg-white mt-10 p-5">
                    <p className='text-green'>By Interaction Type</p>
                    {
                        timeline.length === 0 ? 
                        <div className='py-20 flex justify-center items-center font-bold text-3xl '>No Chart</div> : 

                        <div className='flex justify-center items-center py-10'>
                            <PieChart style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                />
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default stats;