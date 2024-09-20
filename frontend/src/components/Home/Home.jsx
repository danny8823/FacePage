import React from 'react'
import {useDispatch} from 'react-redux'
import { useFormik } from 'formik';
import {useMutation} from '@tanstack/react-query'
import { loginAPI } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
    mutationFn: loginAPI,
    mutationKey: ['login']
  })

  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    onSubmit: (values) => {
        mutateAsync(values)
            .then((data)=>{
                dispatch()
                localStorage.setItem('userInfo', JSON.stringify(data))
                navigate('/')
            })
            .catch((error)=>{
                console.log(error)
            })
    }
  })
  return (
    <div>
        <div>
            <h1>Facepage</h1>
            <p>Welcome Back.</p>
        </div>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input 
                    type = 'email' 
                    defaultValue='Email Address' 
                    name = 'email'
                    onChange = {formik.handleChange}
                    value = {formik.values.email}
                />
                <input 
                    type = 'password'
                    defaultValue= 'Password'
                    name = 'password'
                    onChange = {formik.handleChange}
                    value = {formik.values.password}
                />
                
            </form>
        </div>
    </div>
  )
}

export default Home