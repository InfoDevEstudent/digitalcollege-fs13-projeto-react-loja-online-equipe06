import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Orders from "./pages/Orders"
import ProductDetails from "./pages/ProductDetails"
import Products from "./pages/Products"

export default function App(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/categories" element={<Categories/>} />
                    <Route path="/Orders" element={<Orders/>} />
                    <Route path="/ProductDetails" element={<ProductDetails/>} />
                    <Route path="/Products" element={<Products/>} />
                </Routes>
            </BrowserRouter>
        )
}