import { useEffect, useState } from "react"
import { AnimeList } from "../interfaces/Dashboard.interfaces"

export const useDashboard = () => {
    const [listAnime, setAnimeList] = useState<AnimeList[]>([]);

    useEffect(() => {
        const getAnimes = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime`
            );
        const responseBody = await response.json();
        const arrayPromises = responseBody.data.map(
            (anime: {title: string, mal_id: string}) => {
                syncDelay(400);
                const urlAnime = `https://api.jikan.moe/v4/anime/${anime.mal_id}`;
                return fetch(urlAnime);
            }
        );
        
        const arrayRespuestasDePromises = (
        await Promise.allSettled(arrayPromises)
        // @ts-ignore
        ).map((el) => el.value);

        const resultsFromAllSettled = (
        await Promise.allSettled(
            arrayRespuestasDePromises.map(async (el) => await el.json())
        )
        // @ts-ignore
        ).map((el) => el.value);

        console.log("termino de cargar ", resultsFromAllSettled);

        setAnimeList(resultsFromAllSettled);
        };

        getAnimes();
    }, []);

    return {
        listAnime,
    };
};

const syncDelay = (milliseconds: number) =>{
    let start = new Date().getTime();
    let end = 0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}