import {MouseEventHandler} from "react";
import {Item} from "../@types/item";
import {Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";


export default function CustomModal({message, show, closeModal} :
{message: string, show: boolean, closeModal: MouseEventHandler}) {

    const navigate = useNavigate();



    return (
        <Modal show={show} >
            <ModalDialog>
                <ModalHeader>
                    <ModalTitle>Not enough tokens</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>Buy More Tokens</p>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={closeModal}>Close</button>
                </ModalFooter>
            </ModalDialog>
            <ToastContainer/>
        </Modal>
    )
}
