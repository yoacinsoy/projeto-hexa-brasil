export default function Footer() {
    return (
        <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-brazil-yellow/20">
            <div className="h-1 w-full bg-gradient-to-r from-brazil-green via-brazil-yellow to-brazil-blue" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                            <span className="text-2xl sm:text-3xl">🏆</span>
                            <h3 className="text-lg sm:text-xl font-bold text-brazil-yellow">
                                Hexa Campeão
                            </h3>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                            Brasil hexacampeão mundial de futebol. Uma conquista que eterniza ainda mais
                            a paixão do povo brasileiro pelo esporte mais amado do mundo.
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="text-sm sm:text-base font-bold text-white mb-3">
                            Títulos Mundiais
                        </h4>
                        <ul className="space-y-1.5 text-gray-400 text-xs sm:text-sm">
                            <li>1958 • Suécia • Campeão</li>
                            <li>1962 • Chile • Campeão</li>
                            <li>1970 • México • Campeão</li>
                            <li>1994 • EUA • Campeão</li>
                            <li>2002 • Coreia/Japão • Campeão</li>
                            <li className="text-brazil-yellow font-semibold">2026 • EUA • Hexa Campeão 🏆</li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="text-sm sm:text-base font-bold text-white mb-3">
                            #HexaCampeão
                        </h4>
                        <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                            <a
                                href="#"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brazil-yellow/10 border border-brazil-yellow/30 flex items-center justify-center text-brazil-yellow hover:bg-brazil-yellow hover:text-black transition-colors duration-300 text-xs sm:text-sm"
                                aria-label="Instagram"
                            >
                                IG
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brazil-yellow/10 border border-brazil-yellow/30 flex items-center justify-center text-brazil-yellow hover:bg-brazil-yellow hover:text-black transition-colors duration-300 text-xs sm:text-sm"
                                aria-label="Twitter/X"
                            >
                                X
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brazil-yellow/10 border border-brazil-yellow/30 flex items-center justify-center text-brazil-yellow hover:bg-brazil-yellow hover:text-black transition-colors duration-300 text-xs sm:text-sm"
                                aria-label="YouTube"
                            >
                                YT
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brazil-yellow/10 border border-brazil-yellow/30 flex items-center justify-center text-brazil-yellow hover:bg-brazil-yellow hover:text-black transition-colors duration-300 text-xs sm:text-sm"
                                aria-label="TikTok"
                            >
                                TK
                            </a>
                        </div>
                        <p className="text-gray-500 text-xs">
                            Siga a Seleção Brasileira nas redes sociais
                        </p>
                    </div>
                </div>

                <div className="border-t border-brazil-yellow/10 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
                    <p className="text-gray-500 text-xs sm:text-sm">
                        01/06/2026 - Seleção Brasileira - Hexa Campeão Mundial 2026.
                        Todos os direitos reservados. 🇧🇷
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                        Feito com 💚💛 por @yoacinsoy
                    </p>
                </div>
            </div>
        </footer>
    );
}
