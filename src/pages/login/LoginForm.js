import React from 'react'
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';

const validation = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
})

export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema : validation,
        onSubmit: values => {
            console.log(JSON.stringify(values))
        },
    });
    return (
        <div className="login_form shadow-2xl">
            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        label="Email address"
                        name="email"
                        fullWidth
                        type="email"
                        margin="dense"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email }
                    />
                </div>
                <div>
                    <TextField
                        label="Your password"
                        name="password"
                        type="password"
                        margin="dense"
                        fullWidth
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password }
                    />
                </div>
                <div className="text-center my-2 font-bold">
                    <Button type="submit" className="px-3" variant="contained" color="primary" size="large">Sign in</Button>
                </div>
                <hr />
                <div className="text-center  mt-2 font-bold">
                    <p className="text-xs pb-1 account_question"> New to Jira clone ? </p>
                    <NavLink to="/signup">
                        <Button className="justify-center" variant="outlined" color="info">
                            Create an account
                        </Button>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}
