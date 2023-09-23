import { useState } from "react";
import PropTypes from "prop-types"
import ErrorMessage from "../ErrorMessage";

const Input = ({ label, name, register, required, pattern, placeholder, errors, checkSubmit }) => {
  const [validate, setValidate] = useState(true);
  const toggleValidate = (newValue) => {
    if (validate !== newValue) setValidate(newValue)
  }
  
  const handleChange = ({ target: { value } }) => {
    checkSubmit(name)   
    toggleValidate(value.match(pattern) !== null)
  }
  return (
    <>
      <div className="relative flex flex-col gap-[4px] w-full">
        <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px]">{label}</label>
        <input className="backdrop-blur h-[24px] flex align-item-center text-[20px] leading-[24px] font-extralight 
                          bg-white/5 px-[8px] outline-none xl:h-[28px]
                        placeholder:text-[13px] placeholder:opacity-[0.2]
                        invalid:text-[#FF5757] invalid:font-extralight"
          {...register(name, { required })} pattern={pattern}
          placeholder={placeholder}
          onChange={handleChange}
        />
        
        {(!validate || errors[name]) && <ErrorMessage message={name === "fullName" ? "Incorect name" : "Invalid email"} />}
      </div>
    </>
  )
};


export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  pattern: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  checkSubmit: PropTypes.func.isRequired
}