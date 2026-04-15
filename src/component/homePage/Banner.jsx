import React from 'react';
import { HiPlus } from 'react-icons/hi';
import Friend from './card/Friend';

const dataPromise = async function () {
    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json()
    return data;
}

const Banner = async () => {
    const data = await dataPromise()
    console.log(data)

    return (
        <div className="bg-slate-100">
            <div className='container mx-auto py-10 px-2'>
                {/* header  */}
                <div className="text-center space-y-5">
                    <h2 className='font-bold text-5xl'> Friends to keep close in your life</h2>
                    <p className='gray max-w-150 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className="">
                        <button className='btn bg-green'><HiPlus /> Add a friend</button>
                    </div>
                </div>

                {/* total box  */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    <div className="card card-body shadow bg-white text-center">
                        <h2 className='text-green font-semibold text-3xl'>10</h2>
                        <p className='gray'>Total Friend</p>
                    </div>
                    <div className="card card-body shadow bg-white text-center">
                        <h2 className='text-green font-semibold text-3xl'>3</h2>
                        <p className='gray'>On Track</p>
                    </div>
                    <div className="card card-body shadow bg-white text-center">
                        <h2 className='text-green font-semibold text-3xl'>6</h2>
                        <p className='gray'>Need Attention</p>
                    </div>
                    <div className="card card-body shadow bg-white text-center">
                        <h2 className='text-green font-semibold text-3xl'>12</h2>
                        <p className='gray'>Interactions This Month</p>
                    </div>
                </div>

                <hr className='text-gray-300 my-10' />

                {/* all card  */}
                <div className="">
                    <h2 className='text-2xl font-semibold mb-5'>Your Friend</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        {
                            data.map(friend => <Friend key={friend.id} friend={friend} />)
                        }
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Banner;