import { AnimeList } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces"
import { useNavigate } from "react-router-dom"
import { 
    CardContainerStyles, 
    ImagesStyles,
    ScoreAnimeStyles,
    TitleAnimeStyles, 
} from "./styles/CardAnime.styles"

export const CardAnime = (anime: AnimeList) => {
    const navigate = useNavigate();
    return (
        <div 
        style={CardContainerStyles}
        onClick={() => {
            navigate(`/dashboard/${anime.data.mal_id}`)
        }}
        >
            <img
            style={{...ImagesStyles, 
                background: `linear-gradient(to bottom, #414a52, transparent), 
                            url(${anime.data.images.jpg.image_url})`,
                backgroundSize: "cover",
                }} 
            width="100%"
            height="260px"
            />
            <div style={TitleAnimeStyles}>
                <h3 style={{zIndex: "2"}}>{anime.data.title}</h3>
            </div>
            <div style={ScoreAnimeStyles}>
                <h4 style={{margin: "0px"}}>Score {anime.data.score}★</h4>
                <h4 style={{margin: "0px"}}>Ranked #{anime.data.rank}</h4>
            </div>
                <p style={{padding: "0px 4px"}}><strong>Synopsis:</strong> {anime.data.synopsis}</p>
            
        </div>
        )
    }