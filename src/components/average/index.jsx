import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getAverageSessions } from "../../utils/fetchAPI";

export default function Average({ id }) {

    let [session, setSession] = useState({});
    let [loading, setLoading] = useState(false)

    // Récupération des informations via l'id de l'utilisateur en props
    useEffect(() => {
        async function fetchAverageSession() {
            try {
                setLoading(true);
                const userData = await getAverageSessions(id);
                setSession(userData.sessions);
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }

        fetchAverageSession();
    }, [id]);

    // Convertir la légende "day" de chiffre en lettre
    const dayFormatter = (tick) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[tick - 1];
    };

    if (loading)
        return null;

    return (
        <div className="average">
            <h2>Durée moyenne des <br />sessions</h2>
            <ResponsiveContainer width={"100%"} height={265}>
                <LineChart
                    data={session}
                    margin={{ top: 30, right: 20, left: 20, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "white" }} tickFormatter={dayFormatter} dy={10} />
                    <YAxis hide={true} dataKey="sessionLength" domain={["dataMin - 5", "dataMax + 20"]} />

                    <Tooltip content={<CustomTooltip />} isAnimationActive={true} cursor={<CustomCursor />} />

                    <Line
                        type={"monotone"}
                        dataKey="sessionLength"
                        stroke="#FFF"
                        strokeWidth={2}
                        strokeOpacity={0.5}
                        dot={false}
                        activeDot={true}
                        isAnimationActive={true}
                        animationEasing="linear"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

Average.propTypes = {
    id: PropTypes.string,
}




const CustomTooltip = ({ payload }) => {
    if (payload.length >= 1)
        return (
            <div className="average-tooltip">
                <p>{payload[0].value} min</p>
            </div>
        )
}
CustomTooltip.propTypes = {
    payload: PropTypes.array,
}



const CustomCursor = ({ points }) => {
    const { x } = points[0];
    return (
        <rect
            x={x}
            y={0}
            width={"100%"}
            height={"100%"}
            fill="rgba(0, 0, 0, 0.09)"
        />
    )
}
CustomCursor.propTypes = {
    points: PropTypes.array,
}
