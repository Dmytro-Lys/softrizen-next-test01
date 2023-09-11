const baseStyleBorderCorner = "w-[42px] h-[8px] xl:w-[44px] xl:h-[12px] absolute border-white"
const BorderCorner = () => (
    <>
        <div className={`${baseStyleBorderCorner} left-0 top-0 border-l border-t`}></div>
        <div className={`${baseStyleBorderCorner} left-0 bottom-0 border-l border-b`}></div>
        <div className={`${baseStyleBorderCorner} right-0 bottom-0 border-r border-b`}></div>
        <div className={`${baseStyleBorderCorner} right-0 top-0 border-r border-t`}></div>
  </>      
)

export default BorderCorner;