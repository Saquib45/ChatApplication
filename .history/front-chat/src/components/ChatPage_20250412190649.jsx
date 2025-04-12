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
                <div className="h-full border w-2/3 mx-auto">

                </div>
            </div>
        </div>
    )
}

export default ChatPage;    