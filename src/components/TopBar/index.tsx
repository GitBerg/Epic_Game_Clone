import { Container } from "./styles";
import { SiEpicgames } from 'react-icons/si';
import { TfiWorld } from 'react-icons/tfi';
import { BsPersonFillDown } from 'react-icons/bs';


export default function TopBar(){
    return(
        <Container>
            <div className="navigation">
                <a id="logo"><SiEpicgames/></a>
                <a id="store">STORE</a>
                <a id="distribuition">DISTRIBUIÇÃO</a>
                <a id="help">AJUDA</a>
                <span id="line-v"></span>
                <a id="unreal">UNREAL ENGINE</a>
            </div>
            <div className="connections">
                <span id="language"><TfiWorld/></span>
                <span id="login"><span><BsPersonFillDown/></span>ENTRAR</span>
                <span id="download">BAIXAR EPIC GAMES</span>
            </div>      
        </Container>
    )
}