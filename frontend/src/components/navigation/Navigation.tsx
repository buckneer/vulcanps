import "./Navigation.scss";
import logo from "../../assets/main/logo.png"
import linkImg from "../../assets/main/nav-item.png";
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <div className="navbar-brand d-sm-none d-block">
                    <img src={logo} alt="logo" width="250px" />
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-5" >
                            <a className="nav-link" aria-current="page" href="#">FORUMS</a>
                        </li>
                        <li className="ms-5 d-sm-block d-none">
                            <img className="py-2" src={linkImg} alt="item" />
                        </li>
                        <li className="nav-item ms-5">
                            <a className="nav-link" href="#">DISCORD</a>
                        </li>
                        <li className="ms-5 d-sm-block d-none">
                            <img className="py-2" src={linkImg} alt="item" />
                        </li>
                        <li className="nav-item ms-5">
                            <NavLink to="/play-now" className="nav-link">PLAY NOW</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-brand d-none d-sm-block">
                    <img src={logo} alt="logo" width="250px" />
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-5">
                            <NavLink to="/store" className="nav-link" aria-current="page">STORE</NavLink>
                        </li>
                        <li className="ms-5 d-sm-block d-none">
                            <img className="py-2" src={linkImg} alt="item" />
                        </li>
                        <li className="nav-item ms-5">
                            <a className="nav-link" href="#">VOTE</a>
                        </li>
                        <li className="ms-5 d-sm-block d-none">
                            <img className="py-2" src={linkImg} alt="item" />
                        </li>
                        <li className="nav-item ms-5">
                            <NavLink className="nav-link" to="/hiscores">HISCORES</NavLink>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    )
}
