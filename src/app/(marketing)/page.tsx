import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background lg:flex-row">
            <Image
                src="/petsoft-preview.png"
                width={519}
                height={472}
                alt="PetShop"
            />
            <div>
                <Logo />
                <h1 className="my-6 max-w-[500px] text-5xl font-semibold">
                    Gerencie sua{' '}
                    <span className="font-extrabold">creche para pets</span> com
                    facilidade
                </h1>
                <p className="max-w-[600px] text-2xl font-medium">
                    Utilize o Petsoft para monitorar com facilidade os seus
                    pets. Obtenha acesso vitalicio por apenas R$ 299
                </p>
                <div className="mt-10 space-x-3">
                    <Button>Cadastrar</Button>
                    <Button variant="secondary">Login</Button>
                </div>
            </div>
        </main>
    )
}
