import CareerItem from "../careerItem/CareerItem";
import cl from './CareersList.module.css'

const CareersList = ({careers}) => {

  return (
    <div className={cl.careers__list}>
      {careers.map(career => 
        <CareerItem career={career}/>
        )}
    </div>
  );
};

export default CareersList;
