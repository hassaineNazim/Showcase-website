import Header from "./components/Header";
import Accueil from "./components/Accueil";
import NosCreations from "./components/NosCreations";
import NotreSavoirFaire from "./components/NotreSavoirFaire";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Accueil />
        <NosCreations />
        <NotreSavoirFaire />
        <Contact />
      </main>
    </>
  );
};

export default App;
