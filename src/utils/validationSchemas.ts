import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .matches(/^\S*$/, "First Name must be a single word"),

  lastName: Yup.string()
    .required("Last Name is required")
    .matches(/^\S*$/, "Last Name must be a single word"),

  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid gender"),

  immunization: Yup.array()
    .required("immunization is required")
    .min(1, "select atleast one item"),
});

export default registrationSchema;
