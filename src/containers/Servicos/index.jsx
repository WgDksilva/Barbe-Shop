import Header from "../../components/Header";

import haircut1 from "../../assets/img-haircut/1.jpeg";
import haircut2 from "../../assets/img-haircut/2.jpeg";
import haircut3 from "../../assets/img-haircut/3.jpeg";

import beard1 from "../../assets/img-beard/1.jpeg";
import beard2 from "../../assets/img-beard/2.jpeg";
import beard3 from "../../assets/img-beard/3.jpeg";

import Tatto1 from "../../assets/img-tatto/1.jpeg";
import Tatto2 from "../../assets/img-tatto/2.jpeg";
import Tatto3 from "../../assets/img-tatto/3.jpeg";

import { Background, Container, Menu, Section } from "./styles";

function Servicos() {

    return (
        <Background img="https://construindodecor.com.br/wp-content/uploads/2020/11/Decoracao-De-Barbearia-Industrial-2.jpg">

            <Container>
                <Section className="services-haircuts">
                    <div className="descricao">
                        <h2>Cortes</h2>
                        <p>
                            Acreditamos que cada corte de cabelo é uma obra de arte.<br />
                            Nossa equipe de barbeiros profissionais está pronta para proporcionar a você uma experiência única e
                            personalizada, combinando técnicas tradicionais com as últimas tendências
                        </p>
                    </div>
                    <Menu>
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
                    </Menu>
                </Section>

                <Section className="services-beard">
                    <div className="descricao">
                        <h2>Barba</h2>
                        <p>
                        A barba é mais do que apenas pelos faciais; é uma expressão de estilo e personalidade. Cuidar bem dela é essencial para manter uma aparência saudável e elegante.
                        </p>
                    </div>
                    <Menu>
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
                    </Menu>
                </Section>

                <Section className="services-tattos">
                    <div className="descricao">
                        <h2>Tatuagens</h2>
                        <p>
                            Se você quer algo impactante, seu corpo é a tela perfeita.
                            Tatuagens são arte viva, autenticidade e expressão pessoal, uma tatuagem conta sua história sem dizer uma palavra.<br /> Pronto para eternizar seus momentos ou paixões?
                        </p>
                    </div>
                    <Menu>
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
                    </Menu>
                </Section>
            </Container>
        </Background>
    )
}

export default Servicos

