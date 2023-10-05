import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValue);
    

    const clearForm = () => {
        setValues(initialValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb();
    }

    const handleChanges = e => {
        localStorage.setItem([e.target.value], e.target.value);
        setValues({...values, [e.target.name]: e.target.value})
    }

    return [values, clearForm, handleChanges, handleSubmit]
}