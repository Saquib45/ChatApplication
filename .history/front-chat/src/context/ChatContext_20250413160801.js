import { createContext, use, useState } from "react";

const ChatContext = createContext()

export const ChatProvider=({children})=>{

    const [roomId,setRoomId]=useState("");
    const [currentUser,setCurrentUser]=useState("");

    return <ChatContext.Provider value={{roomId,currentUser,setCurrentUser,setRoomId}}>{children}</ChatContext.Provider>
}

const useChatContext=()=>
export default useChatContext=()=>useContext(ChatContext);