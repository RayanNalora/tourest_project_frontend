import { useState } from "react";
import axios from "axios";
import FormContent from "../component/9.FormContent/FormContent";
import { dataLogin } from "../data/dataLogin";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:5000/login",
        formData
      );

      setMessage(`Welcome back ${res.data.name}!`);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );

      console.log(res.data);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Invalid email or password"
      );
    }
  };

  return (
    <FormContent
      title={dataLogin.title}
      fields={dataLogin.fields}
      buttonText={dataLogin.buttonText}
      classname="login"
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      message={message}
      error={error}
    />
  );
};

export default LoginPage;
