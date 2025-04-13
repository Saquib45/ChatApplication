import { createContext, useState } from "react";

const ChatContext = createContext()

export const ChatProvider=({children})=>{

    const [roomId,setRoomId]=useState("");
    const [currentUser,setCurrentUs]

    return <ChatContext.Provider value={}>{children}</ChatContext.Provider>
}