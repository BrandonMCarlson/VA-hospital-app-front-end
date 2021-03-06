
import { useState } from "react";

const useForm = (callback) => {
    const [formValue, setFormValue] = useState("");

    const handleChange = (event) => {
        event.persist(); 
        setFormValue(values => ({...values, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
        setFormValue("");
    };

    return {formValue, handleChange, handleSubmit, setFormValue}
};
 
export default useForm;