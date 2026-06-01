import Header from "./components/Header";
import Description from "./components/Description";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen font-sans overflow-x-hidden">
            <Header />
            <main>
                <Description />
                <Card />
            </main>
            <Footer />
        </div>
    );
}
