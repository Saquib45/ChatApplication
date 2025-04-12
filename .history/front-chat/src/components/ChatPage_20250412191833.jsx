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
            <div className="fixed bottom-2 w-full h-16">
                <div className="h-full border dark:border-gray-700 dark:bg-gray-900 rounded w-2/3 mx-auto">
                    <input type="text" placeholder="Type you message here..." className="dark:border-gray-700 dark:bg-gray-900 px-3 py-2 h-full"/>
                    <button className="dark:bg-green-700 text-gray-300 px-3 py-2 hover:dark:bg-green-600 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M2.003 10a1 1 0 01.117-1.993L2.003 8h16a1 1 0 01.117 1.993L18.003 10H2.003zM3.293 7.293a1 1 0 011.414-1.414l3.293 3.293-3.293 3.293a1 1 0 01-1.414-1.414L6.586 10H3.293z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;    