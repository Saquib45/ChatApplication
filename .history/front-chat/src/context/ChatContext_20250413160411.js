import { createContext } from "react";

const ChatContext = createContext()

export const ChatProvider=({children})=>{
    return <ChatContext.Provider v>{children}</ChatContext.Provider>
}