import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import ErrorMessage from "../ErrorMessage";

const ContactForm = () => {
    const { register, formState: { errors}, handleSubmit, reset } = useForm();
    const [isChanged, setIsChanged] = useState(false)
    const onSubmit = (data) => {
        console.log(data);
        reset()
    }

    const changeError = (inputName) => {
        if (errors[inputName]) {
            delete errors[inputName]
            setIsChanged(!isChanged)
        }
    }
    
        
    return (
       
            <form className="w-full  flex flex-col gap-y-[25px] 
                             md:flex-row  md:gap-x-[20px] 
                             xl:flex-col xl:gap-y-[40px] xl:max-w-[607px] " onSubmit={handleSubmit(onSubmit)}>
                <div className="md:w-[221px] 
                            xl:w-full xl:flex xl:gap-[20px]">
                           
                <Input label="Full name" name="fullName" register={register}
                    placeholder="Jhon Smith" pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
                    errors={errors}
                    checkSubmit={changeError}
                    required />
                   
                <Input label="E-mail" name="mail" register={register}
                    placeholder="johnsmith@email.com" pattern="[a-z0-9\._%+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$"
                    errors={errors}
                    checkSubmit={changeError}
                    required />
                    
                </div>            
                <div className="w-full flex flex-col xl:gap-[4px]">
                    <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px]">Message</label>
                    <textarea className="h-[193px] bg-white/5 resize-none outline-none px-[8px]
                                        md:h-[221px] 
                                        xl:h-[174px] "
                                        {...register("Message")}
                    ></textarea>
              
                <button className="block self-end w-[88px] text-[30px] uppercase font-medium mt-[16px]
                                   transition-transform duration-300 ease-in-out hover:scale-[1.1]
                                        xl:mt-[20px]" type="submit">send</button>
                </div>          
            </form>
       
    )
}

export default ContactForm;