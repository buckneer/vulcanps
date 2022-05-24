import {MouseEventHandler, useState} from "react";
import {Item} from "../@types/item";
import {Form, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../services/item/items.service";


export default function CustomModal({show, closeModal} :
{show: boolean, closeModal: () => void}) {

    const navigate = useNavigate();

    const [adminSecret, setAdminSecret] = useState("");


    return (
        <Modal show={show} >
            <ModalDialog>
                <ModalHeader>
                    <ModalTitle>Not enough tokens</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form.Group className="mb-3 px-5">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="password"
                            autoFocus
                            aria-required
                            onChange={(e) => {setAdminSecret(e.target.value)}}
                            value={adminSecret}
                        />
                    </Form.Group>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={closeModal}>Cancel</button>
                </ModalFooter>
            </ModalDialog>
            <ToastContainer/>
        </Modal>
    )
}
