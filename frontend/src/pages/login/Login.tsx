import "./Login.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";

export default function Login() {


    const [email, setEmail] = useState("");



    const handleLogin = (e: any) => {
        e.preventDefault();

    }

    return (
        <div className="Login">
            <div className="main-store container w-50  my-5">
                <div className="heading text-center">
                    <h3 className="title">LOGIN</h3>
                </div>


                <form className="mx-auto text-center">
                    <div className="row justify-content-center">
                        <div className="input-field col-12 col-md-8">
                            <div className="input-container w-100 d-flex justify-content-between text-muted">
                                <FontAwesomeIcon size="2x" icon={faUser} />
                                <input className="ms-4"
                                       type="email"
                                       placeholder="Email"
                                       onChange={e => setEmail(e.target.value)}
                                       value={email}
                                       required />
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        <Link to="/play-now">Register account</Link>
                    </div>
                    <div className="row my-3 justify-content-center p-5">
                        <button className="btn vote-btn w-50" onClick={e => handleLogin(e)}>Login</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
