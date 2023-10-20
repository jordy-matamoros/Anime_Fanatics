import { Link } from "react-router-dom"
import { AnimeHeaderStyles, AnimeLogoStyles } from "./styles/AnimeHeaderStyles"


export const AnimeHeader = () => {
    return <header style={AnimeHeaderStyles}>
        <Link style= {AnimeLogoStyles} to="/dashboard">
            <h2>Anime Fanatics</h2>
        </Link>
        <h2>Search for your favorite Anime</h2>
    </header>
}