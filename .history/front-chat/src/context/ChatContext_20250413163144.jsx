import { createContext, use, useState } from "react";

const ChatContext = createContext()

export const ChatProvider=({children})=>{

    const [roomId,setRoomId]=useState("");
    const [currentUser,setCurrentUser]=useState("");
    const [connected,setConnected]=useState(false);
    return <ChatContext.Provider value={{roomId,currentUser,connected,setRoomId,setCurrentUser,setConnected}}>{children}</ChatContext.Provider>
}

const useChatContext=()=>(ChatContext);
export default useChatContext;