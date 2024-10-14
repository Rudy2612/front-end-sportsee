import { useEffect, useState } from "react"
import { getActivity } from "../../utils/fetchAPI";
import { Bar, BarChart, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

export default function Activity({ id }) {

    const [loading, setLoading] = useState(false);
    const [activity, setActivity] = useState({})

    // Récupération des informations via l'id de l'utilisateur en props
    useEffect(() => {
        async function fetchActivity() {
            try {
                setLoading(true);
                const userData = await getActivity(id);
                setActivity(userData);
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }

        fetchActivity();
    }, [id]);


    // Curseur hover du graphique
    const CustomCursor = ({ active, payload }) => {
        if (active && payload && payload.length)
            return (
                <div className="activity-cursor">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}Kcal</p>
                </div>
            )
    }
    CustomCursor.propTypes = {
        payload: PropTypes.array,
        active: PropTypes.bool
    }


    if (!activity.sessions || loading)
        return null;


    // Calculs pour la fenêtre d'affichage du graphique
    let moyKilogram = Math.round(activity.sessions.reduce((acc, num) => acc + num.kilogram, 0) / activity.sessions.length);
    let maxCalories = Math.max(...activity.sessions.map(item => item.calories));

    return (
        <div className="activity">


            <div className="activity-header">
                <h2>Activité quotidienne</h2>
                <div className="activity-legend">
                    <p><span className="activity-legend__round bg-grey"></span>Poids (kg)</p>
                    <p><span className="activity-legend__round bg-red"></span>Calories brûlées (kCal)</p>
                </div>
            </div>

            <ResponsiveContainer
                width={"100%"}
                height={200}

            >
                <BarChart
                    data={activity.sessions}
                    barSize={7}
                    barGap={8}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />

                    {/* <XAxis tickFormatter={(tick) => tick + 1} axisLine={false} tickLine={false} dy={10} /> */}
                    <YAxis hide={true} dataKey="calories" orientation="left" yAxisId="left" domain={[0, maxCalories + 100]} />
                    <YAxis dataKey="kilogram" orientation="right" tickCount={3} tickLine={false} domain={[moyKilogram - 5, moyKilogram + 5]} dx={10} axisLine={false} />


                    <Tooltip content={<CustomCursor />} cursor={{ opacity: 0.5, color: "#C4C4C4" }} />

                    <Bar dataKey="kilogram" name={"Poids (kg)"} fill="#282D30" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="left" name={"Calories brûlées (kCal)"} fill="#E60000" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}


Activity.propTypes = {
    id: PropTypes.string
};

