import Linkedin from "../../assets/img/linkedin.jpeg";
import Github from "../../assets/img/github.jpg";
import Whatsapp from "../../assets/img/whatsapp.png";

import { Container, Menu, Li } from "./styles";

function Footer() {
    return (
        <Container>
            <Menu>
                <p>Desenvolvido por &copy; Vagner Silva</p>
                <Li>
                    <a href="https://www.linkedin.com/in/wgdksilva/">
                        <img src={Linkedin} alt="Linkedin" /></a>
                </Li>
                <Li>
                    <a href="https://github.com/WgDksilva/">
                        <img src={Github} alt="Github" /></a>
                </Li>
                <Li>
                    <a href="https://api.whatsapp.com/send?phone=5511923423423&text=Ol%C3%A1,%20quero%20a%20ajuda%20dos%20irm%C3%A3os%20Mario!"><img src={Whatsapp} alt="Whatsapp" /></a>
                </Li>
            </Menu>
        </Container>
    )
};

export default Footer

