import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    RegistrationType:"",
    Title:"",
    Name:"",
    Father_Husband: "",
    BirthDate: "",
    Address:"",
    Pincode:"",
    Mobile:"",
    Email: "",
    PanNo:"",
    AadharNumber:"",
    NomineeName:"",
    NomineeRelation:"",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name:"RegistrationType",
      type:"radio",
      label:"Individual",
      value:"Individual",
      required: true,
    },
    {
      id: 2,
      name:"RegistrationType",
      type:"radio",
      label:"Organization",
      value:"Organization",
      required: true,
    },
    {
      id: 3,
      name: "Name",
      type: "text",
      placeholder: "Enter Your Name",
      errorMessage: "Please enter a Valid Name",
      label: "Name",
      pattern: "[A-Za-z_ _]{3,60}$",
      required: true,
    },
    {
      id: 4,
      name: "Father_Husband",
      type: "text",
      placeholder: "Enter Name",
      errorMessage:"Please enter valid Father/Husband Name",
      label: "Father/Husband",
      pattern: "[A-Za-z_ _]{3,60}$",
      required: true,
    },
    {
      id: 5,
      name: "BirthDate",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 6,
      name: "Address",
      type: "text",
      placeholder: "Enter your Address Here",
      errorMessage:"Address should not be more than 250 Characters",
      label: "Address",
      pattern: "[A-Za-z0-9_ _]{10,250}$",
      required: true,
    },
    {
      id: 7,
      name: "Pincode",
      type: "number",
      placeholder: "",
      errorMessage:"PLease Enter a valid PINCODE",
      label: "PINCODE",
      pattern: "[0-9]{6,10}$",
    },
    {
      id: 8,
      name: "Mobile",
      type: "tell",
      placeholder: "",
      errorMessage:"Please enter a Valid Mobile No.",
      label: "Mobile No",
      pattern: "[0-9]{4,10}$",
    },
    {
      id: 9,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 10,
      name: "PanNo",
      type: "text",
      placeholder: "",
      errorMessage:"Please Enter Valid Pancard No",
      label: "Pancard No",
      pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}",
    },
    {
      id: 11,
      name: "AadharNumber",
      type: "number",
      placeholder: "",
      errorMessage:"Please Enter A valid Aadhar Number!",
      label: "Aadhar Nmber",
      pattern: "[0-9]{12}$",
    },
    {
      id: 12,
      name: "NomineeName",
      type: "text",
      placeholder: "",
      errorMessage: "Nominee Name Should not be more 50 Character",
      label: "Nominee Name",
      pattern: "[A-Za-z_ _]{3,50}$",
    },
    {
      id: 13,
      name: "NomineeRelation",
      type: "text",
      placeholder: "",
      errorMessage: "Max Length 50",
      label: "Nominee Relation",
      pattern: "[A-Za-z _ _]{3,50}$",
    },


    
    {
      id: 14,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$`,
      required: true,
    },
    {
      id: 15,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({...values})

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  };

  return (
    <div className="app">
      <form action="http://uatbenmoon.malayinfotech.com/api/memberapi/" method="POST" onSubmit={handleSubmit}>
        <h1>Registeration Form</h1>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;