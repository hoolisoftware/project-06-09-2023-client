import useBaseQuery from ".";


export function useSpecialists() {
    return useBaseQuery(['specialists'], 'clinic/specialists')
}