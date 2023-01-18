import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./WomenCloth.css";
import { useEffect, useState } from "react";
import BarLoader from "../../components/PageLoader/PageLoader";

function WomenCloth() {
  //console.log("rerendering");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
    // const [count, setCount] = useState();
  //   const [click2, setClick2] = useState(0);
  // async call.

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((jsonResponse) => {
        //console.log("response received");
        // we are changing state of component.
        setProducts(jsonResponse);
        setError();
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  // function notifyHome(count){
  //   console.log("Home is notified");
  //   setCount(count);
  // }

  return (
    products.length === 0 ? (
      
      <div class="container-fluid  mt-80">
        <div><Header /></div>
        <BarLoader></BarLoader>
        <div><Footer /></div>

      </div>
    ) : (
    <div>
      <Header  />
      <div className="container mt-3">
        {error &&
         //<h2 className="mt-3">No Products to Show</h2>
         <BarLoader></BarLoader>
         }
        
        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-md-3">
              <ProductCard 
              item={p} 
              key={i}/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  ));
}

export default WomenCloth;
