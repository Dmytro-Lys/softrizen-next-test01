import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import FormButton from "./FormButton";

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
                           placeholder="Jhon Smith"
                           pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
                           errors={errors}
                           checkSubmit={changeError}
                           required />
                    <Input label="E-mail" name="mail" register={register}
                           placeholder="johnsmith@email.com"
                           pattern="[a-z0-9\._%+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$"
                           errors={errors}
                           checkSubmit={changeError}
                           required />
                </div>            
                <div className="w-full flex flex-col gap-[16px] xl:gap-[24px]">
                    <Textarea label="Message" register={register}/>
                    <FormButton caption="send"/>
                </div>          
            </form>
       
    )
}

export default ContactForm;