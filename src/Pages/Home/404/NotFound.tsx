import { AnimeHeader } from "../../../components/AnimeHeader/AnimeHeader"
import { NotFoundStyles, TitleStyles } from "./styles/NotFound.styles"

export const NotFound = () => {
    return (
        <div>
            <AnimeHeader/>
            <div style={NotFoundStyles}>
                <h1 style={TitleStyles}>404 - Page not found
                    <br/>:(
                </h1>
            </div>
        </div>
    )
}