import { useEffect, useState } from "react";
import { AnimeList } from "../../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import { Params } from "react-router-dom";

export const useAnimeDetails = (params: Readonly<Params<string>>) => {
    const [anime, setAnime] = useState<AnimeList | null>(null);

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

    return anime;
}
