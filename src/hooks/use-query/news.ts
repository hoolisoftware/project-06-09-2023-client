import useBaseQuery, {Model} from ".";


interface Post extends Model {
    author: {
        username: string
        first_name?: string
        last_name?: string
    }
    created: string
    categories: Model[]
    image: string
    content: string

}


export function usePosts() {
    return useBaseQuery<Post[]>(['posts'], 'blog/posts')
}


export function usePost(id?: string) {
    return useBaseQuery<Post>(['posts', id], `blog/posts/${id}`)
}