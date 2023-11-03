import { Container } from "./styles";
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook, BsArrowUpSquare } from 'react-icons/bs';
import { SiUnrealengine, SiEpicgames } from 'react-icons/si';

export default function Footer() {
    return (
        <Container>
            <div className="top">
                <div>
                    <span className="icon" style={{ fontSize: '28px' }}><BsFacebook /></span>
                    <span className="icon" style={{ fontSize: '34px' }}><AiOutlineTwitter /></span>
                    <span className="icon" style={{ fontSize: '32px' }}><AiFillYoutube /></span>
                </div>
                <span className="btn-top">
                    <BsArrowUpSquare />
                </span>
            </div>
            <div className="top-mid">
                <div className="columns">
                    <h3>Recursos</h3>
                    <div className="columns-list">
                        <ul>
                            <li>Apoie-um-Criador</li>
                            <li>Distribuir na Epic Games</li>
                            <li>Carreiras</li>
                            <li>Empresa</li>
                        </ul>
                        <ul>
                            <li>Política de Fanart</li>
                            <li>UX Research</li>
                            <li>EULA da Loja</li>
                        </ul>
                        <ul>
                            <li>Serviços On-line</li>
                            <li>Regras da Comunidade</li>
                            <li>Epic Newsroom</li>
                        </ul>
                    </div>
                </div>
                <div className="columns">
                    <h3>Feito pela Epic Games</h3>
                    <div className="columns-list">
                        <ul style={{ marginRight: "15px" }}>
                            <li>Battle Breakers</li>
                            <li>Fortnite</li>
                            <li>Infinity Blade</li>
                        </ul>
                        <ul>
                            <li>Robo Recall</li>
                            <li>Shadow Complex</li>
                            <li>Unreal Tournament</li>
                        </ul>
                    </div>
                </div>
            </div>
            <span className="line"></span>
            <div className="top-bottom">
                © 2023, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o
                logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos
                Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos.
            </div>
            <div className="bottom">
                <div className="links">
                    <span>Termos de Serviço</span>
                    <span>Política de Privacidade</span>
                    <span>Política de Reembolso da Loja</span>
                </div>
                <div className="logos">
                    <span><SiEpicgames /></span>
                    <span><SiUnrealengine /></span>
                </div>
            </div>
        </Container>
    )
}