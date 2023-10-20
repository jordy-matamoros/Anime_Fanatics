import { useEffect, useState } from "react"
import { AnimeList } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces"
import { Link, useParams } from "react-router-dom";
import { AnimeHeader } from "../AnimeHeader/AnimeHeader";
import { NotFound } from "../../Pages/Home/404/NotFound";

export const AnimeDetail = () => {
    const [anime, setAnime] = useState<AnimeList | null>(null);
    const params = useParams();

    useEffect(() => {
        const getSingleAnime = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime/${params.id}`
                );
            const responseBody = await response.json();

            setAnime(responseBody);
        };

        getSingleAnime();
    }, []);

    return (
        <div>
            <AnimeHeader/>
            <nav style={{marginTop: "20px"}}>
                <Link style={{
                    color: "#2f353a", 
                    fontSize: "20px", 
                    textDecoration: "none"
                }} to="/dashboard"><strong>&lt; Back</strong></Link>
            </nav>
            {anime !== null ? (
                <div style={{margin: "20px", display: "flex", flexDirection: "row", backgroundColor: "#e3e3e3"}}>
                    <nav style={{borderRight: "1px solid #2f353a", padding: "10px",}}>
                        <h2 style={{marginTop: "0px"}}>{anime.data.title}</h2>
                        <img src={anime.data.images.jpg.image_url} alt={anime.data.title} />
                        <h3 style={{borderBottom: "1px solid #2f353a"}}>Information</h3>
                        <p> <strong>Type:</strong> {anime.data.type}</p>
                        <p> <strong>Episodes:</strong> {anime.data.episodes}</p>
                        <p> <strong>Status:</strong> {anime.data.status}</p>
                        <p><strong>Genres:</strong> {anime.data.genres.map((genre: { name: string }) => (
                            genre.name + ", "
                        ))}
                        </p>
                        <p><strong>Duration:</strong> {anime.data.duration}</p>
                        <p><strong>Rating:</strong> {anime.data.rating}</p>
                    </nav>
                    <div style={{margin: "10px"}}>
                        <nav style={{
                            border: "1px solid #2f353a", 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "space-around",
                            color: "#e0e5e9",
                            backgroundColor: "#2f353a",
                            }}>
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
                                href={anime.data.url}>  <strong>MyAnimeList ➡︎ {anime.data.title}</strong>
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