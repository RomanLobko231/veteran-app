import { useNavigate } from 'react-router-dom';
import cl from './CareerItem.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const CareerItem = ({career}) => {

    const navigate = useNavigate()

  return (
    <div className={cl.card} onClick={() => {navigate('/careers/' + career.id)}}>
        <div className={cl.career__info}>
      <div className={cl.title__city}>
            <h1>{career.title}</h1>
            <div className={cl.dot}/>
            <p>{career.city}</p>
      </div>
    </div>
    <MdKeyboardArrowRight className={cl.icon}/>
    </div>
  );
};

export default CareerItem;
