import React from 'react';
import SideBar from "./SideBar";
import ProductList from "./ProductList";

function ProductView() {
    return <div className="row">
        <SideBar />
        <ProductList />
      </div>
   
}

export default ProductView
