import React from 'react'
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function LoginForm() {
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
        <div className="login_form shadow-2xl">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        label="Email address"
                        name="taiKhoan"
                        fullWidth
                        type="text"
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        label="Your password"
                        name="matKhau"
                        type="password"
                        margin="dense"
                        fullWidth
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="text-center my-2 font-bold">
                    <Button type="submit" className="px-3" variant="contained" color="primary" size="large">Log in</Button>
                </div>
                <hr />
                <div className="text-center  mt-2 font-bold">
                    <p className="text-xs pb-1 account_question"> Don't have an account ? </p>
                    <Button className="justify-center" variant="outlined" color="info"><NavLink to="/signup">Sign up </NavLink></Button>
                </div>
            </form>
        </div>
    )
}
