import * as yup from "yup";

const matchesRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{5,}$/;

const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).matches(matchesRule).required(),
  
});
export default SignInSchema;
