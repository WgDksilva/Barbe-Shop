
import { Link } from "react-router-dom";
import { Container, Menu, Li } from "./styles";
import Logotio1 from "../../assets/img/logotipo1.jpg"

function Header() {
    return (
        <Container>
            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>

                <Li>
                    <Link to="/servicos">Serviços</Link>
                </Li>

                <Li>
                    <Link to="/produtos">Produtos</Link>
                </Li>
            </Menu>

            <img src={Logotio1} alt="logotipo1-header" />
        </Container>
    )
}

export default Header

