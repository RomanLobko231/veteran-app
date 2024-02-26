import { useParams } from 'react-router-dom';
import cl from './CareersDetails.module.css'
import {careers} from './../../careers'
import { BiLogoGmail} from "react-icons/bi";


const CareersDetailsPage = () => {

    const params = useParams();
    const career = careers.find(element => element.id === params.id)

  return (
    <div className={cl.page}>
      <h1>{career.title}</h1>
      <p>{career.city}</p>
      <hr style={{width: '50%'}}/>
      <p className={cl.description}>Якщо ви зацікавлені в співпраці з нами, надішліть лист на нашу електронну адресу:</p>
      <div className={cl.email}>
                <BiLogoGmail />
                <h2>romny.veteran@gmail.com</h2>
            </div>
    </div>
  );
};

export default CareersDetailsPage;
