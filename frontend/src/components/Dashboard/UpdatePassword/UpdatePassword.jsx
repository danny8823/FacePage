import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import React from 'react'

const UpdatePassword = () => {
    const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
        mutationFn: upd
    })
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: (values) => {
            mutateAsync(values)
                .then((data)=> {
                    console.log("update password", data)
                })
                .catch((error)=> {
                    console.log(error)
                })
        }
    })
  return (
    <div>
        <form>
            <label>Password</label>
            <input
                className = 'update-password-input'
                type = 'password'
                name = 'password'
            />
        </form>
    </div>
  )
}

export default UpdatePassword