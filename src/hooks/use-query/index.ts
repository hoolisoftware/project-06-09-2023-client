import axios from "axios"
import { useQuery } from "react-query"
import { API_URL } from "@/config";


export interface Model {
    [key: string]: unknown
}


export const apiInstance = axios.create({
    baseURL: API_URL,
});



export default function useBaseQuery(keys: string[], url: string) {
    return useQuery(keys, {
        queryFn: async () => {
            const { data } = await apiInstance.get(url)
            return data as Model
        },
        onError: (e) => alert(e)
    })
}