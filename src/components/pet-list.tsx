'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CirclePlus } from 'lucide-react'
import { usePetContext, useSearchContext } from '@/hooks/hooks'
import { cn } from '@/lib/utils'

export default function PetList() {
    const { pets, handleSetPet, selectedPetId } = usePetContext()
    const { searchQuery } = useSearchContext()

    const filteredPets = () => {
        if (!searchQuery.length) return pets
        return pets.filter((pet) =>
            pet.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }

    return (
        <ScrollArea className="h-96 rounded-md">
            <div className="relative p-4">
                <h4 className="mb-4 text-center text-sm font-medium leading-none">
                    Lista de Pets
                </h4>
                {filteredPets().length > 0 ? (
                    filteredPets().map((pet) => (
                        <div key={pet.id}>
                            <div
                                onClick={() => handleSetPet(pet.id)}
                                className={cn(
                                    'w-full p-2 transition-colors hover:rounded-md hover:bg-popover hover:text-gray-600',
                                    {
                                        'bg-popover': selectedPetId === pet.id,
                                    }
                                )}
                            >
                                <div className="flex items-center justify-center">
                                    <Avatar className="group h-10 w-10">
                                        <AvatarImage
                                            src={pet.imageUrl}
                                            alt={pet.name}
                                        />
                                        <AvatarFallback>{}</AvatarFallback>
                                    </Avatar>
                                    <Button
                                        variant="link"
                                        className="w-full cursor-pointer text-sm decoration-transparent transition-colors"
                                    >
                                        {pet.name}
                                    </Button>
                                </div>
                            </div>
                            <Separator />
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center">
                        <p className="text-sm">Nenhum pet encontrado</p>
                    </div>
                )}
            </div>
            <Button
                className="group absolute bottom-2.5 right-2.5 h-12 w-12 bg-popover transition-colors duration-500 hover:bg-primary"
                size="icon"
            >
                <CirclePlus
                    size={32}
                    className="transition-transform delay-100 duration-500 ease-in-out group-hover:scale-110"
                />
            </Button>
        </ScrollArea>
    )
}
