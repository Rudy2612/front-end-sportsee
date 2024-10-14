
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';


export default function Score({ score }) {

    return (
        <div className="score">

            <ResponsiveContainer width="100%" height="100%">


                <PieChart width={180} height={180}>

                    <Pie
                        data={[
                            { value: score, fill: "red" },
                            { value: 1 - score, fill: "transparent" },
                        ]}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius={70}
                        outerRadius={80}

                        cornerRadius={100}
                        stroke="transparent"
                    />

                    <circle cx="50%" cy="50%" r="70px" fill="white" />

                    <text x="50%" y="44%" textAnchor="middle" fontSize="26" fontWeight="700" fill="black">
                        {score * 100}%
                    </text>
                    <text x="50%" y="54%" textAnchor="middle" fontSize="16" fill="#9B9EAC" fontWeight="500">
                        de votre
                    </text>
                    <text x="50%" y="64%" textAnchor="middle" fontSize="16" fill="#9B9EAC" fontWeight="500">
                        objectif
                    </text>

                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

Score.propTypes = {
    score: PropTypes.number,
}