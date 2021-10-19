import * as React from 'react';

export function useForm({ initialValues }: any) {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e: any) => {
    const fieldName = e.target.getAttribute('name');
    const { value } = e.target; 

    setValues({
      ...values,
      [fieldName]: value
    })

    if(fieldName == 'subtitled'){
      setValues({
        ...values,
        subtitled: !values.subtitled
      })
    }
  };

  return {
    values,
    handleChange,
  };
}
