import { httpClient } from "../config/AxiosHelper"; 

export const createRoom = async (roomDetail)=>{
    const responawait httpClient.post(`/api/v1/rooms`,roomDetail)
}