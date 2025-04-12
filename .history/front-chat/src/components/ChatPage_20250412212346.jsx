import React from "react";
import {MdAttachFile} from "react-icons/md";
function ChatPage() {

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
                <div>


                </div>

            </main>


            {/* input message container */}
            <div className="fixed bottom-4 w-full h-10">
                <div className="h-full gap-4 pr-10 flex items-center justify-between  dark:border-gray-600 dark:bg-gray-900 rounded-full w-1/2 mx-auto">
                    
                    <input type="text" placeholder="Type you message here..." 
                    
                        className="dark:border-gray-600  w-full border dark:bg-gray-800 rounded-full px-5 py-2  focus:outline-none"
                        
                    />
                    
                    <div className="flex gap-1">
                    <button className="dark:bg-purple-600  text-gray-300 h-10 w-20 hover:dark:bg-purple-700 rounded-full">
                        <Attach> 
                    </button><button className="dark:bg-green-700  text-gray-300 h-10 w-20 hover:dark:bg-green-800 rounded-full">
                        Send 
                    </button>
                    </div>
                </div>
            </div>

            {/* <div className="fixed bottom-4 w-full px-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 dark:border-gray-600 dark:bg-gray-900 rounded-full max-w-3xl mx-auto px-4 py-2">
                <input
                type="text"
                placeholder="Type your message here..."
                className="dark:border-gray-600 w-full border dark:bg-gray-800 rounded-full px-4 py-2 focus:outline-none"
                />
                <div className="flex w-full sm:w-auto gap-2">
                <button className="dark:bg-purple-600 text-gray-300 h-10 w-full sm:w-auto px-4 hover:dark:bg-purple-700 rounded-full">
                    Attach
                </button>
                <button className="dark:bg-green-700 text-gray-300 h-10 w-full sm:w-auto px-4 hover:dark:bg-green-800 rounded-full">
                    Send
                </button>
                </div>
            </div>
            </div> */}


        </div>
    )
}

export default ChatPage;    