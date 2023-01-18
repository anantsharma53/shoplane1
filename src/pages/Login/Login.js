import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import "./Login.css";
import { useState } from "react";
import { useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  let location = useLocation();
 

  console.log(location.pathname);
  const [formData, setFormData] = useState({
    email: '',
    password: ''

  });


  const { email, password } = formData;
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    console.log("cheking")
    if (email && password) {
      //updateState(true);
      //console.log("todo")
      alert("Succusful Login")
     
    }
    else {
      alert("Please Re-Login with correct Crede")
    }

  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  return (
    <div>
      <Header></Header>

      <form className="login-container">

        <div class="  form-outline mb-4">
          <input type="email"  class="form-control" name="email" id="email" onChange={handleChange} value={email}/>
          <label class="form-label" for="form2Example1">Email address</label>
        </div>


        <div class="form-outline mb-4">
          <input type="password" name="password" id="password" onChange={handleChange} value={password} class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>


        <div class="row mb-4">
          <div class="col d-flex justify-content-center">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div class="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>


        <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>


        <div class="text-center">
          <p>Not a member? <Link to="/register">Register</Link> </p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}
export default Login;

