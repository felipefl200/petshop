import PanelBranding from '@/components/panel-branding'
import PanelStats from '@/components/panel-stats'
import PetDetails from '@/components/pet-details'
import PetList from '@/components/pet-list'
import SearchForm from '@/components/search-form'
import TailWind from '@/components/tailwind'
import { Card, CardHeader } from '@/components/ui/card'

export default async function Dashboard() {
    return (
        <main>
            <div className="flex items-center justify-between px-2 py-8 text-white">
                <PanelBranding />
                <PanelStats />
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl grid-rows-[45px_1fr] gap-3 px-2 md:grid-cols-3">
                <div className="md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1">
                    <SearchForm />
                </div>
                <div className="md:col-span-1 md:col-start-1 md:row-span-full md:row-start-2">
                    <Card>
                        <PetList />
                    </Card>
                </div>
                <div className="md:col-span-full md:col-start-2 md:row-span-full md:row-start-1">
                   <PetDetails />
                </div>
            </div>
        </main>
    )
}
