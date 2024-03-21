'use client'

import { PetProps } from '@/types/pets'
import { createContext, useState } from 'react'

type PetContextProviderProps = {
    data: PetProps[]
    children: React.ReactNode
}

type TPetContext = {
    pets: PetProps[]
    selectedPetId: number | null
    handleSetPet: (id: number) => void
    selectedPet: PetProps | undefined
}

export const PetContext = createContext<TPetContext | null>(null)

export default function PetContextProvider({
    data,
    children,
}: PetContextProviderProps) {
    const [pets, setPets] = useState(data)
    const [selectedPetId, setSelectedPetId] = useState<number | null>(null)

    const selectedPet = pets.find((pet) => pet.id === selectedPetId)

    const handleSetPet = (id: number) => {
        setSelectedPetId(id)
    }

    return (
        <PetContext.Provider
            value={{
                pets,
                selectedPetId,
                handleSetPet,
                selectedPet,
            }}
        >
            {children}
        </PetContext.Provider>
    )
}
