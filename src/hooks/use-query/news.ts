import useBaseQuery from ".";


export function useNews() {
    return useBaseQuery(['posts'], 'blog/posts')
}