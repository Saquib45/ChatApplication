import React from 'react';

const JoinCreateChat = () => {

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className=" p-8 w-full flex  flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
                <h1 className="text-2xl font-semibold text-center">Join Room / Creat Room...</h1>
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                    <input type="text" 
                        id="name"
                        className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-non focus:ring-2 focus:ring-blue-500'
                     />

                </div>
                
                {/* RoomId */}
                <div className="flex justify-center gap-2">
                    <label htmlFor="name" className="block font-medium mb-2">Room ID / New Room ID</label>
                    <input type="text" 
                        id="name"
                        className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-non focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                {/* Button */}
                <div>
                    <button className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full text-gray-300">Join Room</button>    
                    <button className="px-3 py-2 dark:bg-green-500 hover:dark:bg-green-800 rounded-full text-gray-200">Create Room</button>    
                
                </div>    
            </div>

        </div>
    )
}

export default JoinCreateChat