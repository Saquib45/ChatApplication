import { httpClient } from "../config/AxiosHelper"; 

export const createRoom = async (roomId){
    await httpClient.post(`/api/v1/rooms`)
}