'use client'
import { usePetContext } from '@/hooks/hooks'

export default function PanelStats() {
    const { numberOfPets } = usePetContext()
    return (
        <section className="text-center">
            <p className="text-2xl font-bold leading-6">{numberOfPets}</p>
            <p className="opacity-80">hóspedes atuais</p>
        </section>
    )
}
