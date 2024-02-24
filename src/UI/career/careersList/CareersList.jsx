import CareerItem from "../careerItem/CareerItem";
import cl from './CareersList.module.css'

const CareersList = ({careers}) => {

  return (
    <div className={cl.careers__list}>
      {careers.map(career => 
        <CareerItem career={career} key={career.id}/>
        )}
    </div>
  );
};

export default CareersList;
