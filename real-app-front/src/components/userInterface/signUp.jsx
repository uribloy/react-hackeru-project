import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import formikValidateToJoi from "../../utils/formikValidateToJoi";
import Checkbox from "../common/checkbox";
import Input from "../common/input";
import PageHeader from "../common/pageHeader";
import { useAuth } from "../context/auth.context";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, user, login } = useAuth();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      biz: false,
    },
    validate: formikValidateToJoi({
      name: Joi.string().min(2).max(256).required().label("Name"),
      email: Joi.string()
        .min(6)
        .max(128)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string()
        .min(8)
        .max(20)
        .required()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_])(?=(.*\d){4,})[a-zA-Z!@%$#^&*\-_\d]{8,}$/
        )
        .label("Password"),
      biz: Joi.boolean(),
    }),

    async onSubmit(values) {
      try {
        await createUser(values);
        await login({ email: values.email, password: values.password });
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <PageHeader title="sign-up to card app" description="it's relly free" />
      <form
        className="col-8 mt-3 m-auto p-3 bg-body-secondary shadow-lg"
        onSubmit={form.handleSubmit}
        noValidate
      >
        {error && <div className="alert alert-danger ">{error}</div>}
        <div className="form-group my-1 container">
          <Input
            {...form.getFieldProps("name")}
            type="text"
            label="Name"
            required
            error={form.touched.name && form.errors.name}
          />
          <Input
            {...form.getFieldProps("email")}
            type="email"
            label="Email"
            required
            error={form.touched.email && form.errors.email}
          />
          <Input
            {...form.getFieldProps("password")}
            type="password"
            label="Password"
            required
            error={form.touched.password && form.errors.password}
          />
          <Checkbox
            {...form.getFieldProps("biz")}
            label="signUp as bussines acount"
            error={form.touched.biz && form.errors.biz}
          />
        </div>
        <div className="d-md-flex justify-content-center mt-3">
          <button disabled={!form.isValid} className="btn btn-primary mt-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
