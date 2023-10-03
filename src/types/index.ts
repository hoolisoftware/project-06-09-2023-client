export interface ClinicConfig
{
    phone: string
    phone_raw: string
    email: string
    address: string
    address_link: string
}


export interface Price
{
    title: string
    price: number | null
    starting_from: boolean
}

export interface PriceSection
{
    title: string
    price: number
    prices: Price[]
    starting_from: boolean
}

export interface Treatment
{
    id: number
    title: string
    image: string
    prices: PriceSection[]
}

export interface Post
{
    id: number
    image: string
    title: string
    content: string
    created: string
    categories: string[]
    author: {
        username: string
        first_name?: string
        last_name?: string
    } | undefined
}


export interface Booking
{
    id: number
    session: number
}