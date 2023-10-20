import { AnimeHeader } from "../../../components/AnimeHeader/AnimeHeader"

export const NotFound = () => {
    return (
        <div>
            <AnimeHeader/>
            <div style={{
                marginTop: '100px', 
                display: 'flex', 
                alignItems: 'center',
                color: '#e0e5e9',
                justifyContent: 'center',
                textAlign: 'center',

                }}>
                <h1 style={{
                    width: '60%',
                    fontSize: '50px', 
                    backgroundColor: '#2f353a'}}>404 - Page not found<br/>:(</h1>
            </div>
        </div>
    )
}