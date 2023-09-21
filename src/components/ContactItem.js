
const ContactItem = ({refItem, textItem}) =>{
    return(
       <li className={"text-[14px] leading-[24px] font-normal md:text-[16px] xl:text-[18px]"}>
         <a className ="transition duration-300 ease-in-out border-b-[1px] border-transparent hover:border-current"
          target="_blank"
          rel="noreferrer noopener"
          href={refItem}>{textItem}</a>
       </li>
    )
}

export default ContactItem;