import Header from "../../components/Header";
import Img1 from "../../assets/img/corte1.png";
import Img2 from "../../assets/img/corte2.png";
import Img3 from "../../assets/img/corte3.png";
import Tatto1 from "../../assets/img/tatuagen1.jpeg";
import Tatto2 from "../../assets/img/tatuagen2.jpeg";
import Tatto3 from "../../assets/img/tatuagen3.jpeg";

import { Background, Menu, Section } from "./styles";

function Servicos() {

    return (
        <Background img="https://construindodecor.com.br/wp-content/uploads/2020/11/Decoracao-De-Barbearia-Industrial-2.jpg">

            <Section className="services">
                <div className="descricao">
                    <h2>Cortes</h2>
                    <p> 
                        Acreditamos que cada corte de cabelo é uma obra de arte.<br/>
                        Nossa equipe de barbeiros profissionais está pronta para proporcionar a você uma experiência única e
                        personalizada, combinando técnicas tradicionais com as últimas tendências
                    </p>
                </div>
                <Menu>
                    <div className="haircut">
                        <img src={Img1} alt="corte1" />
                        <div className="haircut-info">
                            <button>Corte Simples:  R$ 35,00</button>
                        </div>
                    </div>
                    <div className="haircut">
                        <img src={Img2} alt="corte2" />
                        <div className="haircut-info">
                            <button>Barba: R$ 15,00</button>
                        </div>
                    </div>
                    <div className="haircut">
                        <img src={Img3} alt="corte3" />
                        <div className="haircut-info">
                            <button>Corte Completo: R$ 50,00</button>
                        </div>
                    </div>
                </Menu>
            </Section>
            



            <Section className="services">
                <div className="descricao">
                    <h2>Tatuagens</h2>
                    <p> 
                        Acreditamos que cada corte de cabelo é uma obra de arte.<br/>
                        Nossa equipe de barbeiros profissionais está pronta para proporcionar a você uma experiência única e
                        personalizada, combinando técnicas tradicionais com as últimas tendências
                    </p>
                </div>
                <Menu>
                    <div className="haircut">
                        <img src={Tatto1} alt="Tatto1" />
                        <div className="haircut-info">
                            <button>Corte Simples:  R$ 35,00</button>
                        </div>
                    </div>
                    <div className="haircut">
                        <img src={Tatto2} alt="Tatto2" />
                        <div className="haircut-info">
                            <button>Barba: R$ 15,00</button>
                        </div>
                    </div>
                    <div className="haircut">
                        <img src={Tatto3} alt="Tatto3" />
                        <div className="haircut-info">
                            <button>Corte Completo: R$ 50,00</button>
                        </div>
                    </div>
                </Menu>
            </Section>
        </Background>
    )
}

export default Servicos