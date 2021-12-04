import "./App.css";
import React from "react";
import ProductView from "./components/ProductView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <section className="section-content padding-y">
        <div className="container">
          <Routes>
            <Route path="/all-products" element={<ProductView />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path = '/edit-product/:id' element={<EditProduct/>}/>
            <Route path="/" element={<ProductView />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
