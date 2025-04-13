import { createContext } from "react";

const ChatContext = createContext()

export const ChatProvider=({children})=>{

    const [roomId,setRoomId]

    return <ChatContext.Provider value={}>{children}</ChatContext.Provider>
}