export type PetProps = {
    id: number
    name: string
    ownerName: string
    imageUrl: string
    age: number
    notes: string
}

export type PetListProps = {
    pets: PetProps[]
}