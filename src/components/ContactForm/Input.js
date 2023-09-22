import ErrorMessage from "../ErrorMessage";

const Input = ({ label, name, register, required, pattern, placeholder, error}) => (
  <>
    <div className="relative flex flex-col gap-[4px] w-full">
      <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px]">{label}</label>
      <input className="text-[20px] leading-[24px] font-extralight bg-white/5 px-[8px] outline-none
                        placeholder:text-[13px] placeholder:opacity-[0.2]"
        {...register(name, { required })} pattern={pattern}
        placeholder={placeholder} />
       {error && <ErrorMessage message={name==="fullName" ? "Incorect name" : "Invalid email"}/>}
    </div>  
  </>
);


export default Input;