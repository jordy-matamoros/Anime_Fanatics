import { ChangeEvent } from "react";
import { AnimeList } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import { CardAnime } from "../CardAnime/CardAnime"
import { useContainerAnime } from "./state/useContainerAnime"

export interface IContainerAnimeProps {
    listAnime: AnimeList[];
}

export const ContainerAnime = ({listAnime}: IContainerAnimeProps) => {
    const {setFilter, animeList, setName} = useContainerAnime(listAnime);


    return (
        <div style={{margin: "20px"}}>
            <div style={{
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
            }}>
                <input 
                style={{width: "75%", padding: "10px"}}
                type='text'
                placeholder='Search Anime'
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value.trim())
                    }
                    }
                />
                <input
                style={{width: "15%", padding: "10px"}}
                type='text'
                placeholder='Filter by Genre'
                onChange={
                    (e: ChangeEvent<HTMLInputElement>) => {
                    setFilter(e.target.value.trim())
                    }
                    }
                />
            </div>

            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

                {animeList.length !== 0 ? (
                    animeList.map((anime) => <CardAnime{...anime}/>)
                ) : (
                    <h3>Anime not found</h3>
                )}
            </div>
        </div>
    )
}