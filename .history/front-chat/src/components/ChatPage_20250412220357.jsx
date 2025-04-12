import React from "react";
import {MdAttachFile, MdSend} from "react-icons/md";
import { useState ,useRef } from "react";

function ChatPage() {

    const [messages,setMessages]=useState([{content:"hello",sender:"sakib"},{content:"hi",sender:"sami"} ]);
    const [input,setInput]=useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient,setStompClient]=useState(null);
    const [roomId,setRoomId]=useState("");


    return(
        <div className="">
            {/* Header of the page */}
            <header className=" dark:border-gray-700 fixed w-full dark:bg-gray-900 py-5 flex justify-around items-center">

                {/* room name container */}
                <div>
                    <h1 className="text-xl font-semibold">Room: <span>Family Room</span></h1>
                </div>

                {/* username container */}
                <div>
                    <h1 className="text-xl font-semibold">
                        User: <span>sakib Maniyar</span>
                    </h1>
                </div>

                {/* button: leave room container */}
                <div>
                    <button className="dark:bg-red-500 hover:dark:bg-red-700 px-3 py-2 rounded-full text-gray-300">Leave Room</button>
                </div>
            </header>

            {/* chat container */}
            <main className="py-20 border w-2/3 dark:bg-slate-600 text-gray-300  mx-auto h-screen overflow-auto">
                {
                    messages.map((message,index)=>(
                        <div key={index} className="my-2.5 bg-blue-600 p-2 rounded-full">
                            <div className="flex flex-row gap-2">
                                <img className="h-10 w-10" src="https://avatar.iran.liara.run/public/43" alt="" />
                                <div className="border flex flex-col gap-1">
                                    <p className="text-sm font-bold">{message.sender}</p>
                                    <p>{message.content}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </main>


            {/* input message container */}
            <div className="fixed bottom-4 w-full h-12">
                <div className="h-full gap-4 pr-10 flex items-center justify-between  dark:border-gray-600 dark:bg-gray-900 rounded-full w-1/2 mx-auto">
                    
                    <input type="text" placeholder="Type you message here..." 
                    
                        className="dark:border-gray-600  w-full border dark:bg-gray-800 rounded-full px-5 py-2 h-full  focus:outline-none"
                        
                    />
                    
                    <div className="flex gap-1">
                    <button className="dark:bg-purple-600  text-gray-300 h-10 w-10 flex justify-center items-center hover:dark:bg-purple-700 rounded-full">
                        <MdAttachFile size={20}/>     
                    </button>
                    <button className="dark:bg-green-700  text-gray-300 h-10 w-10 flex justify-center items-center hover:dark:bg-green-800 rounded-full">
                        <MdSend size={20}/> 
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;    