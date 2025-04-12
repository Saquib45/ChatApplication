import React from "react";

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

            {/* input message container */}
            <div className="fixed bottom-4 w-full h-10">
                <div className="h-full gap-4 pr-10 flex items-center justify-between  dark:border-gray-600 dark:bg-gray-900 rounded-full w-1/2 mx-auto">
                    <input type="text" placeholder="Type you message here..." className="dark:border-gray-600  w-full border dark:bg-gray-800 rounded-full px-5 py-2 h-full focus:outline-none"/>
                    
                    <div className="">
                    <button className="dark:bg-green-700  text-gray-300 h-full w-1/3 hover:dark:bg-green-600 rounded-full">
                        Attach 
                    </button><button className="dark:bg-green-700  text-gray-300 h-full w-1/3 hover:dark:bg-green-600 rounded-full">
                        Send 
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;    