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
                }} to="/dashboard">&lt;Back</Link>
            </nav>
            {anime !== null ? (
                <div>
                    <h2>{anime.data.title}</h2>
                    <img src={anime.data.images.jpg.image_url} alt={anime.data.title} />
                    <p>{anime.data.synopsis}</p>
                    <p>GENRES: {anime.data.genres.map((genre: { name: string }) => (
                        genre.name + ", "
                    ))}</p>
                </div>
            ): (
                <NotFound />
            )
            }
        </div>
    )
}