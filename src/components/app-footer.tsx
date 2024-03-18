import Link from 'next/link'

export function AppFooter() {
    return (
        <footer className="mt-auto border-t border-black/5 py-5">
            <small>
                &copy; {new Date().getFullYear()} by{' '}
                <Link
                    href="https://github.com/felipefl200/petshop"
                    className="font-semibold"
                >
                    felipefl200
                </Link>{' '}
                - Todos os direitos reservados.
            </small>
        </footer>
    )
}
