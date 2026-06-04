  import { useState } from "react";
  import axios from "axios";
  import FormContent from "../component/9.FormContent/FormContent";
  import { dataSignup } from "../data/dataSignup";
  
  const SignUpPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      repeatpassword: "",
    });
  
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setMessage("");
      setError("");
  
      try {
        const res = await axios.post(
          "http://localhost:5000/register",
          formData
        );
  
        setMessage("Account created successfully!");
  
        setFormData({
          name: "",
          email: "",
          password: "",
        });
  
        console.log(res.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      }
    };
  
    return (
      <>
        <FormContent
          title={dataSignup.title}
          fields={dataSignup.fields}
          buttonText={dataSignup.buttonText}
          classname="signup"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          message={message}
          error={error}
        />
      </>
    );
  };
  
  export default SignUpPage;
  