import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";
import {CategoryType} from "../services/item/category.type";


export default function AddItemModal(
    {show, closeModal, categories} :
        {show: boolean, categories: CategoryType[], closeModal : () => void}) {


    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemUrl, setItemUrl] = useState("");
    const [category, setCategory] = useState<CategoryType['name']>("");


    let clearForms = () => {
        setItemUrl("");
        setItemPrice("");
        setItemName("");
        setCategory("weaponry");
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
                    {category === "tokens" && (
                        <InputGroup className="mb-3 px-5">
                            <InputGroup.Text>Price in dollars</InputGroup.Text>

                            <Form.Control
                                type="number"
                                placeholder="EX. 20"
                                aria-required
                                onChange={(e) => {setItemPrice(e.target.value)}}
                                value={itemPrice}
                            />
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup>
                    )}
                    {category !== "tokens" && (
                        <InputGroup className="mb-3 px-5">
                            <InputGroup.Text>Price in Tokens</InputGroup.Text>

                            <Form.Control
                                type="number"
                                placeholder="EX. 600"
                                aria-required
                                onChange={(e) => {setItemPrice(e.target.value)}}
                                value={itemPrice}
                            />
                            <InputGroup.Text>Tokens</InputGroup.Text>
                        </InputGroup>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex w-100 justify-content-between">
                    <Button className="w-25" variant="secondary" onClick={() => {clearForms(); closeModal()}}>
                        Cancel
                    </Button>
                    <Button className="w-50" variant="success">
                        Save Changes
                    </Button>
                </div>

            </Modal.Footer>
        </Modal>
    )
}
