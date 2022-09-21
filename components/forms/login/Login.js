import React, { useEffect, useState } from "react";
import {Form, Button} from 'react-bootstrap'
import { useFormik } from 'formik';
import {getInitialValues} from "./getInitialValues";
import {getValidationSchema} from "./getValidationSchema";
import Input from "../types/Input";
import Password from "../types/Password";
import fetcher from "../../../functions/jsonapi/fetcher";
import { useRouter } from 'next/router'
import setTokenCookies from "../../../functions/jsonapi/auth/setTokenCookies";

export default function Login({}) {

    const router = useRouter()

    const formik = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        onSubmit: async values => {
            const {username, password} = values
            const body = {
                username,
                password
            }
            try {
                const res = await fetcher('/api/user/admin/login', {
                    method: 'POST',
                    body
                })
                setTokenCookies(res.access_token, res.refresh_token, res.expires_in)
                router.push('/')
            }
            catch (e) {
                console.log('error in login: ', e)
            }
            formik.setSubmitting(false)
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Input
                groupClasses={`mb-3`}
                formik={formik}
                name={`username`}
                label={`Username`}
            />
            <Password
                groupClasses={`mb-3`}
                formik={formik}
                name={`password`}
                label={`Password`}
            />
            <Button
                variant="primary"
                type="submit"
                disabled={formik.isSubmitting}
            >
                Login
            </Button>
        </Form>
    )
}