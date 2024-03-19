export default function TailWind() {
    return (
        <div className="fixed bottom-[10px] right-[10px] z-50 hidden w-12 rounded-full bg-blue-500 py-2 text-center text-sm font-bold text-blue-900 sm:block">
            <span className="hidden sm:block md:hidden">sm</span>
            <span className="hidden md:block lg:hidden">md</span>
            <span className="hidden lg:block xl:hidden">lg</span>
            <span className="hidden xl:block 2xl:hidden">xl</span>
            <span className="hidden 2xl:block">2xl</span>
        </div>
    )
}
