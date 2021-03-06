import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { CALL_API_SIGN_UP_ACTION } from '../../redux/constants/consRedux';

const validation = Yup.object({
    firstName: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    passWord: Yup.string().required('Required')
})


export default function SignupForm(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            passWord: '',
        },
        validationSchema: validation,
        onSubmit: values => {
            const { firstName, lastName, email, passWord } = values;
            const newUser = { name: firstName + ' ' + lastName, email, passWord, phoneNumber: '1111' }
            const action = { type: CALL_API_SIGN_UP_ACTION, newUser , historyProps : props.history }
            // Đưa action lên middleWare call api
            dispatch(action)
        },
    });

    return (
        <div className="signup_form shadow-2xl">
            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="flex gap-2 mb-1">
                    <TextField
                        label="First Name"
                        name="firstName"
                        margin="dense"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        margin="dense"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </div>
                <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    margin="dense"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    label="Password"
                    name="passWord"
                    type="password"
                    margin="dense"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.passWord && Boolean(formik.errors.passWord)}
                    helperText={formik.touched.passWord && formik.errors.passWord}
                />
                <div className="text-center my-2 font-bold">
                    <Button type="submit" className="px-3" variant="contained" color="primary" size="large">Sign up</Button>
                </div>
                <hr />
                <div className="text-center  mt-2 font-bold">
                    <p className="text-xs pb-1 account_question"> Already have an account ? </p>
                    <NavLink to="/login">
                        <Button className="justify-center" variant="outlined" color="info">
                            Login
                        </Button>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}
