import React from 'react'
import {Form} from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import JsDateTime from "../../../classes/datetime/JsDateTime";

export default function DateTime({formik, name, label, placeholder, groupClasses, labelClasses, controlClasses}) {

    return (
        <Form.Group className={groupClasses}>
            {label &&
            <Form.Label className={labelClasses}>
                {label}
            </Form.Label>
            }
            {/*<DatePicker*/}
            {/*    name={name}*/}
            {/*    selected={formik.values[name] && new DrupalDateTime(formik.values[name]).getJsDate() || ''}*/}
            {/*    onChange={(val) => val && formik.setFieldValue(name, new JsDateTime(val).getIsoFormat()) || ''}*/}
            {/*    onBlur={() => formik.setFieldTouched(name,true)}*/}
            {/*    dateFormat="dd/MM/yyyy HH:mm"*/}
            {/*    autoComplete="off"*/}
            {/*    showTimeSelect*/}
            {/*    timeFormat="HH:mm"*/}
            {/*    timeIntervals={15}*/}
            {/*    timeCaption="Time"*/}
            {/*    placeholder={placeholder}*/}
            {/*    className={controlClasses || 'form-control'}*/}
            {/*/>*/}
            {formik.touched[name] && formik.errors[name] && (
                <div className="invalid-feedback d-block">
                    {formik.errors[name]}
                </div>
            )}
        </Form.Group>
    );
}