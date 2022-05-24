import "./Admin.scss";
import CategoryBox from "../../components/categorybox/CategoryBox";
import ItemBox from "../../components/itembox/ItemBox";
import CustomModal from "../../components/CustomModal";
import {ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import {Item} from "../../@types/item";
import {getAllItems} from "../../services/item/items.service";
import AdminItemBox from "../../components/adminitembox/AdminItemBox";
import {CategoryType} from "../../services/item/category.type";
import {getCategories} from "../../services/item/category.service";
import AddItemModal from "../../components/AddItemModal";
import {Form} from "react-bootstrap";


function Admin() {

    const [allItems, setAllItems] = useState<Item[] | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [show, setShow] = useState(false);
    const [adminSecret, setAdminSecret] = useState("");


    let toggleModal = () => {
        setShow(prevState => !prevState);
    }



    useEffect(() => {

        setCategories(getCategories())

        getAllItems().then(response => {
            let items = response.data as Item[]
            setAllItems([...items])
        })
    }, []);






    return (
        <div className="Admin">
            <div className="main-store container my-5">
                <div className="heading text-center">
                    <h4 className="title">ADMIN AREA</h4>
                </div>
                <p className="regular-text text-center pb-4">If you want to delete item, you'll have to enter admin secret first in the field below</p>
                {/*<Form.Group className="mb-3 px-5 w-50 mx-auto">*/}
                {/*    <Form.Label>Item Name</Form.Label>*/}
                {/*    <Form.Control*/}
                {/*        type="password"*/}
                {/*        autoFocus*/}
                {/*        placeholder=""*/}
                {/*        aria-required*/}
                {/*        onChange={(e) => {setAdminSecret(e.target.value)}}*/}
                {/*        value={adminSecret}*/}
                {/*    />*/}
                {/*</Form.Group>*/}

                <div className="input-holder w-25 mx-auto mb-4">
                    <input className="me-5 my-2" type="password" placeholder="Enter admin password"
                           onChange={e => setAdminSecret(e.target.value)}
                           value={adminSecret}/>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">


                        <div className="row items justify-content-between">
                            {allItems && allItems.map(item => (
                                <AdminItemBox item={item} key={item.name} adminSecret={adminSecret}/>
                            ))}
                        </div>


                    </div>
                </div>

                <div className="add-items text-center my-5 pb-5">
                    <button className="btn btn-success w-50 mx-auto" onClick={toggleModal}>Add item</button>
                </div>


            </div>
            <ToastContainer autoClose={2000} />
            <AddItemModal show={show} categories={categories} closeModal={toggleModal} />
        </div>
    );
}

export default Admin;
