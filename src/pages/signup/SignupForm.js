import React from 'react'
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function SignupForm() {
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            console.log(values)
        },
    });
    return (
        <div className="signup_form shadow-2xl">
            <form onSubmit={formik.handleSubmit}>
                <div className="flex gap-2 mb-1">
                    <TextField
                        label="First name"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                    />
                    <TextField
                        label="Last name"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        label="Your email"
                        name="email"
                        type="email"
                        margin="dense"
                        fullWidth
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        name="matkhau"
                        type="matkhau"
                        margin="dense"
                        fullWidth
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="text-center my-2 font-bold">
                    <Button type="submit" className="px-3" variant="contained" color="primary" size="large">Sign up</Button>
                </div>
                <hr />
                <div className="text-center  mt-2 font-bold">
                    <p className="text-xs pb-1 account_question"> Do have an account ? </p>
                    <Button className="justify-center" variant="outlined" color="info"><NavLink to="/login">Sign in</NavLink> </Button>
                </div>
            </form>
        </div>
    )
}
