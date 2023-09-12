import css from "./Container.module.css"

const Container = ({ classBg, children }) => (
    <div className={`${css[classBg]} px-[20px] md:px-[32px] xl:px-[104px]`}>
      {children}
    </div>
);

export default Container;