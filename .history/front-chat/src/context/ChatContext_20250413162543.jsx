import { createContext, use, useState } from "react";

const ChatContext = createContext()

export const ChatProvider=({children})=>{

    const [roomId,setRoomId]=useState("");
    const [currentUser,setCurrentUser]=useState("");
    const 
    return <ChatContext.Provider value={{roomId,currentUser,setRoomId,setCurrentUser}}>{children}</ChatContext.Provider>
}

const useChatContext=()=>useContext(ChatContext);
export default useChatContext;