import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import { useEffect, useState } from "react";
import Loader from './../../components/PageLoader/PageLoader';

function Home() {
  //console.log("rerendering");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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


  return (
    products.length === 0 ? (
      
      <div class="container-fluid  mt-80">
        <div><Header /></div>
        <Loader></Loader>
        <div><Footer /></div>

      </div>
    ) : (
    <div>
      <Header  />
      <div className="container mt-3">
        {error &&
        <Loader></Loader>
        //  <h2 className="mt-3">No Products to Show</h2>
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
  )
  );
}

export default Home;
