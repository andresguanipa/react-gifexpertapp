import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);  // Se escribirá en el valor del input el cambio que hagamos
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if(inputValue.trim().length >= 2){
            setCategories(cats => [inputValue, ...cats]);   //Se agrega primero la nueva y luego se insertan la anteriores
            setInputValue('');

        }

    }

    return(

        <form onSubmit={handleSubmit}>

            <input type="text" value={inputValue} onChange={handleInputChange}/>

        </form>

    );

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}