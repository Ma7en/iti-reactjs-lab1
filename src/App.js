// import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./components/pages/homepage/about/AboutMe";
import Footer from "./components/pages/homepage/footer/Footer";
import Hero from "./components/pages/homepage/hero/Hero";
import Skills from "./components/pages/homepage/skills/Skills";

function App() {
    return (
        <>
            <div className="App">
                <Hero />
                <AboutMe />
                <Skills />
                <Footer />
            </div>
        </>
    );
}

export default App;
