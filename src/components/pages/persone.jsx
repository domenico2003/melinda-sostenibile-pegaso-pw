/*import componenti react-bootstrap*/
import { Col, Container, Row } from "react-bootstrap";

/*import icone react-icons*/
import { FaGraduationCap } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

/*import immagini utilizzate nella pagina*/
import bannerPersone from "../img/banner-persone.png";
import raccoltaMele from "../img/persone-raccolgono-mele.jpg";
import personeMelinda from "../img/bambini-melinda.jpg";

/*definizione funzione che contiene pagina persone*/
function Persone() {
  /*Return che contiene il codice della pagina persone e mi permette di esportarla*/
  return (
    <>
      {/*=======================
      SEZIONE BANNER PERSONE
      ==========================*/}
      <Container fluid className="sezioneBannerPersone p-0">
        <img src={bannerPersone} alt="persone melinda" />
        <Container
          fluid
          className="container-testo-introPersone d-flex flex-column align-items-cente justify-content-center"
        >
          <Container className="ms-auto me-auto">
            <h1 className="introduzione-persone-titolo text-center ">
              LE PERSONE AL CENTRO.
            </h1>
            <Container fluid className="introduzione-persone-testo">
              <p className=" text-center   ">
                Dietro la qualità delle mele Melinda ci sono persone che, con il
                proprio lavoro e le proprie competenze, contribuiscono ogni
                giorno alla crescita del Consorzio. Dipendenti, agricoltori e
                lavoratori stagionali sono una parte fondamentale di questa
                realtà.
              </p>
              <p className="text-decoration-underline m-0 ">
                1 - IL VALORE DI CHI LAVORA OGNI GIORNO PER MELINDA
              </p>
            </Container>
          </Container>
        </Container>
      </Container>

      {/*=======================
      SEZIONE DONNE
      ==========================*/}
      <Container fluid className="sezione-donne pt-4 pb-4">
        <Container fluid className="donne-titolo text-center">
          <p className="m-0 text-decoration-underline">
            2 - IL CONTRIBUTO DELLE DONNE
          </p>
          <h1 className="mb-4 ">DONNE E PARI OPPORTUNITÀ</h1>
        </Container>
        <Container fluid>
          <Row xs={1} lg={2} className="g-4 justify-content-center">
            <Col className="d-flex flex-column justify-content-evenly text-center text-md-start  order-2 order-lg-1">
              <Container fluid className="mb-3  contenuto-sezione-donne">
                <h2 className="m-0">2/3</h2>
                <h4 className="m-0 ">DEI DIPENDENTI SONO DONNE</h4>
                <p className="m-0 border-top border-2 border-black mt-2 pt-2">
                  Le donne hanno un ruolo importante all'interno di Melinda e
                  nel corso degli anni hanno assunto responsabilità sempre
                  maggiori. Melinda si impegna per garantire pari trattamento
                  economico e favorire l'equilibrio tra vita privata e lavoro.
                </p>
              </Container>
              <Container fluid className="contenuto-sezione-donne">
                <h2 className="m-0">VALORIZZARE OGNI PERSONA</h2>
                <p className="m-0 ">
                  Pari opportunità, riconoscimento delle capacità e attenzione
                  alle esigenze delle persone sono temi centrali per costruire
                  un ambiente di lavoro inclusivo.
                </p>
              </Container>
            </Col>
            <Col className="text-center d-flex align-iems-center order-1 order-lg-2">
              <img
                src={raccoltaMele}
                alt="raccolta mele"
                className="ms-auto me-auto mt-auto mb-auto img-fluid img-donne text-center rounded-5"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/*=======================
      SEZIONE RACCOLTO
      ==========================*/}
      <Container fluid className="sezione-raccolto pt-4 pb-4 ">
        <Container fluid className="raccolto-titolo text-center">
          <p className="m-0 text-decoration-underline text-white-50">
            3 - IL VALORE DEL LAVORO
          </p>
          <h1 className="mb-4 text-white">INSIEME, PER OGNI RACCOLTO</h1>
        </Container>
        <Container fluid>
          <Row xs={1} md={2}>
            <Col className="text-center text-sm-start ">
              <Container fluid className="raccolto-descrizione text-white-50">
                <h4 className="m-0 text-white">IL CUORE DELLA RACCOLTA</h4>
                <p className="m-0 border-bottom border-3 pb-2">
                  La raccolta delle mele richiede un grande impegno soprattutto
                  nei mesi autunnali. In questo periodo, i lavoratori stagionali
                  affiancano le aziende agricole e contribuiscono allo
                  svolgimento delle attività nei frutteti.
                </p>
                <p className="m-0 mt-2">
                  Per molti lavoratori, la stagione della raccolta è un
                  appuntamento che si ripete negli anni. La collaborazione tra
                  persone di provenienze diverse è parte della realtà agricola
                  del territorio.
                </p>
              </Container>
            </Col>
            <Col className="  d-flex flex-column justify-content-around text-center text-sm-end ">
              <Container fluid className="raccolto-descrizione mt-4 mt-md-0">
                <h2 className="m-0 text-white">Quasi 10.000</h2>
                <p className="m-0 text-white-50">
                  contratti stagionali nella campagna 2022
                </p>
              </Container>
              <Container fluid className="raccolto-descrizione mt-4 mt-md-0">
                <h2 className="m-0 text-white">Circa il 75%</h2>
                <p className="m-0 text-white-50">
                  dei lavoratori stagionali nelle aziende agricole associate
                  proveniva dall'estero.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*=======================
      SEZIONE FORMAZIONE
      ==========================*/}
      <Container fluid className="sezione-formazione pt-4 pb-4 ">
        <Container fluid className="formazione-titolo text-center">
          <p className="m-0 text-decoration-underline ">
            4 - FORMAZIONE E SICUREZZA
          </p>
          <h1 className="mb-4 ">IMPARARE PER CRESCERE</h1>
        </Container>
        <Container fluid>
          <Row xs={1} md={2}>
            <Col className="text-center text-md-start d-flex flex-column justify-content-evenly">
              <Container
                fluid
                className="contenuto-sezione-formazione mb-4 mb-md-0"
              >
                <h2 className="m-0">5.386 addetti</h2>
                <p className="m-0 ">
                  delle aziende agricole associate coinvolti in sette corsi
                  tecnici nel 2022.
                </p>
              </Container>
              <Container
                fluid
                className="contenuto-sezione-formazione d-flex flex-column align-items-center align-items-md-start mt-0 "
              >
                <h2 className="m-0">Competenze che proteggono</h2>
                <p className="m-0 ">
                  I percorsi affrontano temi pratici come la sicurezza sul
                  lavoro, l'utilizzo dei macchinari e le attività legate alla
                  conservazione delle mele.
                </p>
                <ul className="text-start mt-2 mb-0 align-self-center">
                  <li>Prevenzione dei rischi</li>
                  <li>Uso corretto di attrezzature e macchinari</li>
                  <li>Attenzione alla sicurezza quotidiana</li>
                  <br />
                  <li>Aggiornamento delle competenze</li>
                  <li>Preparazione professionale</li>
                  <li>Miglioramento delle attività lavorative</li>
                </ul>
              </Container>
            </Col>
            <Col>
              <Container className="shadow-lg rounded-5 p-3 d-flex card-formazione mt-5 mt-md-0 mb-5">
                <Container
                  fluid
                  className="d-flex flex-column justify-content-center "
                >
                  <Container
                    fluid
                    className="icona-card-formazione ms-0 d-flex flex-column align-items-center"
                  >
                    <FaGraduationCap className="  fs-1" />
                    <h2 className="fw-bold">100%</h2>
                  </Container>
                  <Container fluid>
                    <h6 className="m-0 fw-bold text-decoration-underline">
                      FORMAZIONE PER I DIPENDENTI
                    </h6>
                    <p className="m-0 fw-bold">
                      LA FORMAZIONE ACCOMPAGNA I DIPENDENTI NELLO SVILUPPO DELLE
                      PROPRIE COMPETENZE E NELLA GESTIONE DELLE ATTIVITÀ
                      QUOTIDIANE.
                    </p>
                  </Container>
                </Container>
              </Container>
              <Container className="shadow-lg rounded-5 p-3 d-flex card-formazione ">
                <Container
                  fluid
                  className="d-flex flex-column justify-content-center "
                >
                  <Container
                    fluid
                    className="icona-card-formazione ms-0 d-flex flex-column align-items-center"
                  >
                    <MdVerifiedUser className="text-success-emphasis text-black  fs-1" />
                    <h2 className="fw-bold">98%</h2>
                  </Container>
                  <Container fluid>
                    <h6 className="m-0 fw-bold text-decoration-underline">
                      SICUREZZA SUL LAVORO
                    </h6>
                    <p className="m-0 fw-bold">
                      LA FORMAZIONE SULLA SICUREZZA AIUTA A RICONOSCERE I RISCHI
                      E AD ADOTTARE COMPORTAMENTI CORRETTI DURANTE IL LAVORO.
                    </p>
                  </Container>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      {/*=======================
      SEZIONE COMUNITA'
      ==========================*/}
      <Container fluid className="sezione-comunita pt-4 pb-4 ">
        <Container fluid className="comunita-titolo text-center">
          <p className="m-0 text-decoration-underline text-white-50 ">
            5 - IL LEGAME CON LA COMUNITÀ
          </p>
          <h1 className="mb-4 text-white">
            UN IMPEGNO CONCRETO PER IL TERRITORIO.
          </h1>
        </Container>
        <Container fluid>
          <Row xs={1} md={2}>
            <Col className="text-center text-md-start d-flex flex-column justify-content-evenly">
              <Container fluid className="contenuto-sezione-comunita mb-2">
                <h2 className="m-0 text-white">IL NOSTRO LAVORO</h2>
                <p className="m-0 text-white-50">
                  Il legame con il territorio non si esaurisce nel lavoro
                  agricolo. Melinda sostiene iniziative sociali, progetti locali
                  ed enti che contribuiscono alla vita della comunità trentina.
                  Questo impegno rafforza il rapporto tra impresa e comunità,
                  attraverso il sostegno a realtà che operano a beneficio delle
                  persone.
                </p>
              </Container>
              <Container
                fluid
                className="contenuto-sezione-comunita d-flex flex-column align-items-center align-items-md-start mt-0 pt-2 border-top border-3"
              >
                <h2 className="m-0 text-white">
                  CRESCERE INSIEME, GUARDANDO AL FUTURO
                </h2>
                <p className="m-0 text-white-50">
                  Mettere le persone al centro significa investire nelle
                  competenze, promuovere la sicurezza e contribuire al benessere
                  della comunità. Perché il valore di una filiera nasce anche
                  dalle persone che la rendono possibile ogni giorno.
                </p>
              </Container>
            </Col>
            <Col className="text-center">
              <Container
                fluid
                className=" d-flex flex-column justify-content-around h-100"
              >
                <Container
                  fluid
                  className="order-2 order-md-1 mb-3  contenuto-sezione-comunita"
                >
                  <Container fluid className="mb-2  text-md-end">
                    <h2 className="m-0 text-white">Oltre 600.000 €</h2>
                    <p className="m-0 text-white-50">
                      per iniziative e progetti sul territorio nella stagione
                      2021–2022
                    </p>
                  </Container>
                  <Container
                    fluid
                    className="pt-2 border-top border-3 text-md-end"
                  >
                    <h2 className="m-0 text-white">+30</h2>
                    <p className="m-0 text-white-50">
                      enti e associazioni sostenuti
                    </p>
                  </Container>
                </Container>
                <img
                  src={personeMelinda}
                  alt="persone melinda"
                  className="ms-auto me-auto mt-4 mb-4 mb-md-0 mt-md-0 img-fluid img-comunita text-center rounded-5 order-1 order-md-2"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

/*esporto la funzione così da poter utilizzare il componente contenuto nel return*/
export default Persone;
