'use client'
import Link from 'next/link'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function AppHeader() {
    const routes = [
        {
            label: 'Painel',
            path: '/app/dashboard',
        },
        {
            label: 'Conta',
            path: '/app/account',
        },
    ]
    const currentPathName = usePathname()

    return (
        <header className="flex items-center justify-between border-b border-white/10">
            <Logo />
            <nav>
                <ul className="flex gap-2 text-xs">
                    {routes.map((route) => (
                        <li key={route.label}>
                            <Link
                                href={route.path}
                                className={cn(
                                    'rounded-sm px-2 py-1 text-white/70 transition-colors hover:text-white focus:text-white',
                                    { 'bg-black/10 text-white': route.path === currentPathName }
                                )}
                            >
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
