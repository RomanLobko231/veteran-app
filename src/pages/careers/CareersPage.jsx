import CareersList from "../../UI/career/careersList/CareersList";
import cl from './CareersPage.module.css'
import { careers } from "../../careers";

const CareersPage = () => {

  return (
    <div className={cl.page}>
      <h1>Вакансii</h1>
      <p>Всого: {careers.length}</p>
      <CareersList careers={careers}/>
    </div>
  );
};

export default CareersPage;
