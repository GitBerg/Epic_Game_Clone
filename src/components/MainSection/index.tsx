import { BiPlusCircle } from "react-icons/bi";
import { Container, FirstSection, MainCard, BitCard } from "./styles";
import { useEffect, useState } from "react";
import GameData from "../../interfaces";
import { getGames } from "../../services/api";

export default function MainSection() {

    const [games, setGames] = useState<GameData[]>([]);
    const [currentGame, setCurrentGame] = useState<GameData>();
    const [gameId, setGameId] = useState<number>(2);


    useEffect(() => {
        void (async () => {
            try {
                const gameRequest = await getGames();
                const { data: gameResponse } = gameRequest;
                setGames(gameResponse)
                setCurrentGame(gameResponse[0])
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            games.forEach(game => {
                if (gameId === game.id) {
                    setCurrentGame(game);
                }
            })
            if (gameId === 6) {
                setGameId(1)
            } else {
                setGameId(gameId => gameId + 1)
            }
        }, 9000);

        return () => clearInterval(interval)
    }, [gameId, games])


    return (
        <Container>
            <FirstSection>
            <MainCard>
                <div className="shadow"></div>
                {
                    games.map((game) => (
                        <div className="banner" key={game.id}>
                            <img src={game.img} className={`img ${currentGame?.id === game.id ? "active" : ""}`} />
                            <div className={`info ${currentGame?.id === game.id ? "active" : ""}`}>
                                <span id="subtitle">{game.subtitle}</span>
                                <span id="description">{game.description}</span>
                                <span id="price">{game?.price === 0 ? "Gratuito" : `A partir de R$ ${String(game?.price.toFixed(2)).replace(".", ",")}`}</span>
                            </div>
                            <div className={`btns ${currentGame?.id === game.id ? "active" : ""}`}>
                                    <span id="purchase">{
                                                [
                                                game?.released && game?.price ===0 && "JOGUE DE GRAÇA",
                                                game?.released && game?.price !==0 && "COMPRE AGORA",
                                                game?.released === false && "COMPRE JÁ NA PRÉ-VENDA",
                                            ]
                                                }</span>
                                    <span id="wish-list"><span id="icon"><BiPlusCircle /></span>PARA A LISTA DE DESEJOS</span>
                            </div>
                        </div>
                        
                    ))
                }
            </MainCard>
                <ul>
                    {
                        games.map((game) => (
                            <BitCard key={game.id} onClick={() => {
                                setGameId(game.id + 1)
                                setCurrentGame(game)
                            }}>
                                <div className={`mini-card ` + `${currentGame?.id === game.id ? "active" : ""}`} />
                                <img src={game.bitImg} className={`img-card ` + `${currentGame?.id === game.id ? "active" : ""}`} />
                                <span>{game.name}</span>
                            </BitCard>
                        ))
                    }
                </ul>
            </FirstSection>
        </Container>
    )
}