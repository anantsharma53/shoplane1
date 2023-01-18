import "./ProductSingle.css";
import {  useParams } from 'react-router-dom';
import { add, addFav, removeFromCart, removeFromFavCart, decreaseCart } from '../../reducers/cartReducer';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import BarLoader from "../PageLoader/PageLoader";

function ProductSingle() {
    
    const {id}=useParams();
    
    const [product,setProduct]=useState([]);
    console.log(product);
    useEffect(() => {

        const getProduct = () => {
            //setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(json => {
                    setProduct(json);
                    //console.log(json);
                    //setLoading(false);
                })

        }
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const [changeColor, setChangeColor] = useState(false);
    const [changeBtn, setchangeBtn] = useState(false);
    const dispatch = useDispatch();

    function handleAddToCartEvent() {
        // using dispatch to send add action and payload.
        dispatch(add(product));
        setchangeBtn(!changeBtn);

    }
    function handleAddToFavourite() {
        if (!changeColor) {
            setChangeColor(!changeColor)
            dispatch(addFav(product));
        } else {
            setChangeColor(!changeColor)
            dispatch(removeFromFavCart(product.id));
        }

        // using dispatch to send add action and payload.

    }
    function handleRemoveToCart() {

        setchangeBtn(!changeBtn);
        dispatch(removeFromCart(product.id));
    }
    


    return (
        product.length === 0 ? (
      
            <div class="container-fluid  mt-80">
              <div><Header /></div>
              <BarLoader></BarLoader>
              <div><Footer /></div>
      
            </div>
          ) : (
        <div>
            <Header></Header>
            <div class="container  md-5 ">
                <div class="row ">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center ">
                                            <img src={product.image} class="img-fluid" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                {/* <i class="fa fa-long-arrow-left"></i>
                                                <span class="ml-1">Back</span>  */}
                                                </div>
                                                {
                                                changeColor === false ? (<i onClick={handleAddToFavourite} className="fa fa-heart"></i>) : (
                                                    <i onClick={handleAddToFavourite} className="bk fa fa-heart"></i>
                                                )
                                            } 
                                        </div>
                                        <div class="mt-4 mb-3">
                                            <span class="text-uppercase text-muted brand">{product.category}</span>
                                            <h5 class="text-uppercase">{product.title}</h5>
                                            <div class="price d-flex flex-row align-items-center">
                                                <span class="act-price">{product.price}</span>
                                                <div class="ml-2">
                                                    <small class="dis-price">{product.price*2}</small>
                                                    <span>50% OFF</span> </div>
                                            </div>
                                        </div>
                                        <p class="about">{product.description}</p>
                                       
                                        <div class="cart mt-4 align-items-center">
                                            
                                            {/* <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> */}
                                            {
                                                changeBtn === false ? (<button onClick={handleAddToCartEvent} className="btn btn-primary">
                                                    <i class="fa fa-shopping-cart fa-2x" aria-hidden="false"></i>  Add To Cart
                                                </button>) : (<button onClick={handleRemoveToCart} className="btn btn-primary">
                                                    <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> Remove From Cart
                                                </button>)

                                            }
                                            
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    ))
}
export default ProductSingle;