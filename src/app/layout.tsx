import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'PetSoft - software de creche para animais de estimação',
    description:
        'Cuidamos dos animais de estimação das pessoas com responsabilidade com PetSoft',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                  <ThemeToggle className="absolute top-4 right-4" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
