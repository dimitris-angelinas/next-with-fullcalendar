import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import EyeSlashIcon from "../../icons/EyeSlashIcon";
import EyeIcon from "../../icons/EyeIcon";

export default function Input({formik, name, type, label, placeholder, groupClasses, labelClasses, controlClasses}) {

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return
        }
        setPasswordType("password")
    }

    return (
        <Form.Group className={groupClasses}>
            {label &&
            <Form.Label className={labelClasses}>
                {label}
            </Form.Label>
            }
            <Form.Control
                name={name}
                type={passwordType}
                placeholder={placeholder}
                className={controlClasses}
                isInvalid={formik.touched[name] && formik.errors[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
            <div
                onClick={togglePassword}
            >
                {passwordType == 'password' ?
                    <EyeSlashIcon/>
                    :
                    <EyeIcon/>
                }
            </div>
            {formik.touched[name] && formik.errors[name] && (
                <div className="invalid-feedback d-block">
                    {formik.errors[name]}
                </div>
            )}
        </Form.Group>
    );
}