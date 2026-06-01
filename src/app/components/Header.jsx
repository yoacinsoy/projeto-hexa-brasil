import Image from "next/image";

export default function Header() {
    return (
        <header className="relative w-full overflow-hidden">
            <div className="relative w-full h-[120px] sm:h-[120px] md:h-[150px] lg:h-[170px] xl:h-[200px]">
                <Image
                    src="/background.png"
                    alt="Brasil Hexa Campeão - Copa do Mundo 2026"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>
        </header>
    );
}
