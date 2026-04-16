import CallData from '@/component/callData/CallData';
import Image from 'next/image';
import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { PiChatTextLight } from 'react-icons/pi';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';


const dataPromise = async function () {
    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json()
    return data;
}

// const callDataPromise = async function () {
//     const res = await fetch('http://localhost:3000/callData.json')
//     const data = await res.json()
//     return data
// }



const friendDetails = async ({ params }) => {
    const apps = await dataPromise()

    // const callDts = await callDataPromise()
    // // console.log(callDts)

    const { id } = await params;
    // console.log(id, 'params')

    const app = apps.find((app) => app.id == id)
    // console.log(app)

    return (
        <div className='bg-slate-100'>

            <div className="container mx-auto py-10 flex gap-5 ">
                <div className="w-1/4 text-center space-y-5">
                    <div className="shadow bg-white  space-y-2 py-5 rounded-md">
                        <Image src={app.picture} alt="" width={100} height={100} className='mx-auto rounded-full' priority />
                        <h2 className='text-xl font-bold'>{app.name}</h2>

                        <div className="flex gap-5 mx-auto">
                            {app.tags.map((tag, ind) => <div key={ind} className='bg-[#CBFADB] font-semibold text-green px-3 py-1 rounded-3xl uppercase mx-auto'>
                                <p>{tag}</p>
                            </div>)}
                        </div>
                        <div className="flex justify-center">
                            <p className={`w-27 h-6 rounded-full text-center uppercase ${app.status === "almost due" ? 'yellow' : app.status === 'overdue' ? 'red' : 'bg-green'}`}>{app.status}</p>
                        </div>

                        <p className='gray'>{app.bio}</p>
                        <p className='gray'>email: {app.email}</p>

                    </div>

                    <div className="shadow bg-white space-y-2 py-3 font-semibold rounded-md">
                        <p className='flex justify-center items-center gap-2'> <span><RiNotificationSnoozeLine /></span> <span>Snooze 2 weeks</span></p>
                    </div>

                    <div className="shadow bg-white space-y-2 py-3 font-semibold rounded-md">
                        <p className='flex justify-center items-center gap-2'> <span><FiArchive /></span> <span>Archive</span></p>
                    </div>

                    <div className="shadow bg-white space-y-2 py-3 font-semibold rounded-md">
                        <p className='flex justify-center items-center gap-2'> <span><RiDeleteBin6Line color='red' /></span> <span>Snooze 2 weeks</span></p>
                    </div>
                </div>

                <div className="flex-1 space-y-5">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="bg-white rounded-md py-5 text-center shadow space-y-2">
                            <h1 className='font-semibold text-green text-3xl'>62</h1>
                            <p className='gray'>Days Since Contact</p>
                        </div>

                        <div className="bg-white rounded-md py-5 text-center shadow space-y-2">
                            <h1 className='font-semibold text-green text-3xl'>30</h1>
                            <p className='gray'>Goal (Days)</p>
                        </div>

                        <div className="bg-white rounded-md py-5 text-center shadow space-y-2">
                            <h1 className='font-semibold text-green text-3xl'>Feb 27, 2026</h1>
                            <p className='gray'>Next Due</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-between bg-white rounded-md px-5 py-6 shadow space-y-2">
                            <div className="space-y-2">
                                <h1 className='font-semibold'>Relationship Goal</h1>
                                <p className='gray'>Connect every <span className='font-semibold text-black'>30 days</span></p>
                            </div>
                            <button className='btn '>Edit</button>
                        </div>
                    </div>




                    {/* responsive side   */}
                    
                    <CallData />




                    {/* Recent Interactions */}
                    <div className="bg-white p-5">
                        <div className="flex justify-between">
                            <h1>Recent Interactions</h1>
                            <button className='btn'><FaHistory />Full History</button>
                        </div>

                        <div className="px-5">
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                    <p><PiChatTextLight className='text-2xl' /></p>
                                    <div className="">
                                        <h2>Text</h2>
                                        <p className='gray'>Asked for career advice</p>
                                    </div>
                                </div>
                                <p className='gray'>Jan 28, 2026</p>
                            </div>
                            <hr className='text-gray-200 my-3' />

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                    <p><FiPhoneCall className='text-2xl' /></p>
                                    <div className="">
                                        <h2>Meetup</h2>
                                        <p className='gray'>Industry conference meetup</p>
                                    </div>
                                </div>
                                <p className='gray'>Jan 28, 2026</p>
                            </div>
                            <hr className='text-gray-200 my-3' />

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                    <p><IoVideocamOutline className='text-2xl' /></p>
                                    <div className="">
                                        <h2>Video</h2>
                                        <p className='gray'>Asked for career advice</p>
                                    </div>
                                </div>
                                <p className='gray'>Jan 28, 2026</p>
                            </div>
                            <hr className='text-gray-200 my-3' />

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2">
                                    <p><PiChatTextLight className='text-2xl' /></p>
                                    <div className="">
                                        <h2>Text</h2>
                                        <p className='gray'>Asked for career advice</p>
                                    </div>
                                </div>
                                <p className='gray'>Jan 28, 2026</p>
                            </div>
                        </div>
                    </div>





                </div>

            </div>





        </div>
    );
};

export default friendDetails;