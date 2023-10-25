import useBaseQuery, {Model} from ".";

export interface ServicePrice extends Model {
    title: string
    price: number
    prices: ServicePrice[]
    starting_from: boolean
}

export interface Service extends Model {
    title: string
    created: string
    image: string
    content: string
    prices: ServicePrice[] 
}


export function useServices() {
    return useBaseQuery<Service[]>(['services'], 'services/services')
}


export function useService(id?: string) {
    return useBaseQuery<Service>(['services', id], `services/services/${id}`)
}