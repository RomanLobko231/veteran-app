import cl from './CareerItem.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const CareerItem = ({career}) => {
  return (
    <div className={cl.card}>
        <div className={cl.career__info}>
      <div className={cl.title__city}>
            <h1>{career.title}</h1>
            <p>{career.city}</p>
      </div>
      <p>{career.description}</p>
    </div>
    <MdKeyboardArrowRight className={cl.icon}/>
    </div>
  );
};

export default CareerItem;
