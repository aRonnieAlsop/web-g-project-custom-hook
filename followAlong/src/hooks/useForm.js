import { useState } from 'react'

export const useForm = (initialValue, cb) => {
    const [value, setValue] = useState(initialValue);
    

    const clearForm = () => {
        setValues(initialValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb();
    }

    const handleChanges = e => {
        setValues({...values, [e.target.name]: e.target.value})
        //have to have that name value in our text inputs

    }

    return [values, clearForm, handleChanges, handleSubmit]
}