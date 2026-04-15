import React from 'react';


const dataPromise = async function () {
    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json()
    return data;
}

const Card = async () => {

    const data = await dataPromise() 
    console.log(data)

    
    return (
        <div>
            card 
        </div>
    );
};

export default Card;