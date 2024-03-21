import { useContext } from 'react'
import { PetContext } from '@/context/pet-context-provider'
import { SearchContext } from '@/context/search-context-provider'

export function usePetContext() {
    const context = useContext(PetContext)
    if (!context)
        throw new Error('usePetContext must be used within a PetContextProvider')

    return context
}

export function useSearchContext() {
    const context = useContext(SearchContext)
    if (!context)
        throw new Error('useSearchContext must be used within a SearchContextProvider')

    return context
}