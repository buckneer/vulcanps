

import "./Store.scss";
import CategoryBox from "../../components/categorybox/CategoryBox";
import {CategoryType} from "../../services/item/category.type";
import ItemBox from "../../components/itembox/ItemBox";
import {useContext, useEffect, useState} from "react";
import {getAllItems} from "../../services/item/items.service";
import coins from "../../assets/main/coins.png";
import {getCategories} from "../../services/item/category.service";
import {useNavigate} from "react-router-dom";
import {Item} from "../../@types/item";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {toast, ToastContainer} from "react-toastify";
import CustomModal from "../../components/CustomModal";
import AddItemModal from "../../components/AddItemModal";


export default function Store() {


    const [filteredItems, setFilteredItems] = useState<Item[] | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [searchString, setSearchString] = useState("");
    const [show, setShow] = useState(false);


    const toggleModal = () => {
        setShow(prevState => {return !prevState})
    }



    const navigate = useNavigate();


    // HANDLERS

    let handleFilter = (filter: string) => {
        getAllItems().then(response => {
            let items = response.data as Item[]
            setFilteredItems(items.filter(item => {
                return item.category === filter
            }))
        })
    }


    let handleSearch = (e: any) => {
        setSearchString(e.target.value)
    }


    let handleCheckout = (e: any) => {

    }


    // Update the view
    useEffect(() => {
        setCategories(getCategories());

        getAllItems().then(response => {
            let items = response.data as Item[]
            setFilteredItems(items.filter(item => {
                return item.category === "weaponry"
            }))
        })
    }, []);



    return (
        <div className="Store mt-5">
            <div className="main-store container">
                <div className="heading text-center">
                    <h4 className="title">STORE</h4>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-12">
                        <div className="section-heading">
                            <div className="heading">
                                <h1 className="title" style={{letterSpacing: "1px"}}>CATEGORIES</h1>
                            </div>
                        </div>

                        <div className="container mx-auto row pb-5 justify-content-center">

                            {categories.map(category => (
                                <CategoryBox key={category.name} category={category} handleFilter={handleFilter} />
                            ))}

                        </div>

                        <hr style={{border: "2px solid #463b46", marginTop: "25px", marginBottom: "25px"}} />


                        <div className="row items justify-content-between">
                            {filteredItems && filteredItems.map(item => (
                                <ItemBox item={item} key={item.name} />
                            ))}
                        </div>


                    </div>
                </div>


            </div>
            <ToastContainer autoClose={2000} />
        </div>
    )
}
