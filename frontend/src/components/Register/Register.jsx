import React from 'react'
import { useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { registerAPI } from '../../services/userServices'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Button } from '@mui/material'

const Register = () => {
    const navigate = useNavigate()

    const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: registerAPI,
        mutationKey: ['register']
    })

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string()
            .email("invalid email")
            .required("email is required"),
        password: Yup.string()
            .min(5, "password must be minimum of 5 characters long")
            .required("password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"),null], "Password must match")
            .required("confirming your password is required")
    })

    const regFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword:'',
            username:''
        },
        validationSchema,
        onSubmit: (values) => {
            mutateAsync(values)
                .then((data)=>{
                    console.log('data', data)
                    navigate('/')
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    })


  return (
    <div>
        <form onSubmit = {regFormik.handleSubmit}>
            <label>Email</label>
            <input
                className = 'form-input'
                type='email'
                name = 'email'
                onChange={regFormik.handleChange}
                value = {regFormik.values.email}
            />
            <label>Username</label>
            <input
                className = 'form-input'
                type='username'
                name = 'username'
                onChange={regFormik.handleChange}
                value = {regFormik.values.username}
            />
            <label>Password</label>
            <input
                className = 'form-input'
                type='password'
                name = 'password'
                onChange={regFormik.handleChange}
                value = {regFormik.values.password}
            />
            <label>Confirm Password</label>
            <input
                className = 'form-input'
                type='confirmPassword'
                name = 'confirmPassword'
                onChange={regFormik.handleChange}
                value = {regFormik.values.confirmPassword}
            />
            <span>{regFormik.errors.password}</span>
            <Button type = 'submit'>Register</Button>
        </form>
    </div>
  )
}

export default Register