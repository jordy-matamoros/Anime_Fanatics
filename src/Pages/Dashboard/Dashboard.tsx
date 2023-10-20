import { ContainerAnime } from "../../components/ContainerAnime/ContainerAnime";
import { useDashboard } from "./state/useDashboard"


export const Dashboard = () => {
    const {listAnime} = useDashboard();

    return (
        <ContainerAnime listAnime={listAnime}/>
    );
};