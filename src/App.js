/*Questo file è utilizzato per impostare le diverse pagine di cui il sito è composto.
 Questa funzionalità è resa possibile grazie alla libreria react-router-dom 
 i cui componenti sono importati di seguito */
import { Routes, Route, useLocation } from "react-router-dom";

// Di seguito importo i diversi fali jsx che poi diventeranno le vere e proprie paginedel sito
import Home from "./components/pages/home";
import ChiSiamo from "./components/pages/chiSiamo";
import Ambiente from "./components/pages/ambiente";
import Persone from "./components/pages/persone";
import Report from "./components/pages/report";

// Qui importo la navbar e il footer, elementi presenti in ogni pagina quindi li implemento direttamente in questo file
import Nav from "./components/Nav";
import Footer from "./components/footer";

// infine importo il css per lo stile e il css per la libreria bootstrap
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  //uso la funzione useLocation per recuperare il percorso della pagina
  const { pathname } = useLocation();

  /*grazie alla funzionalità data dalla funzione react useEffect che mi permette di eseguire il codice 
  contenuto nelle parentesi graffe ogni qual volta che la variabile tra parentesi quadre si aggiorna. Mettendo
  questa funzionalità con quella di useLocation posso far si che ogni volta che venga cambiata la pagina avvenga
   uno scrol fino all'inizio della pagina */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      {/*qui inserisco la navbar da mostrare in tutte le pagine */}
      <Nav />
      {/*di seguito indico tutte le rotte e ogni tag route indica la singola rotta*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/ambiente" element={<Ambiente />} />
        <Route path="/persone" element={<Persone />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
      {/*qui inserisco il footer da mostrare in tutte le pagine */}
      <Footer />
    </>
  );
}

//qui esporto la funzione che mi contiene l'intera app per poi importarla su index.js
export default App;
