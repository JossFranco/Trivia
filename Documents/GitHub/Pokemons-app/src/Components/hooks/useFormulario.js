import { useState } from 'react';

export const useFormulario = (initialState = {}) => {
    const [ inputs, setInputs ] =  useState(initialState) 

    const handleChange = (e) => {
        const { name, value, ckecked, type } = e.target;

        setInputs((old) => ({
            ...old,
            [name]: type === 'checkbox' ? ckecked : value,
        }));
    };
    const reset = () => {
        setInputs(initialState);
    };
    return [inputs, handleChange, reset];
};