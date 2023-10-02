import * as yup from "yup"

export const productSchema = yup.object().shape({
    title: yup.string().required("please inter the title").min(4).max(20),
    price: yup.number().required(),
    description: yup.string().min(5).max(40).required(),
    phone: yup.string().required().min(8).max(10),
    brand: yup.string().required()
})

export const UserSchema = yup.object().shape({
    email: yup.string().required().min(4),
    password: yup.string().min(3).required()
})