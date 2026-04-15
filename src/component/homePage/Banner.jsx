import React from 'react';
import { HiPlus } from 'react-icons/hi';

const Banner = () => {
    return (
        <div className="bg-slate-50">
            <div className='container mx-auto'>
                {/* header  */}
                <div className="text-center space-y-7 pt-8">
                    <h2 className='font-bold text-5xl'> Friends to keep close in your life</h2>
                    <p className='gray max-w-150 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className="">
                        <button className='btn bg-green'><HiPlus /> Add a friend</button>
                    </div>
                </div>

                {/* total card  */}
                <div className="grid grid-cols-4 gap-5">
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

            </div>
        </div>
    );
};

export default Banner;