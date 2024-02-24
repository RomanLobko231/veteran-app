import { useNavigate } from 'react-router-dom';
import CareersList from '../careersList/CareersList';
import cl from './CareerComponent.module.css'
import {careers} from './../../../careers'

const CareerComponent = () => {

  const navigate = useNavigate();

  return (
    <div className={cl.career__container}>
      <h1>Карера</h1>
      <CareersList careers={careers}/>
      <button className={cl.button} onClick={() => navigate('/careers')}>Дiзнатися бiльше</button>
    </div>
  );
};

export default CareerComponent;
