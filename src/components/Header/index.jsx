import Logotio1 from "../../assets/img/logotipo1.jpg";

import { Link } from "react-router-dom";
import { Container, Menu, Li } from "./styles";


function Header() {
    return (
        <Container>
            <Menu>
                <Li>
                    <Link class="navigation-link" to="/">Home</Link>
                </Li>

                <Li>
                    <Link class="navigation-link" to="/servicos">Serviços</Link>
                </Li>

                <Li>
                    <Link class="navigation-link" to="/produtos">Produtos</Link>
                </Li>
            </Menu>

            <img src={Logotio1} alt="logotipo1-header" />
        </Container>
    )
}

export default Header

