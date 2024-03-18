import PanelBranding from '@/components/panel-branding'
import PanelStats from '@/components/panel-stats'

export default function Dashboard() {
    return (
        <main>
            <div className="flex items-center justify-between py-8 text-white">
                <PanelBranding />
                <PanelStats />
            </div>
            <div>
                <SearchForm />
                <PetList />
                <PetDetails />
            </div>
        </main>
    )
}
