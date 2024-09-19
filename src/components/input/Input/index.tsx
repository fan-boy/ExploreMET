import React from "react";


type InputProps = {

    type: string,
    onChange: (e:React.FormEvent<HTMLInputElement>) => void,
    style: string,
    placeholder?: string,
    value?:string
}

const InputField = (props: InputProps) =>{

    return(
        <input 
            className={props.style}
            type={props.type}
            placeholder={props.placeholder?props.placeholder:''}
            onChange={(e) =>props.onChange(e)}
            value={props.value}
        />
    )


}

export default InputField;