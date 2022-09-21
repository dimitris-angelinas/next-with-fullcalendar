import * as Yup from 'yup';

export const getValidationSchema = () => {
    return Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })
}