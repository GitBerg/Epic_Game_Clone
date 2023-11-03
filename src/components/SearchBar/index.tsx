import { Container } from "./styles";
import { BiSearch } from 'react-icons/bi';

export default function SearchBar(){
    return(
        <Container>
            <div className="content">
                <div className="input">
                    <input type="search" autoComplete="off" placeholder="Pesquisar loja" name="search" id="search" />
                    <span id="icon-search"><BiSearch/></span>
                </div>
                <div className="navigation">
                    <span className="active">Descobrir</span>
                    <span>Navegar</span>
                    <span>Novidades</span>
                </div>
            </div>
        </Container>
    )
}