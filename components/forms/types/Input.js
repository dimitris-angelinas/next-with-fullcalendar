import React from 'react'
import {Form} from 'react-bootstrap'

export default function Input({formik, name, type, label, placeholder, groupClasses, labelClasses, controlClasses}) {

    return (
        <Form.Group className={groupClasses}>
            {label &&
            <Form.Label className={labelClasses}>
                {label}
            </Form.Label>
            }
            <Form.Control
                name={name}
                type={type || 'input'}
                placeholder={placeholder}
                className={controlClasses}
                isInvalid={formik.touched[name] && formik.errors[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="invalid-feedback d-block">
                    {formik.errors[name]}
                </div>
            )}
        </Form.Group>
    );
}