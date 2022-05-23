import "./ItemBox.scss";
import {Item} from "../../@types/item";
import {toast} from "react-toastify";
import {useContext, useState} from "react";
import CheckoutModal from "../CheckoutModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


export default function ItemBox({item}: {item: Item}) {

    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(prevState => {return !prevState})
    }


    let handleBuy = () => {
        setShow(true);
    }

    return (
        <div className="ItemBox col-12 col-md-6 col-lg-3 store-item">
            <div className="block">
                <div className="title-wrapper">
                    <h5 className="title">
                        <span>{item.name}</span>
                    </h5>
                </div>
                <div className="main-body">
                    <div className="row">
                        <div className="col-12 align-content-center text-center">
                            <div className="image-holder">
                                <img src={item.icon}  alt="icon" />
                            </div>
                        </div>
                        <div className="col-12 align-content-center text-center">
                            <div>
                                {item.category === "tokens" && (
                                    <span className="price text-warning">

                                        ${item.price}
                                    </span>
                                )}
                                {item.category !== "tokens" && (
                                    <span className="price text-warning">

                                        ${item.price}
                                    </span>
                                )}

                                <br />
                                <button className="btn btn-danger" onClick={toggleModal}>Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutModal item={item} show={show} closeModal={toggleModal} />
        </div>
    )
}
