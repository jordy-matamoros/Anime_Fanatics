import { Link } from "react-router-dom"
import { animeHeaderStyles } from "./styles/AnimeHeaderStyles"


export const AnimeHeader = () => {
    return <header style={animeHeaderStyles}>
        <Link style= {{textDecoration: "none", color: "#e0e5e9"}} to="/dashboard">
            <h2>Anime Fanatics</h2>
        </Link>
        <h2>Search for your favorite Anime</h2>
    </header>
}