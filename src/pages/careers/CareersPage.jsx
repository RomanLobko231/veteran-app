import CareersList from "../../UI/career/careersList/CareersList";
import cl from './CareersPage.module.css'
import { careers } from "../../careers";

const CareersPage = () => {

  return (
    <div className={cl.page}>
      <h1>Вакансiї</h1>
      <p>Всього: {careers.length}</p>
      <CareersList careers={careers}/>
    </div>
  );
};

export default CareersPage;
