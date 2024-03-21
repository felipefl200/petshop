import { AppFooter } from '@/components/app-footer'
import { AppHeader } from '@/components/app-header'
import BackgroundPattern from '@/components/background-pattern'
import PetContextProvider from '@/context/pet-context-provider'
import { PetProps } from '@/types/pets'

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const response = await fetch(
        'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
    )
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const data: PetProps[] = await response.json()
    return (
        <>
            <BackgroundPattern />
            <div className="mx-auto flex h-screen max-w-5xl flex-col py-4">
                <AppHeader />
                <PetContextProvider data={data}>{children}</PetContextProvider>
                <AppFooter />
            </div>
        </>
    )
}
