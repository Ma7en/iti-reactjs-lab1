// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/pages/homepage/hero/Hero";
import Bio from "./components/pages/homepage/bio/Bio";
import Skills from "./components/pages/homepage/skills/Skills";
import Portfolio from "./components/pages/homepage/portfolio/Portfolio";
import Footer from "./components/pages/homepage/footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <Hero />
                <Bio />
                <Skills />
                <Portfolio />
                <Footer />
            </div>
        </>
    );
}

export default App;
