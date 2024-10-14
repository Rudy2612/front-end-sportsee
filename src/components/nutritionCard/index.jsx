import calories_icon from "../../assets/calories-icon.svg"
import protein_icon from "../../assets/protein-icon.svg"
import carbs_icon from "../../assets/carbs-icon.svg"
import fat_icon from "../../assets/fat-icon.svg"
import PropTypes from 'prop-types';


const listIcon = {
    Calories: calories_icon,
    Proteines: protein_icon,
    Glucides: carbs_icon,
    Lipides: fat_icon
};

export default function NutritionCard({ type, value, unite }) {

    let icon = listIcon[type]

    return (
        <div className="nutrition-card">
            <div>
                <img className="nutrition-card__icon" src={icon} />
            </div>
            <div>
                <p className="nutrition-card__value">{value + unite}</p>
                <p className="nutrition-card__type">{type}</p>
            </div>
        </div>
    )
}

NutritionCard.propTypes = {
    type: PropTypes.string,
    value: PropTypes.number,
    unite: PropTypes.string,
}
