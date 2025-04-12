import React from "react";

function ChatPage() {

    return(
        <div className="">
            <header className="border dark:border-gray-700 flex justify-around">

                {/* room name container */}
                <div>
                    <h1 className="text-xl font-semibold">Room: <span>Family Room</span></h1>
                </div>

                {/* username container */}
                <h1 className="text-xl font-semibold">
                    User: <span>sakib Maniyar</span>
                </h1>
                <div>
                    
                </div>

                {/* button: leave room container */}
                <div>
                    <button className="dark:bg-red-500 hover:dark:bg-red-700 px-3 py-2 rounded-full text-gray-300">Leave Room</button>
                </div>
            </header>
        </div>
    )
}

export default ChatPage;    