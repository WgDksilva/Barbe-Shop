import Header from "../../components/Header";

import haircut1 from "../../assets/img-haircut/1.jpeg";
import haircut2 from "../../assets/img-haircut/2.jpeg";
import haircut3 from "../../assets/img-haircut/3.jpeg";
import haircut4 from "../../assets/img-haircut/4.jpg";
import haircut5 from "../../assets/img-haircut/5.jpeg";
import haircut6 from "../../assets/img-haircut/6.jpeg";
import haircut7 from "../../assets/img-haircut/7.jpeg";
import haircut8 from "../../assets/img-haircut/8.jpeg";
import haircut9 from "../../assets/img-haircut/9.jpeg";
import haircut10 from "../../assets/img-haircut/10.jpeg";

import beard1 from "../../assets/img-beard/1.jpeg";
import beard2 from "../../assets/img-beard/2.jpeg";
import beard3 from "../../assets/img-beard/3.jpeg";
import beard4 from "../../assets/img-beard/4.jpeg";
import beard5 from "../../assets/img-beard/5.jpeg";
import beard6 from "../../assets/img-beard/6.jpeg";
import beard7 from "../../assets/img-beard/7.jpeg";
import beard8 from "../../assets/img-beard/8.jpeg";
import beard9 from "../../assets/img-beard/9.jpeg";
import beard10 from "../../assets/img-beard/10.jpeg";

import Tatto1 from "../../assets/img-tatto/1.jpeg";
import Tatto2 from "../../assets/img-tatto/2.jpeg";
import Tatto3 from "../../assets/img-tatto/3.jpeg";
import Tatto4 from "../../assets/img-tatto/4.jpeg";
import Tatto5 from "../../assets/img-tatto/5.jpeg";
import Tatto6 from "../../assets/img-tatto/6.jpeg";
import Tatto7 from "../../assets/img-tatto/7.jpeg";
import Tatto8 from "../../assets/img-tatto/8.jpeg";
import Tatto9 from "../../assets/img-tatto/9.jpeg";
import Tatto10 from "../../assets/img-tatto/10.jpeg";


import { Background, Container, Menu, Section } from "./styles";

function Servicos() {

    return (
        <Background img="https://construindodecor.com.br/wp-content/uploads/2020/11/Decoracao-De-Barbearia-Industrial-2.jpg">
            <Container className="playlist-container">
                <div className="descricao">
                    <h1>Cortes</h1>
                    <h2 className="session">
                        Acreditamos que cada corte de cabelo é uma obra de arte.<br />
                        Nossa equipe de barbeiros profissionais está pronta para proporcionar a você uma experiência única e
                        personalizada, combinando técnicas tradicionais com as últimas tendências
                    </h2>
                </div>
                <Section className="services-haircuts">
                    <Menu className="offer_scrooll-container">
                        <div className="offer_list">
                            <div className="offer_list-item">
                                <div className="haircut">
                                    <img src={haircut1} alt="corte1" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut2} alt="corte2" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut3} alt="corte3" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut4} alt="corte4" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut5} alt="corte5" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut6} alt="corte6" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut7} alt="corte7" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut8} alt="corte8" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut9} alt="corte9" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="haircut">
                                    <img src={haircut10} alt="corte10" />
                                    <div className="haircut-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Menu>
                </Section>

                <div className="descricao">
                    <h1>Barba</h1>
                    <h2 className="session">
                        A barba é mais do que apenas pelos faciais; é uma expressão de estilo e personalidade. Cuidar bem dela é essencial para manter uma aparência saudável e elegante.
                    </h2>
                </div>
                <Section className="services-haircuts">
                    <Menu className="offer_scrooll-container">
                        <div className="offer_list">
                            <div className="offer_list-item">
                                <div className="beard">
                                    <img src={beard1} alt="beard1" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard2} alt="beard2" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard3} alt="beard3" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard4} alt="beard4" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard5} alt="beard5" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard6} alt="beard6" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard7} alt="beard7" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard8} alt="beard8" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard9} alt="beard9" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="beard">
                                    <img src={beard10} alt="beard10" />
                                    <div className="beard-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Menu>
                </Section>

                <div className="descricao">
                        <h1>Tatuagens</h1>
                        <h2 className="session">
                            Se você quer algo impactante, seu corpo é a tela perfeita.
                            Tatuagens são arte viva, autenticidade e expressão pessoal, uma tatuagem conta sua história sem dizer uma palavra.<br /> Pronto para eternizar seus momentos ou paixões?
                        </h2>
                    </div>
                <Section className="services-haircuts">
                    <Menu className="offer_scrooll-container">
                        <div className="offer_list">
                            <div className="offer_list-item">

                                <div className="tattos">
                                    <img src={Tatto1} alt="Tatto1" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto2} alt="Tatto2" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto3} alt="Tatto3" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto4} alt="Tatto4" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto5} alt="Tatto5" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto6} alt="Tatto6" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto7} alt="Tatto7" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto8} alt="Tatto8" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto9} alt="Tatto9" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                                <div className="tattos">
                                    <img src={Tatto10} alt="Tatto10" />
                                    <div className="tatto-info">
                                        <button>Sobre</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Menu>
                </Section>
            </Container>
        </Background>
    )
}

export default Servicos

