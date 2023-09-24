import Label from "./Label"
import PropTypes from "prop-types"

const Textarea = ({label, register}) => {
    return (
        <div className="w-full flex flex-col xl:gap-[4px]">
            <Label label={label}/>
            <textarea className="h-[193px] bg-white/5 resize-none outline-none px-[8px]
                                 md:h-[221px] 
                                 xl:h-[174px] "
                     {...register(label)}
            ></textarea>
        </div>
    )
}

export default Textarea;

Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired
}