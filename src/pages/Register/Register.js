import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleSubmit() {
    alert("Successful SignUP")
    fetch("http://localhost:4100/api/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/login");
        } else if (res.status === 401) {
          console.log("Unauthorized request");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
  }

  return (
    <div>
      <Header></Header>
    <div className="Sign-container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          onInput={(e) => {
            user.email = e.target.value;
            setUser(user);
          }}
          value={user.email}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Full Name
        </label>
        <input
          onInput={(e) => {
            user.name = e.target.value;
            setUser(user);
          }}
          value={user.name}
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Password
        </label>
        <input
          onInput={(e) => {
            user.password = e.target.value;
            setUser(user);
          }}
          value={user.password}
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Date of Birth
        </label>
        <input
          onInput={(e) => {
            user.dob = e.target.value;
            setUser(user);
          }}
          value={user.dob}
          type="date"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Country
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            user.country = e.target.value;
            setUser(user);
          }}>
          <option value="1">India</option>
          <option value="2">USA</option>
          <option value="3">UK</option>
        </select>
      </div>
      <input
        onClick={handleSubmit}
        className="btn btn-primary"
        value="Register"
        type="submit"
      />
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Register;
