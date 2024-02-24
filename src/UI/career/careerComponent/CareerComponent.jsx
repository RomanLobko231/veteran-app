import { useNavigate } from 'react-router-dom';
import CareersList from '../careersList/CareersList';
import cl from './CareerComponent.module.css'

const CareerComponent = () => {

    const navigate = useNavigate();
    const careers = [
        {title: "Career Title", city: "Work City", description: "Just a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobse a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobseekers. Used only for test a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobseekers. Used only for testekers. Used only for test a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobseekers. Used only for testing pr testing purposes."},
        {title: "Career Long Title", city: "Long Work City", description: "Just a short description of a job, that might interest potential jobseekers. Used only for testing purposes."}
    ]


  return (
    <div className={cl.career__container}>
      <h1>Карера</h1>
      <CareersList careers={careers}/>
      <button className={cl.button} onClick={() => navigate('/careers')}>Дiзнатися бiл_ше</button>
    </div>
  );
};

export default CareerComponent;
