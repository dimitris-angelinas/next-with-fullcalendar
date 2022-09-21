
export const submit = async (formik, id, resource, mutateEvents) => {
    console.log(formik.values, 'formik.values');
    const body = {
        id,
        roomId: resource,
        values: {...formik.values}
    }
    const options = {
        method: 'POST',
        body
    }
    // try {
    //     const res = await fetcher('/api/events/admin/save', options)
    // }
    // catch (e) {
    //     console.log(e,'error in save event')
    // }

    formik.setSubmitting(false)
    mutateEvents()
}