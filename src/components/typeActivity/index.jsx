import { useEffect, useState } from "react";
import { getPerformance } from "../../utils/fetchAPI";
import PropTypes from 'prop-types';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

export default function TypeActivity({ id }) {

    let [data, setData] = useState({});
    let [loading, setLoading] = useState(false);

    // Récupération des informations via l'id de l'utilisateur en props
    useEffect(() => {
        async function fetchAverageSession() {
            try {
                setLoading(true);
                const userData = await getPerformance(id);

                let data = [];
                userData.data.forEach((e) => data.unshift(e))

                setData(data);
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }

        fetchAverageSession();
    }, [id]);


    // Traduction du libellé des valeur en Français
    const activityFormater = (tick) => {
        const days = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];
        return days[tick - 1];

    };

    if (loading)
        return null;

    return (
        <div className="typeActivity">

            <ResponsiveContainer
                width={"100%"}
                height={"100%"}

            >
                <RadarChart data={data} cx='50%' cy='50%' outerRadius='60%' startAngle={90}
                    endAngle={-270}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white" }} tickFormatter={activityFormater} type='category' tickLine={false} />
                    <Radar name="value" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
                </RadarChart>


            </ResponsiveContainer>
        </div >
    )
}

TypeActivity.propTypes = {
    id: PropTypes.string,
}
