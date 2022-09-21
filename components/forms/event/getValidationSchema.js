import * as Yup from 'yup';

export const getValidationSchema = () => {
    return Yup.object({
        name: Yup.string().required('Required'),
        start: Yup.string().required('Required'),
        end: Yup.string().required('Required'),
    })
}