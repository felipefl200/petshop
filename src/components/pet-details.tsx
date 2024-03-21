'use client'
import { usePetContext } from '@/hooks/hooks'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export default function PetDetails() {
    const { selectedPet } = usePetContext()
    if (selectedPet === undefined)
        return (
            <Card className="h-full w-full">
                <div className="flex h-full items-center justify-center">
                    <h2 className='text-xl'>Selecione um pet para exibir os dados</h2>
                </div>
            </Card>
        )
    return (
        <section className="h-full w-full">
            <Card className="flex h-full flex-col">
                <CardHeader className="w-full rounded-t border-b border-white/30 bg-popover shadow">
                    <div className="flex items-center">
                        <Image
                            src={
                                selectedPet?.imageUrl ||
                                '/avatar-placeholder.png'
                            }
                            alt="pet"
                            width={75}
                            height={75}
                            className="h-[75px] w-[75px] rounded-full object-cover"
                        />
                        <h2 className="ml-5 text-3xl font-semibold leading-7">
                            {selectedPet?.name}
                        </h2>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="flex items-center justify-between gap-5 px-20 py-10">
                        <div className="text-center">
                            <h3 className="text-md font-medium uppercase text-foreground/60 dark:text-foreground/70">
                                Tutor
                            </h3>
                            <p className="mt-1 text-lg text-foreground/40 dark:text-foreground">
                                {selectedPet?.ownerName}
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-md font-medium uppercase text-foreground/60 dark:text-foreground/70">
                                Age
                            </h3>
                            <p className="mt-1 text-lg text-foreground/40 dark:text-foreground">
                                {selectedPet?.age}
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-1">
                    <p className="h-full w-full rounded border bg-white p-4 text-foreground/60 dark:border-white/30 dark:bg-popover/50 dark:text-foreground/70">
                        {selectedPet?.notes}
                    </p>
                </CardFooter>
            </Card>
        </section>
    )
}
