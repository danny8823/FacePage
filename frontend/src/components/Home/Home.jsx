import React from 'react'
import {useDispatch} from 'react-redux'
import { useFormik } from 'formik';
import {useMutation} from '@tanstack/react-query'
import { loginAPI } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { loginAction } from '../../redux/slice/authSlice';
const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
    mutationFn: loginAPI,
    mutationKey: ['login']
  })

  const formik = useFormik({
    initialValues: {
        email: 'Email Address',
        password: 'password'
    },
    onSubmit: (values) => {
        mutateAsync(values)
            .then((data)=>{
                dispatch(loginAction(data))
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
                    name = 'email'
                    onChange = {formik.handleChange}
                    value = {formik.values.email}
                />
                <input 
                    type = 'password'
                    name = 'password'
                    onChange = {formik.handleChange}
                    value = {formik.values.password}
                />
                <Button variant='contained' type = 'submit' onClose={()=>{}}>Log In</Button>
            </form>
        </div>
        <div>
            {isSuccess && <Alert icon={<CheckIcon fontSize = 'inhereit'/>} severity='success'>Login Successful!</Alert>}
            {isPending && <Alert severity='info'>Loading...</Alert>}
            {isError && <Alert severity='error'>{error.message}</Alert>}
        </div>
    </div>
  )
}

export default Home