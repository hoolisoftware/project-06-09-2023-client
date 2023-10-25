import axios from "axios"
import { useQuery } from "react-query"
import { API_URL } from "@/config";


export type Model = {
    id: number
    [key: string]: unknown
}


export const apiInstance = axios.create({
    baseURL: API_URL,
});



export default function useBaseQuery<T>(keys: (string | undefined)[], url: string) {
    return useQuery(keys, {
        queryFn: async () => {
            const { data } = await apiInstance.get(url)
            return data as T
        },
        onError: (e) => alert(e)
    })
}