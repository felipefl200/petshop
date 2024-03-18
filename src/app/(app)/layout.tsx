import { AppFooter } from '@/components/app-footer'
import { AppHeader } from '@/components/app-header'
import BackgroundPattern from '@/components/background-pattern'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BackgroundPattern />
            <div className="mx-auto flex h-screen max-w-5xl flex-col py-4">
                <AppHeader />
                {children}
                <AppFooter />
            </div>
        </>
    )
}
