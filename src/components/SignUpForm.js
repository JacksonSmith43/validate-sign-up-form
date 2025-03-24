import React, { useRef, useState } from "react";
import styled from 'styled-components';

const SignUpForm = () => {
  const [isSuccessful, setIsSuccesful] = useState("");

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""

  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const handleChange = (e) => { // Allows for input. 
    setformData({
      ...formData, // Copies the data out of the current object. 
      [e.target.name]: [e.target.value] // Dynamic way of accessing the name and value attributes. So differnt way of writting it would be: firstName: asfddsfsdf (user input).
    });

    setErrors({ ...errors, [e.target.name]: "" });
  }

  const handleBlur = (e) => {
    if (e.target.name !== "password" || e.target.name !== "confirmPassword") {
      setErrors((prevError) => ({
        ...prevError,
        [e.target.name]: e.target.value.trim() === "" ? `${e.target.name} cannot be empty.` : "",
      }));
    }
  }

  /* const handleBlurEmail = (e) => {
       const regex = [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/];
 
     setErrors((prevError) => ({
       ...prevError,
       [e.target.name]: e.target.value.trim() === "" ? `Valid ${e.target.name} required.` : "",
 
     }));
   }*/


  const handleBlurPassword = (e) => {
    console.log("formData.password: ", formData.password.toString());

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]:
        e.target.value.length < 8 || e.target.value === ""
          ? "At least 8 characters required."
          : e.target.value !== formData.confirmPassword.toString()
            ? "Passwords do not match."
            : "",
    }));
  }

  const handleBlurConfirmPassword = (e) => {
    console.log("formData.password: ", formData.confirmPassword.toString());

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]:
        e.target.value.length < 8 || e.target.value === ""
          ? "At least 8 characters required."
          : e.target.value !== formData.password.toString()
            ? "Passwords do not match."
            : "",
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSuccesful("Form submitted successfully.");
    console.log("Form submitted successfully.");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label class="control-label" htmlFor="firstName">First Name*</label>
          <div class="inputGroupContainer">
            <input
              data-testid="first-name-id"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <p data-testid="first-name-error-id"
            //className={`error ${formData.firstName ? "hidden" : "visible"}`}>
            className="error">
            {errors.firstName}
          </p>
        </div>

        <div className="form-group">
          <label class="control-label" htmlFor="lastName">Last Name*</label>
          <div class="inputGroupContainer">
            <input
              data-testid="last-name-id"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Smith"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <p data-testid="last-name-error-id"
            className={`error ${formData.lastName ? "hidden" : "visible"}`}>
            {errors.lastName}
          </p>
        </div>

        <div class="control-label" className="form-group">
          <label class="control-label" htmlFor="email">Email Address*</label>
          <div class="inputGroupContainer">
            <input
              data-testid="email-id"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="johnsmith@gmail.com"
              onChange={handleChange}
              // onBlur={handleBlurEmail}
              required
            />
          </div>
          <p data-testid="email-error-id"
            className={`error ${formData.email ? "hidden" : "visible"}`}>
            {errors.email}
          </p>
        </div>

        <div class="control-label" className="form-group">
          <label class="control-label" htmlFor="password" >Password*</label>
          <div class=" inputGroupContainer">
            <input
              data-testid="password-id"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter a valid password"
              onChange={handleChange}
              onBlur={handleBlurPassword}
              required
              minLength={8}
            />
          </div>
          <p data-testid="password-error-id"
            className="error">
            {errors.password}
          </p>
        </div>

        <div className="form-group">
          <label class="control-label" htmlFor="confirmPassword">Confirm Password*</label>
          <div class="inputGroupContainer">
            <input
              data-testid="confirm-password-id"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Re-enter the password"
              onChange={handleChange}
              onBlur={handleBlurConfirmPassword}
              required
              minLength={8}
            />
          </div>
          <p data-testid="confirm-password-error-id"
            className="error">
            {errors.confirmPassword}
          </p>
        </div>

        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>

        <div className="form-group">
          <p className="successful-submit-message" tabIndex={0}>{isSuccessful}</p>
        </div>

      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 2rem;
  font-family: sans-serif;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: rgb(61, 61, 61);
    color: white;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .control-label{
    font-weight: bold;
  }

  .error {
    margin: 0 0 24px 0;
    color: rgb(179, 3, 3);
    font-weight: bold;
  }

  .successful-submit-message{
    color: #096d09;
    font-weight: bold;
    margin-top: 1rem;
  }

  button:focus, input:focus, p:focus{
    outline: 0.2rem solid red;
  }

`;