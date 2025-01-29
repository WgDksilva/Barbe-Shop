import Header from "../../components/Header";

import product1 from "../../assets/img-product/img1.jpeg";
import product2 from "../../assets/img-product/img2.jpeg";
import product3 from "../../assets/img-product/img3.jpeg";

import product4 from "../../assets/img-product/img4.jpeg";
import product5 from "../../assets/img-product/img5.jpeg";
import product6 from "../../assets/img-product/img6.jpeg";

import { Background, Container, Menu, Section } from "./styles";

function Produtos() {

    return (
        <Background img="https://construindodecor.com.br/wp-content/uploads/2020/11/Decoracao-De-Barbearia-Industrial-2.jpg">

            <Container>
                <Section className="barber-products">
                    <div className="descricao">
                        <h2>Transforme Seu Visual com Nossos Produtos de Barbearia!</h2>
                        <p>
                            Descubra a linha completa de produtos de barbearia que vão elevar sua rotina de cuidados pessoais a um novo patamar. Desde óleos nutritivos até balms modeladores, temos tudo o que você precisa para manter sua barba impecável e cheia de estilo.
                        </p>
                    </div>
                    <Menu>
                        <div className="product">
                            <img src={product1} alt="corte1" />
                            <div className="product-info">
                                <button>Sobre</button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={product2} alt="corte2" />
                            <div className="product-info">
                                <button>Sobre</button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={product3} alt="corte3" />
                            <div className="product-info">
                                <button>Sobre</button>
                            </div>
                        </div>
                    </Menu>
                </Section>

                <Section className="barber-products">
                    <Menu>
                        <div className="product">
                            <img src={product4} alt="Tatto1" />
                            <div className="product-info">
                                <button>Sobre</button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={product5} alt="Tatto2" />
                            <div className="product-info">
                                <button>Sobre</button>
                            </div>
                        </div>
                        <div className="product">
                            <img src={product6} alt="Tatto3" />
                            <div className="product-info">
                                <button>Sobre</button>
                            </div>
                        </div>
                    </Menu>
                </Section>
            </Container>
        </Background>
    )
}

export default Produtos