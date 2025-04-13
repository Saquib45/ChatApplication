import React from 'react';
import { useState } from 'react';
import ChatIcon from '../assets/chat.png'
import toast from 'react-hot-toast';
const JoinCreateChat = () => {

    const [detail, setDetail] = useState({roomId:"",userName:""});

    function handleFormInputChange(event){
        setDetail({
            ...detail,
            [event.target.name]: event.target.value,
        });

    }

    function validateForm(){
        if(detail.roomId==="" || detail.userName===""){
            toast.error("Please Fill All The Fields");
            return false;
        }
        return true;
    }

    function joinChat(){
        if(validateForm()){
            // join the chat room
        }
    }

    function createRoom(){
        if(validateForm()){
            // create the  room
            //call api to create room on backend
            try
        }
    }


    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className=" p-10 dark:border-gray-700 border w-full flex  flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
                <div>
                    <img src={ChatIcon} alt="" className='w-16 mx-auto ' />
                </div>
                <h1 className="text-2xl font-semibold text-center">Join Room / Creat Room...</h1>
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
                    <input onChange={handleFormInputChange} type="text" value={detail.userName} placeholder="Enter The Name" 
                        id="name"
                        className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-non focus:ring-2 focus:ring-blue-500'
                     />

                </div>
                
                {/* RoomId */}
                <div>
                    <label htmlFor="name" className="block font-medium mb-2">Room ID / New Room ID</label>
                    <input type="text" name='roomId' onChange={handleFormInputChange} value={detail.roomId} placeholder="Enter The Room ID"
                        id="name"
                        className='w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-non focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                {/* Button */}
                <div className="flex justify-center gap-3 mt-4">
                    <button onClick={joinChat} className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full text-gray-300">Join Room</button>    
                    <button onClick={createRoom} className="px-3 py-2 dark:bg-green-500 hover:dark:bg-green-800 rounded-full text-gray-200">Create Room</button>    
                
                </div>    
            </div>

        </div>
    )
}

export default JoinCreateChat