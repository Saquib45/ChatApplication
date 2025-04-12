import React from "react";

function ChatPage() {

    return(
        <div className="">
            <header>

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
                    <button className="dark:bg-red-500 dark:bg-red-700"></button>
                </div>
            </header>
        </div>
    )
}

export default ChatPage;    