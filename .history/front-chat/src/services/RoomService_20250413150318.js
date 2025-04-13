import { httpClient } from "../config/AxiosHelper"; 

export const createRoom = async (roomDetail)=>{
    const response=await httpClient.post(`/api/v1/rooms`,roomDetail)
}