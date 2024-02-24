import { useParams } from 'react-router-dom';
import cl from './CareersDetails.module.css'
import {careers} from './../../careers'

const CareersDetailsPage = () => {

    const params = useParams();
    const career = careers.find(element => element.id === params.id)

  return (
    <div className={cl.page}>
      <h1>{career.title}</h1>
      <p>{career.city}</p>
      <hr style={{width: '50%'}}/>
      <p className={cl.description}>{career.description}</p>
    </div>
  );
};

export default CareersDetailsPage;
