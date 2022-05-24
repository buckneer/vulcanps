import "./AdminItemBox.scss";
import CheckoutModal from "../CheckoutModal";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Item} from "../../@types/item";
import {deleteItem} from "../../services/item/items.service";
import {toast} from "react-toastify";



function AdminItemBox({item, adminSecret} : {item: Item, adminSecret: string}) {

    const handleDelete = () => {
        deleteItem(item.name, adminSecret).then(response => {
            if(response.status === 200) {
                if(response.data.message === "You're not admin") {
                    toast.error("Incorrect password")
                } else {
                    toast.success(`Item with name ${item.name} deleted`)
                }
            }


        }).catch(error => {
            console.log(error)
            toast.error(`Internal Server Error(code: ${error.response.status}`)
        })
    }

    return (
        <div className="AdminItemBox col-12 col-md-6 col-lg-3">
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
                                <button className="btn btn-danger" onClick={handleDelete} disabled={!adminSecret}>
                                    <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
                                    &nbsp; Delete Item
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminItemBox;
