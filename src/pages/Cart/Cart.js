import "./Cart.css";
import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
import { getTotal, clearCart } from "../../reducers/cartReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from './../../components/Shared/Footer/Footer';
const Cart = (props) => {
  const items = useSelector(cartSelector).value;
  const totaBill = useSelector(cartSelector).totalPrice;
  const totalQuantity = useSelector(cartSelector).totalQuantity;
  //console.log(items.length);
  const dispatch = useDispatch();
  //dispatch(getTotal());
  useEffect(() => {
    dispatch(getTotal());
  }, [items, dispatch])
  //console.log(totaBill)
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log()
  return (
    items.length === 0 ? (
      <div class=" mt-80">
        <div><Header /></div>
        <div class="row">

          <div class="col-md-10">

            <div class="card">

              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                    width="130" height="130" class="img-fluid mb-4 mr-3" alt=""/>
                  <h3><strong>Your Cart is Empty</strong></h3>
                  <h4>Add something to make me happy :)</h4>
                  <Link to="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>


                </div>
              </div>
            </div>


          </div>

        </div>
        <div><Footer /></div>

      </div>
    ) : (


      <div className="cartDisplay">
        <Header />
        <div className="left">
          {items &&
            items.map((cartItem, i) => (
              <CartItem item={cartItem} key={i} />
            ))}
        </div>

        <div className="right">
          <div class="col-md-30">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Summary</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalQuantity} items)
                    <span>&#8377;{totaBill}</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>&#8377;200</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Tax
                    <span>&#8377;55</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p class="mb-0">(including Tax)</p>
                      </strong>
                    </div>
                    <span><strong>&#8377;{(totaBill + 200 + 55)}</strong></span>
                  </li>
                </ul>

                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
                <button onClick={handleClearCart} className="btn btn-primary btn-lg btn-block">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>



        <div><Footer /></div>

      </div>)

  );
}

export default Cart;
