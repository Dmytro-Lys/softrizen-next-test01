import Image from 'next/image'

const ErrorMessage = ({ message }) => {
    return (
        <div className="absolute bottom-[-26px] right-0 flex">
            <Image
                    src="../images/close.svg"
                    alt="close icon"
                    width={18}
                    height={18}
                    priority
                />
            <p className="text-[#FF5757] text-[12px] font-extralight leading-[24px] tracking-[2.4px]">{message}</p> 
        </div>
    )
}

export default ErrorMessage;