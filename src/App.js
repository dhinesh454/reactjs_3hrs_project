import React ,{useState} from 'react';
import './App.css';

import ProductForm from './components/Main/ProductForm';
import Products from './components/Product/Products.js';
function App() {
const [products,setNewProducts]=useState([]);
const [value,SetNewValue]=useState(0)


  






const addProducts=(product)=>{
  setNewProducts((prevProducts)=>{
    console.log(product,typeof(product.SellingPrice))
  const UpdatedProduct = [...prevProducts,product];
  SetNewValue(value + +product.SellingPrice);
  return UpdatedProduct;
 
  })
}

const deleteItemHandler = (prodId,price) => {
  setNewProducts(prevProducts =>{
    SetNewValue(value-price)
    const updatedProducts = prevProducts.filter(product => product.ProductId!==prodId);
    return updatedProducts;
  })
}




return (
  <div className='App'>
    <h1>SellerAdminPage</h1>
    <ProductForm onAddProductList={addProducts}/>
    <Products items={products} onDeleteItem={deleteItemHandler}/>
    <p id='totalproduct'>{`Total Product Value:${value}`}</p>
  </div>
)
}

export default App;
