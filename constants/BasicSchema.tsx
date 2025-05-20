import * as yup from "yup";

const matchesRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{5,}$/;

const BasicSchema = yup.object().shape({
  firstName: yup.string().min(5).required(),
  lastName: yup.string().min(5).required(),
  city: yup.string().min(5).required(),
  address1: yup.string().max(50).required(),
  email: yup.string().email().required(),
  state: yup.string()
  .matches(/^[A-Z]{2}$/, "State must be 2-letter abbreviation")
  .required("State is required"),
  postalCode: yup.string().min(4).max(6),
  dateOfBirth: yup.string().min(3),
  ssn: yup.string().min(4),
  password: yup.string().min(5).matches(matchesRule).required(),
 
});
export default BasicSchema;
