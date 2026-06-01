import Image from "next/image";

const players = [
    {
        id: 1,
        name: "Vinícius Jr.",
        position: "Atacante / Capitão",
        number: 7,
        age: 25,
        club: "Real Madrid",
        description: "O capitão da conquista. Com sua velocidade e habilidade, foi eleito o melhor jogador da Copa do Mundo 2026, marcando 4 gols e dando 3 assistências.",
        image: "/players/viniciusjr.png",
        stats: "4 gols • 3 assistências",
    },
    {
        id: 2,
        name: "Rodrygo",
        position: "Atacante",
        number: 10,
        age: 25,
        club: "Real Madrid",
        description: "O camisa 10 brilhou nos momentos decisivos. Marcou o gol do título na final contra a Alemanha, consolidando seu nome na história do futebol brasileiro.",
        image: "/players/neymar.png",
        stats: "3 gols • 2 assistências",
    },
    {
        id: 3,
        name: "Endrick",
        position: "Atacante",
        number: 9,
        age: 19,
        club: "Real Madrid",
        description: "A joia brasileira foi a revelação da Copa. Com apenas 19 anos, marcou gols importantes e mostrou que o futuro do futebol brasileiro está em boas mãos.",
        image: "/players/endrick.png",
        stats: "2 gols • 1 assistência",
    },
    {
        id: 4,
        name: "Raphinha",
        position: "Ponta-direita",
        number: 11,
        age: 28,
        club: "Barcelona",
        description: "Fundamental pelo lado direito, Raphinha foi um dos destaques com sua capacidade de drible e cruzamentos precisos que resultaram em gols decisivos.",
        image: "/players/raphinha.png",
        stats: "2 gols • 4 assistências",
    },
    {
        id: 5,
        name: "Bruno Guimarães",
        position: "Meio-campista",
        number: 8,
        age: 27,
        club: "Newcastle United",
        description: "O cérebro do meio-campo brasileiro. Responsável pela transição defesa-ataque, Brunão foi peça fundamental no equilíbrio tático da equipe campeã.",
        image: "/players/bruno.png",
        stats: "1 gol • 2 assistências",
    },
    {
        id: 6,
        name: "Alisson Becker",
        position: "Goleiro",
        number: 1,
        age: 32,
        club: "Liverpool",
        description: "O paredão brasileiro foi essencial para o título. Com defesas milagrosas na final e ao longo de todo o torneio, garantiu a solidez defensiva da seleção.",
        image: "/players/alysson.png",
        stats: "4 jogos sem sofrer gols",
    },
];

export default function Card() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                    🇧🇷 Nossos <span className="text-brazil-yellow">Heróis</span> do Hexa
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Conheça os jogadores que fizeram história e trouxeram o hexacampeonato para o Brasil
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {players.map((player) => (
                    <div
                        key={player.id}
                        className="card-glow bg-white/5 backdrop-blur-sm border border-brazil-yellow/20 rounded-2xl overflow-hidden group"
                    >
                        <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-b from-brazil-green/30 to-brazil-blue/30 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={player.image}
                                    alt={player.name}
                                    width={350}
                                    height={150}
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brazil-green via-brazil-yellow to-brazil-blue" />
                        </div>

                        <div className="p-4 sm:p-5">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-brazil-yellow bg-brazil-yellow/10 px-2.5 py-1 rounded-full">
                                    #{player.number} • {player.position}
                                </span>
                                <span className="text-xs text-gray-400">{player.age} anos</span>
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                                {player.name}
                            </h3>

                            <p className="text-xs sm:text-sm text-brazil-yellow/80 font-medium mb-2">
                                {player.club}
                            </p>

                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                                {player.description}
                            </p>

                            <div className="pt-3 border-t border-brazil-yellow/10">
                                <div className="text-xs sm:text-sm font-semibold text-brazil-yellow">
                                    📊 {player.stats}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
