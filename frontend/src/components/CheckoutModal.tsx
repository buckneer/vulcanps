import {MouseEventHandler, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import {Item} from "../@types/item";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {buyItem} from "../services/item/items.service";

export default function CheckoutModal({item, show, closeModal} :
                                        {item: Item, show: boolean, closeModal: () => any}) {

    const navigate = useNavigate();

    const initialOptions = {
        "client-id": process.env.REACT_APP_PAYPAL_ID as string,
        currency: "USD",
        intent: "capture",
    }
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameConfirm, setUsernameConfirm] = useState("");


    const clearField = () => {
        setUsername("")
        setUsernameConfirm("")
        closeModal()
    }


    // PAYPAL ACTIONS
    const createOrder = (data: any, action: any) => {
        return action.order.create({
            purchase_units: [{
                "name": item.name,
                "description": item.name,
                "amount": {
                    "currency_code": "USD",
                    "value": item.price,
                }
            }],
            application_context: {
                shipping_preference: "NO_SHIPPING",
            },
        }).then((orderID : any) => {
            setOrderID(orderID);
            return orderID;
        });
    }

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(function (details: any) {
            const {payer} = details;
            setSuccess(true)
        })
    }



    const onError = () => {
        toast.error("An Error occurred with your payment")
        setErrorMessage("An Error occurred with your payment ");
    }

    useEffect(() => {

        if(success) {
            console.log(username)
            console.log(usernameConfirm)

            buyItem({username: username, itemName: item.name}).then(response => {
                toast.info(response.data.message);
                clearField()
            }).catch(error => {
                toast.error(error);
            })

        }
    }, [success]);

    return (
        <Modal show={show} >
            <PayPalScriptProvider options={initialOptions}>
                <ModalDialog>
                    <ModalHeader>
                        <ModalTitle>{item.name}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p>You are about to buy: {item.name}</p>
                        <br />
                        <div className="input-holder w-75">
                            <input className="me-5 my-2" type="text" placeholder="Enter your username"
                                   onChange={e => setUsername(e.target.value)}
                                   value={username}/>
                            <input className="me-5 my-2" type="text" placeholder="Enter your username"
                                   onChange={e => setUsernameConfirm(e.target.value)}
                                   value={usernameConfirm}/>

                        </div>
                        <p><b>Price: </b> ${item.price}</p>
                        <PayPalButtons style={{layout: 'horizontal'}}
                                       createOrder={createOrder}
                                       onApprove={onApprove}
                                       onError={onError} disabled={!username || !usernameConfirm || username !== usernameConfirm}/>


                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={() => clearField()}>Close</button>
                    </ModalFooter>
                </ModalDialog>
                <ToastContainer/>
            </PayPalScriptProvider>
        </Modal>
    )
}
