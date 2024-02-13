import React from "react";
import './ProductList.css';




const ProductList = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.Id,props.SellingPrice)
    }

  
    return(
        <li>
            <div className="product_lists">
                <div className="product_list">
                    {props.Id}
                </div>
                <div className="product_list">
                    {props.SellingPrice}
                </div>
                <div className="product_list">
                    {props.title}
                </div>

                <div >
                    <button onClick={deleteHandler}>Delete</button>
                </div>
                
            </div>
        </li>
    )
};

export default ProductList;