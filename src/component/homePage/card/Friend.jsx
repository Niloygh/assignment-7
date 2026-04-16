import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Friend = ({ friend }) => {



    return (
        <Link href={`/${friend.id}`} className="">
            <div className='card card-body shadow border-slate-900 bg-white transition transform hover:scale-105 duration-300'>
                <Image
                    src={friend.picture}
                    alt="" width={70}
                    height={70}
                    className='mx-auto rounded-full' />
                <h1 className='text-xl font-bold'>{friend.name}</h1>
                <p className='gray'>{friend.days}d ago</p>
                <div className="flex gap-5 mx-auto">
                    {friend.tags.map((tag, ind) => <div key={ind} className='bg-[#CBFADB] font-semibold text-green px-3 py-1 rounded-3xl uppercase'>
                        <p>{tag}</p>
                    </div>)}
                </div>
                <div className="mx-auto">
                    <p className={`w-25 h-5.5 rounded-full uppercase ${friend.status === "almost due" ? 'yellow' : friend.status === 'overdue' ? 'red' : 'bg-green'}`}>{friend.status}</p>
                </div>
            </div>
        </Link>
    );
};

export default Friend;