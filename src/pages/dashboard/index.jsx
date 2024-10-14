import { useEffect, useState } from "react";
import Nav from "../../components/nav";
import { useParams, Navigate } from "react-router-dom";
import { getUser } from "../../utils/fetchAPI";
import Activity from "../../components/activity";
import Average from "../../components/average";
import TypeActivity from "../../components/typeActivity";
import Score from "../../components/score";
import NutritionCard from "../../components/nutritionCard";


export default function Dashboard() {

    // Récupération de l'ID utilisateur présent dans l'URL
    let { id } = useParams();

    let [user, setUser] = useState({});
    let [loading, setLoading] = useState(true);

    // Récupération des données de l'utilisateur via son ID
    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                const userData = await getUser(id);
                setUser(userData);
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }

        fetchUser();

    }, [id]);


    if (loading)
        return null;

    // Redirection si l'utilisateur n'existe pas et qu'aucune données n'est retournée
    if (!user)
        return <Navigate to="/" />

    return (
        <div className="dashboard">
            <Nav />
            <div className="dashboard__content">
                <h1 className="dashboard__hello">Bonjour <span>{user.userInfos.firstName}</span></h1>
                <p className="dashboard__resume">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>


                <div className="dashboard__container">
                    <div>
                        <Activity id={id} />
                        <div className="dashboard__row">
                            <Average id={id} />
                            <TypeActivity id={id} />
                            <Score score={user.score} />
                        </div>
                    </div>
                    <div className="dashboard__card-flex">
                        <NutritionCard type={"Calories"} value={user.keyData.calorieCount} unite={"kCal"} />
                        <NutritionCard type={"Proteines"} value={user.keyData.proteinCount} unite={"g"} />
                        <NutritionCard type={"Glucides"} value={user.keyData.carbohydrateCount} unite={"g"} />
                        <NutritionCard type={"Lipides"} value={user.keyData.lipidCount} unite={"g"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
