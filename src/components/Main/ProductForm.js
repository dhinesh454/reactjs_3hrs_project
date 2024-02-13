
import React,{useRef} from "react";
import './ProductForm.css'

function ProductForm(props){

    const productIdRef=useRef();
    const sellingPriceRef=useRef();
    const titleRef=useRef();

    const submitHandler = (event)=>{
    event.preventDefault();

         const prodId = productIdRef.current.value;
         const sellingprice = sellingPriceRef.current.value;
         const producttitle = titleRef.current.value;

         console.log(prodId,sellingprice,producttitle);
         let data={
            ProductId:prodId,
            SellingPrice:sellingprice,
            ProductTitle:producttitle
        
        } 
         localStorage.setItem(data.ProductId,JSON.stringify(data))
         props.onAddProductList(data);

         productIdRef.current.value='';
         sellingPriceRef.current.value='';
         titleRef.current.value='';


    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-product_controls">
                <div className="new_product_control">
                    <label>ProductId</label>
                    <input 
                    type="number" required
                    ref={productIdRef}/>
                </div>

                <div className="new_product_control">
                    <label>SellingPrice</label>
                    <input 
                    type="number" required
                    ref={sellingPriceRef}/>
                </div>

                
                <div className="new_product_control">
                    <label>ProductTitle</label>
                    <input 
                    type="text" required
                    ref={titleRef }/>
                </div>
            </div>

            <div className="new-product_actions">
                <button type="submit">AddProduct </button>
            </div>
        </form>
    )
};


export default ProductForm;