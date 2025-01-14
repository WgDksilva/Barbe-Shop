import Header from "../../components/Header";
import Logotio2 from "../../assets/img/logotipo2.png";

import { Background, Button, Container, Info, Poster } from './styles';

function Home() {

    return (
        <Background img="https://construindodecor.com.br/wp-content/uploads/2020/11/Decoracao-De-Barbearia-Industrial-2.jpg">

            <Container>
                <Poster>
                    <img className="logotipo2" src={Logotio2} alt="logotipo2-header" />

                    <img className="poster" src="https://www.mycoupe.fr/wp-content/uploads/2020/01/debarraser-poils-oreilles-homme-sciseaux-810x477.jpg" alt="barbeiro" />
                </Poster>

                <Info>
                    <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>

                    <p className="chamada">
                        Acreditamos que cada corte de cabelo é uma obra de arte.<br/>
                        Nossa equipe de barbeiros profissionais está pronta para proporcionar a você uma experiência única e
                        personalizada, combinando técnicas tradicionais com as últimas tendências.
                    </p>
                   
                    <p className="horario"> Horário de Funcionamento: <strong>09:00</strong> ás <strong>19:00</strong></p>
                </Info>

                <Button>
                    <a href="https://api.whatsapp.com/send?phone=5511923423423&text=Ol%C3%A1,%20quero%20a%20ajuda%20dos%20irm%C3%A3os%20Mario!">Agendar Horário</a>
                </Button>
            </Container>
        </Background>
    );
};

export default Home


