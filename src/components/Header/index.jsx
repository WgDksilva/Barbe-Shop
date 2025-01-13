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
                <Li isActive={pathname === '/'}>
                    <Link class="navigation-link" to="/">Home</Link>
                </Li>

                <Li isActive={pathname.includes('servicos')}>
                    <Link class="navigation-link" to="/servicos">Serviços</Link>
                </Li>

                <Li isActive={pathname.includes('produtos')}>
                    <Link class="navigation-link" to="/produtos">Produtos</Link>
                </Li>
            </Menu>
            <img src={Logotio6} alt="Logotio6-header" />
        </Container>
    )
};

export default Header

