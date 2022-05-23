
import "./CategoryBox.scss";
import {EventHandler, MouseEventHandler} from "react";
import {CategoryType} from "../../services/item/category.type";



export default function CategoryBox({category, handleFilter}: {category: CategoryType, handleFilter: EventHandler<any>}) {
    return (
        <button onClick={() => handleFilter(category.name)} className="CategoryBox ms-2 col-1 mt-2" >
            <img className="ms-2 mt-2" src={category.icon}  alt="weapon"/>
            <h2 className="my-3 p-0">{category.name.toUpperCase()}</h2>
        </button>
    )
}
