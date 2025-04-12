import React from 'react';

const JoinCreateChat = () => {

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className=" p-8 w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
                <h1>Join Room / Creat Room...</h1>
                <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                <input type="text" />
            </div>
        </div>
    )
}

export default JoinCreateChat