import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo}></img>
            <nav className="header__nav-wrap">
                <Link className="header__link" to="/">Accueil</Link>
                <Link className="header__link" to="/">Profil</Link>
                <Link className="header__link" to="/">Réglages</Link>
                <Link className="header__link" to="/">Communauté</Link>
            </nav>
        </header>
    )
}
