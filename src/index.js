import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import FavCart from "./pages/Favourite/Favourite";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import Electronic from './pages/Electronic/Electronic';
import Jewelery from './pages/Jewelery/Jewelery';
import MenCloth from './pages/MenCloth/MenCloth';
import WomenCloth from './pages/WomenCloth/WomenCloth';
import ProductSingle from './components/ProductSinglePage/ProductSingle';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>       
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/electronics" element={<Electronic />}></Route>
        <Route path="/jewelery" element={<Jewelery />}></Route>
        <Route path="/mencloth" element={<MenCloth />}></Route>
        <Route path="/womencloth" element={<WomenCloth />}></Route>
        <Route path="/FavCart" element={<FavCart />}></Route>
        <Route path="/FavCart/Cart" element={<Cart />}></Route>
        <Route path="/electronics/Cart" element={<Cart />}></Route>
        <Route path="/jewelery/Cart" element={<Cart />}></Route>
        <Route path="/mencloth/Cart" element={<Cart />}></Route>
        <Route path="/womencloth/Cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductSingle />}></Route>
        <Route path="/electronics/Cart" element={<Cart />}></Route>
        <Route path="/products/:id/Cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
