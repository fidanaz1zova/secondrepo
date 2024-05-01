import * as yup from "yup";

export const productFormSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required").min(3, 'name must be at least 4 characters long').max(6, 'name must exceed 6 characters'),
  password: yup
  .string()
  .required("Password is required")
  .min(8, "Password is too short")
  .matches(/^(?=.*[a-z])/, "It must contain at least one lowercase character")
  .matches(/^(?=.*[A-Z])/, "It must contain at least one uppercase character")
  .matches(/^(?=.*[0-9])/, "It must contain at least one number character")
  .matches(/^(?=.*[!@#$%])/, "It must contain at least one special character")

  // unitPrice: yup.number().positive().required(),
  // unitsOnOrder: yup.number().positive().required(),
  // supplierId: yup.string().required(),
});