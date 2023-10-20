import { useEffect, useState } from "react";
import { AnimeList } from "../../../Pages/Dashboard/interfaces/Dashboard.interfaces";


export const useContainerAnime = (listAnime: AnimeList[]) => {
    const [animeList, setAnimeList] = useState<AnimeList[]>(listAnime);
    const [filter, setFilter] = useState("");

    const [name, setName] = useState("");

    const auxiliarListAnime = listAnime;

    const filterAnimeByGenre = (genre: string, auxListAnime: AnimeList[]): AnimeList[] => {
        return auxListAnime.filter((anime) => {
            const genresMayuscula = anime.data.genres.map((genre: { name: string; }) => genre.name.toUpperCase());
            return genresMayuscula.includes(genre.toUpperCase());
        });
    };
    const filterAnimeByName = (name: string, auxListAnime: AnimeList[]): AnimeList[] => {
        return auxListAnime.filter((anime) => {
            return anime.data.title.toUpperCase().includes(name.toUpperCase());
        });
    };

    useEffect(() => {

        if (animeList.length === 0 && filter === "" && name === "") {
            setAnimeList(listAnime);
            return;
        }

        if (filter !== "" && name !== "") {
            const aux = filterAnimeByName(name, auxiliarListAnime);
            setAnimeList(filterAnimeByGenre(filter, aux));
            return;
        }

        if (filter !== "") {
            setAnimeList(filterAnimeByGenre(filter, auxiliarListAnime));
            return;
        }

        if (filter === "" && name !== "") {
            setAnimeList(filterAnimeByName(name, auxiliarListAnime));
            return;
        }

        if (filter === "" && name === "") {
            setAnimeList(listAnime);
            return;
        }
    }, [filter]);

    useEffect(() => {
        
        
        if (animeList.length === 0 && filter === "" && name === "") {
            setAnimeList(listAnime);
            return;
        }

        if (name !== "" && filter !== "") {
            const aux = filterAnimeByGenre(filter, auxiliarListAnime);
            setAnimeList(filterAnimeByName(name, aux));
            return;
        }

        if (name !== "") {
            setAnimeList(filterAnimeByName(name, auxiliarListAnime));
            return;
        }

        if (name === "" && filter !== "") {
            setAnimeList(filterAnimeByGenre(filter, auxiliarListAnime));
            return;
        }

        if (name === "") {
            setAnimeList(listAnime);
            return;
        }

    }, [name]);

    useEffect(() => {
        setAnimeList(listAnime);
    }, [listAnime]);

    return {
        animeList,
        setFilter,
        setName
    }
}