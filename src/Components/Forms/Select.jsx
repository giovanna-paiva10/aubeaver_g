import React from 'react';

const Select = ({options, value, setValue, label, ...props}) => {

    return (
        <> 
        <label htmlFor="">{label}</label>
        <p> </p>
        <select 
            value={value} 
            onChange={({target}) => setValue(target.value)} 
            {...props}>

            <option>Selecione</option> 

            {options.map(option => (
                <option key={option}>{option}</option>
            ))} 

        </select>
        </>
    )
};

export default Select;