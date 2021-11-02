import React from 'react'
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import * as Yup from 'yup';

const validation = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    passWord: Yup.string().required('Required')
})

export default function LoginForm(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            passWord: '',
        },
        validationSchema: validation,
        onSubmit: values => {
            const action = { type: "CALL_API_SIGN_IN", data: values ,historyProps: props.history};
            dispatch(action)
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
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        name="passWord"
                        type="password"
                        margin="dense"
                        fullWidth
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.passWord && Boolean(formik.errors.passWord)}
                        helperText={formik.touched.passWord && formik.errors.passWord}
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
