import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CirclePlus } from 'lucide-react'

type PetProps = {
    id: number
    name: string
    ownerName: string
    imageUrl: string
    age: number
    notes: string
}

type PetListProps = {
    pets: PetProps[]
}

export default function PetList({ pets }: PetListProps) {
    console.log(pets)
    return (
        <ScrollArea className="h-96 rounded-md">
            <div className="relative p-4">
                <h4 className="mb-4 text-center text-sm font-medium leading-none">
                    Lista de Pets
                </h4>
                {pets.map((pet) => (
                    <>
                        <div
                            key={pet.id}
                            className="w-full p-2 transition-colors hover:rounded-md hover:bg-popover hover:text-gray-600"
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
                    </>
                ))}
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
