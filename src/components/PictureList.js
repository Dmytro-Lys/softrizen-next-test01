import Picture from "./Picture";

const PictureList = () => {
    const photo = ["first", "second", "third"]
    return (
        <div className="flex gap-[24px] flex-col items-center mt-[24px] md:hidden">
             {photo.map((item, index) => {return <Picture key={index} fileNumber={item}/>})}
         </div>
    )
}

export default PictureList;