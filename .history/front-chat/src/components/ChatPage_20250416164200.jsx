import React, { useEffect } from "react";
import {MdAttachFile, MdSend} from "react-icons/md";
import { useState ,useRef } from "react";
import  useChatContext  from "../context/ChatContext.jsx";
import { useNavigate } from "react-router";
import {Stomp} from "@stomp/stompjs"
import toast from 'react-hot-toast';
import SockJS from "sockjs-client";
import { baseURL } from "../config/AxiosHelper.js";
import { getMessages } from "../services/RoomService.js";

function ChatPage() {

    const {roomId,currentUser,connected}=useChatContext();
    
    // console.log(roomId);
    // console.log(currentUser);

    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!connected){
            navigate("/");
        }
    },[connected,roomId,currentUser,setConnected]);

    const [messages,setMessages]=useState([]);
    const [input,setInput]=useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient,setStompClient]=useState(null);
    // const [roomId,setRoomId]=useState("");
    // const [currentUser]=useState("sakib");




    //page init:
    //messages ko load karne honge
    useEffect(()=>{
        async function loadMessages(){
            try{
                const messages=await getMessages(roomId);
                console.log(messages);
                setMessages(messages);


            }catch(error){
                console.log(error)
            }
        }
        if(roomId){
            loadMessages();
        }
    })

    //stompClient ko init karne honge
        //subscribe

    useEffect(()=>{
        const connectedWebSocket=()=>{

            const sock=new SockJS(`${baseURL}/chat`);
            const client=Stomp.over(sock);

            client.connect({},()=>{
                setStompClient(client);
                toast.success("Connected");
                client.subscribe(`/topic/room/${roomId}`,(message)=>{
                    console.log(message);
                    const newMessage=JSON.parse(message.body);
                    setMessages((prev)=>[...prev,newMessage]);
                });
                
            });
        }  
        connectedWebSocket();
    },[roomId])  

    //send message handle


    const sendMessage=async()=>{
        if(stompClient && connected && input.trim()){
            console.log(input);

            const message={
                sender:currentUser,
                content:input,
                roomId:roomId
            }

            stompClient.send(`/app/sendMessage/${roomId}`,{},JSON.stringify(message));
            setInput("");
        }
    }

     return(
        <div className="">
            {/* Header of the page */}
            <header className=" dark:border-gray-700 fixed w-full dark:bg-gray-900 py-5 flex justify-around items-center">

                {/* room name container */}
                <div>
                    <h1 className="text-xl font-semibold">Room: <span>{roomId}</span></h1>
                </div>

                {/* username container */}
                <div>
                    <h1 className="text-xl font-semibold">
                        User: <span>{currentUser}</span>
                    </h1>
                </div>

                {/* button: leave room container */}
                <div>
                    <button className="dark:bg-red-500 hover:dark:bg-red-700 px-3 py-2 rounded-full text-gray-300">Leave Room</button>
                </div>
            </header>

            {/* chat container */}
            <main className="py-20 px-10 border w-2/3 dark:bg-slate-600 text-gray-300  mx-auto h-screen overflow-auto">
                {
                    messages.map((message,index)=>(
                        
                        <div key={index} className={`flex ${message.sender==currentUser ? 'justify-end' : 'justify-start'}`}>
                            <div  className={`my-2 ${message.sender==currentUser ? 'bg-green-800' : 'bg-gray-800'} rounded-lg p-2 w-1/2`}>
                                <div className="flex flex-row gap-2">
                                    <img className="h-10 w-10" src="https://avatar.iran.liara.run/public/43" alt="" />
                                    <div className=" flex flex-col gap-1">
                                        <p className="text-sm font-bold">{message.sender}</p>
                                        <p>{message.content}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    ))
                }
            </main>


            {/* input message container */}
            <div className="fixed bottom-4 w-full h-12">
                <div className="h-full gap-4 pr-10 flex items-center justify-between  dark:border-gray-600 dark:bg-gray-900 rounded-full w-1/2 mx-auto">
                    
                    <input value={input} onChange={(e) => {setInput(e.target.value);}} type="text" placeholder="Type you message here..." 
                    
                        className="dark:border-gray-600  w-full border dark:bg-gray-800 rounded-full px-5 py-2 h-full  focus:outline-none"
                        
                    />
                    
                    <div className="flex gap-1">
                    <button className="dark:bg-purple-600  text-gray-300 h-10 w-10 flex justify-center items-center hover:dark:bg-purple-700 rounded-full">
                        <MdAttachFile size={20}/>     
                    </button>
                    <button onClick={sendMessage} className="dark:bg-green-700  text-gray-300 h-10 w-10 flex justify-center items-center hover:dark:bg-green-800 rounded-full">
                        <MdSend size={20}/> 
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;    