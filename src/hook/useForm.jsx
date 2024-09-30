import { useState } from "react";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const inputOnChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormState({
      ...setFormState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    inputOnChange,
    onResetForm,
  };
};
