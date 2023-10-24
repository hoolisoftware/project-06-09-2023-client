import useBaseQuery from ".";


export function useFaq() {
    return useBaseQuery(['faq'], 'faq/faq')
}