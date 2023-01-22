import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import { Link } from "react-router-dom";
import { addUser } from "../../reducers/cartReducer";
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit() {
    alert("Successful SignUP")
    navigate("/");
    dispatch(addUser(user.name));
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
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('First Name is required'),
          lastName: Yup.string()
            .required('Last Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (
          <div className="Sign-container">
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" onInput={(e) => {
                  user.name = e.target.value;
                  setUser(user);
                }} className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="email" >Email</label>
                <Field name="email" type="text" onInput={(e) => {
                  user.email = e.target.value;
                  setUser(user);
                }} className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field name="confirmPassword" type="password" onInput={(e) => {
                  user.password = e.target.value;
                  setUser(user);
                }} className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>Register</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </div>
            </Form>
            <p class="text-center text-muted ">Have already an account? <a href="#!"
              class="fw-bold text-body">
              <Link to="/Login">Login here</Link></a></p>
          </div>
        )}
      />
      <Footer></Footer>
    </div>
  );
}

export default Register;































      {/* <div className="Sign-container"> */}
        {/*<div class="mb-3">
          <h2 class="text-uppercase text-center mb-1 mt-1">Create an account</h2>
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
            placeholder="Name"></input>
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
            placeholder="DDMMYYYY"></input>
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
          className="btn btn-primary btn-block mb-4"
          value="Signup"
          type="submit"
        /> */}
        {/* <p class="text-center text-muted ">Have already an account? <a href="#!"
          class="fw-bold text-body">
          <Link to="/Login">Login here</Link></a></p>

      </div> */}
      
