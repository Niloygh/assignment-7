import React from 'react';

const dataPromise = async function () {
    const res = await fetch('http://localhost:3000/data.json')
    const data = await res.json()
    return data;
}

const friendDetails = async({params}) => {
    const apps = await dataPromise()
    console.log(apps)
    
    const { id } = await params;
    console.log(id, 'params')


    const app = apps.find((app)=> app.id == id)
    console.log(app)

    
    return (
        <div>
            <h2>{app.name}</h2>
        </div>
    );
};

export default friendDetails;