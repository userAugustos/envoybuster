import * as React from "react";
import { InputInterface } from "../../utils/moviesTypes";
import { AiTwotoneCalendar } from "react-icons/ai";

export const Input = ({
  value = "",
  onChange,
  required,
  label,
  type,
  info,
  name,
  checked
}: InputInterface) => {
  const [date, setDate] = React.useState<any>();
  // TODO: Mudança no input de data para exibir quando for atualizar
  const handleDateChange = (e: any) => {
    console.log(e.target.value);
    setDate(e.target.value);
    onChange(e);
  };

  return (
    <section className='input'>
      {type === "date" ? (
        <>
          <span className='date-toggle'>
            <span className='date-button'>
              <AiTwotoneCalendar />
            </span>
            <input
              type='date'
              className='date-input'
              name={name}
              onChange={handleDateChange}
            />
          </span>
          <input type='text' name='text-date-input' value={date} placeholder={label}/>
        </>
      ) : (
        <>
          <input type={type} name={name} value={value} onChange={onChange} checked={checked}/>
          <label htmlFor={name}>
            {label}
            {required && <span className='required'>*</span>}
            {info && <span className='mini-info'>{info}</span>}
          </label>
        </>
      )}
    </section>
  );
};
