import React, { useRef, useState } from "react";
import styled from 'styled-components';

const SignUpForm = () => {

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: ""

  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });


  const handleChange = (e) => {

    setformData({
      ...formData, // Copies the data out of the current object. 
      [e.target.name]: [e.target.value] // Dynamic way of accessing the name and value attributes. So differnt way of writting it would be: firstName: asfddsfsdf (user input).
    });

  }



  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/];
    console.log("formData.firstName: ", formData.firstName);
    console.log("formData.lastName: ", formData.lastName);


    if (formData.firstName === "" || formData.lastName === "" || formData.password === "" /*|| formData.password.length < 8 || formData.email === ""*/) {

      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name cannot be empty.",
        lastName: "Last name cannot be empty.",
        email: "Valid email required.",
        password: "Valid password required.",
        confirmPassword: "Has to be the same as the password above."
      }));

      /* if (formData.firstName === "") {
 
       }
 
       if (formData.lastName === "") {
         console.log("Last name cannot be empty.");
       }
 
       if (formData.password === "") {
         if (formData.password === "") {
           console.log("Password: Empty.");
 
         } else {
           console.log("Password: Too few characters.");
         }
 
       }*/

    } else {
      console.log('Form submitted successfully');
    }

  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>

        <input
          data-testid="first-name-id"
          type="text"
          value={formData.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          // required
        />
        <p data-testid="first-name-error-id"
          className={`error ${formData.firstName ? "hidden" : "visible"}`}>
          {errors.firstName}
        </p>

        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={handleChange}
          // required
        />
        <p data-testid="last-name-error-id"
          className={`error ${formData.lastName ? "hidden" : "visible"}`}>
          {errors.lastName}
        </p>

        <input
          data-testid="email-id"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
        // required
        />
        <p data-testid="email-error-id"
          className={`error ${formData.email ? "hidden" : "visible"}`}>
          {errors.email}
        </p>

        <input
          data-testid="password-id"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        // required
        // minLength={8}
        />
        <p data-testid="password-error-id"
          className={`error ${formData.password ? "hidden" : "visible"}`}>
          {errors.password}
        </p>

        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        // required
        // minLength={8}
        />
        <p data-testid="confirm-password-error-id"
          className={`error ${formData.confirmPassword ? "hidden" : "visible"}`}>
          {errors.confirmPassword}
        </p>

        <button type="submit">Sign Up</button>

      </form>
    </Wrapper>
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin-top: 24px;
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
    width: clamp(200px, 40%, 400px)
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
    font-weight: bold;
  }


`;