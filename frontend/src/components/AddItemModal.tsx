import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";
import {CategoryType} from "../services/item/category.type";
import {AddItemSchema} from "../@types/item";
import {addNewItem} from "../services/item/items.service";
import {toast} from "react-toastify";


export default function AddItemModal(
    {show, closeModal, categories} :
        {show: boolean, categories: CategoryType[], closeModal : () => void}) {


    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemUrl, setItemUrl] = useState("");
    const [category, setCategory] = useState<CategoryType['name']>("weaponry");
    const [adminSecret, setAdminSecret] = useState("");


    let clearForms = () => {
        setItemUrl("");
        setItemPrice("");
        setItemName("");
        setCategory("weaponry");
        setAdminSecret("");
    }


    let handleAddItem = () => {
        let newItem: AddItemSchema = {
            name: itemName,
            price: itemPrice,
            icon: itemUrl,
            category: category,
            adminSecret: adminSecret
        }

        addNewItem(newItem).then(response => {
            toast.success(`Added new item with name: ${response.data.name}`)
        }).catch(error => {
            console.log(error);
            toast.error("Internal Server Error")
        })

        closeModal();
    }


    return (
        <Modal  show={show} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3 px-5">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="EX. Dragon Defender"
                            autoFocus
                            aria-required
                            onChange={(e) => {setItemName(e.target.value)}}
                            value={itemName}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 px-5">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="EX. https://i.ibb.co/QXfHkVh/armadyl-godsword.png"
                            aria-required
                            onChange={(e) => {setItemUrl(e.target.value)}}
                            value={itemUrl}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 px-5">
                        <Form.Label>
                            Category
                        </Form.Label>
                        <Form.Select aria-label="weaponry" onChange={(e) => setCategory(e.target.value)} value={category}>
                            {categories && categories.map(category => (
                                <option key={category.name} value={category.name}>{category.name.toUpperCase()}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <InputGroup className="mb-3 px-5">
                        <InputGroup.Text>$</InputGroup.Text>

                        <Form.Control
                            type="number"
                            placeholder="EX. $30"
                            aria-required
                            onChange={(e) => {setItemPrice(e.target.value)}}
                            value={itemPrice}
                        />
                    </InputGroup>

                    <Form.Group className="mb-3 px-5">
                        <Form.Label>Admin Secret</Form.Label>
                        <Form.Control
                            type="password"
                            autoFocus
                            aria-required
                            onChange={(e) => {setAdminSecret(e.target.value)}}
                            value={adminSecret}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex w-100 justify-content-between">
                    <Button className="w-25" variant="secondary" onClick={() => {clearForms(); closeModal()}}>
                        Cancel
                    </Button>
                    <Button className="w-50" variant="success" onClick={handleAddItem}>
                        Save Changes
                    </Button>
                </div>

            </Modal.Footer>
        </Modal>
    )
}
