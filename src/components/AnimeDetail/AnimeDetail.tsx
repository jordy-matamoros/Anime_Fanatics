import { Link, useParams } from "react-router-dom";
import { AnimeHeader } from "../AnimeHeader/AnimeHeader";
import { NotFound } from "../../Pages/Home/404/NotFound";
import { useAnimeDetails } from "./state/useAnimeDetail";
import { AnimeDetailStyles, 
        AnimeInformationStyles, 
        AnimeScoreStyles, 
        BackButtonStyles } 
from "./styles/animeDetail.styles";

export const AnimeDetail = () => {
    const params = useParams();
    const anime = useAnimeDetails(params);

    return (
        <div>
            <AnimeHeader/>
            <nav style={{marginTop: "20px"}}>
                <Link style={BackButtonStyles} to="/dashboard">
                <strong>&lt; Back</strong></Link>
            </nav>
            {anime !== null ? (
                <div style={AnimeDetailStyles}>
                    <nav style={AnimeInformationStyles}>
                        <h2 style={{marginTop: "0px"}}>{anime.data.title}</h2>
                        <img src={anime.data.images.jpg.image_url} alt={anime.data.title} />
                        <h3 style={{borderBottom: "1px solid #2f353a"}}>Information</h3>
                        <p> <strong>Type:</strong> {anime.data.type}</p>
                        <p> <strong>Episodes:</strong> {anime.data.episodes}</p>
                        <p> <strong>Status:</strong> {anime.data.status}</p>
                        <p><strong>Genres:</strong> {anime.data.genres.map(
                            (genre: { name: string }) => (
                            genre.name + ", "
                        ))}
                        </p>
                        <p><strong>Duration:</strong> {anime.data.duration}</p>
                        <p><strong>Rating:</strong> {anime.data.rating}</p>
                    </nav>
                    <div style={{margin: "10px"}}>
                        <nav style={AnimeScoreStyles}>
                            <h2 style={{margin: "0px"}}>Score: {anime.data.score}★</h2>
                            <h2 style={{margin: "0px"}}>Ranked: #{anime.data.rank}</h2>
                            <h2 style={{margin: "0px"}}>Popularity: #{anime.data.popularity}</h2>
                        </nav>
                        <h3 style={{ borderBottom: "1px solid #2f353a"}}>Trailer</h3>
                        <a href={anime.data.trailer.url}>
                            <img src={anime.data.trailer.images.medium_image_url} 
                            alt={anime.data.title}/>
                        </a>
                        <h3 style={{ borderBottom: "1px solid #2f353a"}}>Synopsis</h3>
                        <p>{anime.data.synopsis}</p>
                        <h3 style={{ borderBottom: "1px solid #2f353a"}}>Background</h3>
                        <p>{anime.data.background}</p>
                        <h3 style={{ borderBottom: "1px solid #2f353a"}}>More Information</h3>
                        <p>For more information visit:
                            <a style={{color: "#2f353a", textDecoration: "none"}} 
                                href={anime.data.url}>  
                                    <strong> MyAnimeList ➡︎ {anime.data.title}</strong>
                            </a>
                        </p>
                    </div>
                </div>
            ): (
                <NotFound />
            )
            }
        </div>
    )
}