import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardsService from "../../services/cardService";
import formikValidateToJoi from "../../utils/formikValidateToJoi";
import Input from "../common/input";
import PageHeader from "../common/pageHeader";

const CreateCard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateToJoi({
      bizName: Joi.string().min(2).max(255).required().label(`Name`),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label(`Description`),
      bizAddress: Joi.string().min(2).max(400).required().label(`Address`),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label(`Phone`),
      bizImage: Joi.string().min(11).max(1024).allow("").label(`Image`),
    }),

    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        await cardsService.createCard(body);
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <div className="container">
      <PageHeader title="create a new card" />
      <form
        className="col-8 mt-3 m-auto p-3 bg-body-secondary shadow-lg"
        onSubmit={form.handleSubmit}
        noValidate
      >
        {error && <div className="alert alert-danger ">{error}</div>}
        <div className="form-group my-1">
          <Input
            {...form.getFieldProps("bizName")}
            type="text"
            label="Name"
            required
            error={form.touched.bizName && form.errors.bizName}
          />
          <Input
            {...form.getFieldProps("bizDescription")}
            type="text"
            label="Description"
            required
            error={form.touched.bizDescription && form.errors.bizDescription}
          />
          <Input
            {...form.getFieldProps("bizAddress")}
            type="text"
            label="Address"
            required
            error={form.touched.bizAddress && form.errors.bizAddress}
          />
          <Input
            {...form.getFieldProps("bizPhone")}
            type="text"
            label="Phone"
            required
            error={form.touched.bizPhone && form.errors.bizPhone}
          />
          <Input
            {...form.getFieldProps("bizImage")}
            type="text"
            label="Image"
            error={form.touched.bizImage && form.errors.bizImage}
          />
        </div>
        <button
          type="submit"
          disabled={!form.isValid}
          className="btn btn-primary mt-2"
        >
          Create Card
        </button>
      </form>
    </div>
  );
};
export default CreateCard;
