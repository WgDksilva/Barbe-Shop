import Logotio6 from "../../assets/img/logotipo6.avif";

import { Link, useLocation } from "react-router-dom";
import { Container, Menu, Li } from "./styles";
import { useState } from "react";


function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 150) {
            setChangeBackground(true)
        }
        if (changeBackground && window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    };

    return (
        <Container changeBackground={changeBackground}>
            <Menu>
                <Li isactive={pathname === '/'}>
                    <Link className="navigation-link" to="/">Home</Link>
                </Li>

                <Li isactive={pathname.includes('servicos')}>
                    <Link className="navigation-link" to="/servicos">Serviços</Link>
                </Li>

                <Li isactive={pathname.includes('produtos')}>
                    <Link className="navigation-link" to="/produtos">Produtos</Link>
                </Li>
            </Menu>
            <img src={Logotio6} alt="Logotio6-header" />
        </Container>
    )
};

export default Header

