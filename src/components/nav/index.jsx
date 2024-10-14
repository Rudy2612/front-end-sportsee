import zen from "../../assets/zen.svg"
import swim from "../../assets/swim.svg"
import bike from "../../assets/bike.svg"
import bodybuilding from "../../assets/bodybuilding.svg"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className="nav">

            <div className="nav__wrap">
                <Link to="/" className="nav__icon">
                    <img src={zen}></img>
                </Link>

                <Link to="/" className="nav__icon">
                    <img src={swim}></img>
                </Link>

                <Link to="/" className="nav__icon">
                    <img src={bike}></img>
                </Link>

                <Link to="/" className="nav__icon">
                    <img src={bodybuilding}></img>
                </Link>
            </div>

            <span className="nav__copyright">Copyright, SportSee 2020</span>
        </div>
    )
}
