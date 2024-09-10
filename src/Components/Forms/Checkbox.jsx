import React from 'react';

const Checkbox = ({ options, value, setValue}) =>{

    return (
        <> 
        {options.map((option) => (
        <label key={option}> 
             <input
             type='checkbox'
             value={value}
             onChange={ 
                function handleChange({target}){
                    if(target.checked){
                        setValue([...value, target.value])
                    } else {
                        setValue(value.filter((termos) => termos !== target.value))
                    }
             }
            }   
            checked={value.includes(option)}
             />
        </label>
        ))}
        </>
    )
};

export default Checkbox;