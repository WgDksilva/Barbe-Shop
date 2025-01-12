
import { Link } from "react-router-dom";
import { Container, Menu, Li } from "./styles";

function Footer() {
    return (
        <Container>
            <Menu>
                <Li>
                    <Link>Home</Link>
                </Li>

                <Li>
                    <Link>Serviços</Link>
                </Li>

                <Li>
                    <Link>Produtos</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Footer

// import Logotipo6 from "../../assets/img/logotipo6.avif";

//  <img src={Logotipo6} alt="logotipo-Footer"/>
