import { useState } from "react";

export const useForm = (initialValue={}) => {
    const [formState, setFormState] = useState(initialValue);

    const onInputChange = ({target:{name, value}}) => { 
        //console.log(name, value);
        setFormState({
            ...formState,
            [name]:value,
        })
    }

    const onResetForm=()=>{
        
        setFormState(
            initialValue
        )
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
