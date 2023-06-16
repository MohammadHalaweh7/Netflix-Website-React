import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
export default function Register() {
  let [errors, setErrors] = useState([]);
  let [statusError, setStatusError] = useState("");
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: sendRegisterData,
  });
  async function sendRegisterData(values) {
    let { data } = await axios
      .post(
        "https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",
        values
      )
      .catch((err) => {
        setStatusError(err.response.data.message);
      });
    console.log(data);
    if (data.message === "success") {
      console.log("welcome");
    } else {
      setErrors(data.err[0]);
    }
  }
  return (
    <div className="container mt-5 mb-5">
      {errors.map((error) => {
        return <div className="text-danger bg-light w-50 m-auto">{error.message}</div>;
      })}
      <form className="w-50 m-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirem Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="cPassword"
            value={formik.values.cPassword}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
