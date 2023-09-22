import { useForm } from "react-hook-form";
import Input from "./Input";
import ErrorMessage from "../ErrorMessage";

const ContactForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset()
    }
    return (
       
            <form className="w-full  flex flex-col gap-y-[25px] 
                             md:flex-row  md:gap-x-[20px] 
                             xl:flex-col xl:gap-y-[40px] " onSubmit={handleSubmit(onSubmit)}>
                <div className="md:w-[221px] 
                            xl:w-full xl:flex xl:gap-[20px]">
                <Input label="Full name" name="fullName" register={register}
                    placeholder="Jhon Smith" pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
                    error={errors.fullName}
                    required />
                   
                <Input label="E-mail" name="mail" register={register}
                    placeholder="johnsmith@email.com" pattern="[a-z0-9\._%+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$"
                    error={errors.mail}
                    required />
                    
                </div>            
                <div className="w-full flex flex-col xl:gap-[4px]">
                    <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px]">Message</label>
                    <textarea className="h-[293px] bg-white/5 resize-none outline-none px-[8px]
                                        md:h-[221px] 
                                        xl:h-[174px]"
                                        {...register("Message")}
                    ></textarea>
              
                    <button className=" text-right text-[30px] uppercase font-medium mt-[16px]
                                        xl:mt-[20px]" type="submit">send</button>
                </div>          
            </form>
       
    )
}

export default ContactForm;