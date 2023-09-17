
const Container = ({ children }) => (
  <div className="min-w-[320px] max-w-[480px] mx-auto px-[20px] 
                  md:max-w-[768px] md:px-[32px]
                  xl:max-w-[1280px] xl:px-[104px]">
      {children}
    </div>
);


export default Container;