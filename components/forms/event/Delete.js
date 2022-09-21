import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useFormik } from 'formik';

export default function Delete({event, setShow, mutateEvents}) {


    const formik = useFormik({
        initialValues: {},
        onSubmit: async values => {
            const body = {
                id: event.id
            }
            const options = {
                method: 'POST',
                body
            }
            // try {
            //     const res = await fetcher('/api/events/admin/delete', options)
            // }
            // catch (e) {
            //     console.log(e,'error in save event')
            // }
            formik.setSubmitting(false)
            mutateEvents()
        },
    })

    return (
        <>
            <h2>Sure???</h2>
            <Form onSubmit={formik.handleSubmit}>

                <Button
                    className={`me-2`}
                    variant="danger"
                    type="submit"
                    disabled={formik.isSubmitting}
                >
                    Delete
                </Button>

                <div
                    className={`btn btn-secondary me-2`}
                    onClick={()=>setShow(false)}
                >
                    Cancel
                </div>
            </Form>
        </>
    )
}