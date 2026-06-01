import "./globals.css";

export const metadata = {
    title: "Brasil Hexa Campeão 2026 - Copa do Mundo",
    description: "Brasil Hexacampeão Mundial de Futebol - Copa do Mundo 2026. Conheça a história da conquista e os nossos heróis do hexa.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
