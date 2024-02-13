import React from "react";
import './ProductList.css';
import ProductList from "./ProductList";


const  Products= (props) =>{

    
    
    if(props.items.length === 0) {
            return <h2 className="Product_none">No Products Found...</h2>
    }
  
    return(

 
    <ul className="allproduct_lists">
        <h1>Products</h1>
        {props.items.map((item)=>(
            <ProductList 
               key={item.ProductId}
               Id={item.ProductId}
               SellingPrice={item.SellingPrice}
               title={item.ProductTitle}
               onDelete={props.onDeleteItem}
            />

    ))}
    </ul>
    )
};

export default Products;
