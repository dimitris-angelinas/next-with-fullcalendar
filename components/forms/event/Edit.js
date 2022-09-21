import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useFormik } from 'formik';
import {getInitialValues} from "./getInitialValues";
import {getValidationSchema} from "./getValidationSchema";
import {submit} from "./submit";
import Input from "../types/Input";
import DateTime from "../types/DateTime";
import EventModal from "../../modals/EventModal";
import Delete from "./Delete";

export default function Edit({event, resource, mutateEvents}) {

    const [showDelete,setShowDelete] = useState(false)

    const formik = useFormik({
        initialValues: getInitialValues(event),
        validationSchema: getValidationSchema(),
        onSubmit: values => {submit(formik, event.id, resource, mutateEvents)},
    })

    return (
        <>
            {!showDelete ?
                <Form onSubmit={formik.handleSubmit}>
                    <Input
                        groupClasses={`mb-3`}
                        formik={formik}
                        name={`name`}
                        label={`Name`}
                    />
                    <DateTime
                        groupClasses={`mb-3`}
                        formik={formik}
                        name={`start`}
                        label={`Start`}
                    />
                    <DateTime
                        groupClasses={`mb-3`}
                        formik={formik}
                        name={`end`}
                        label={`End`}
                    />

                    <div className={`my-3`}>
                        <Button
                            className={`me-2`}
                            variant="primary"
                            type="submit"
                            disabled={formik.isSubmitting}
                        >
                            Save
                        </Button>

                        {event.attributes &&
                        <div
                            className={`btn btn-danger me-2`}
                            onClick={()=>setShowDelete(true)}
                        >
                            Delete
                        </div>
                        }
                    </div>
                </Form>
                :
                <Delete event={event} setShow={setShowDelete} mutateEvents={mutateEvents}/>
            }
        </>
    )
}