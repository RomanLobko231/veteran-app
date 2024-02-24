import CareersList from "../../UI/career/careersList/CareersList";
import cl from './CareersPage.module.css'

const CareersPage = () => {

    const careers = [
        {title: "Career Title", city: "Work City", description: "Just a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobse a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobseekers. Used only for test a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobseekers. Used only for testekers. Used only for test a short description of a job, that might interest potential jobseekers. Used only foust a short description of a job, that might interest potential jobseekers. Used only for testing pr testing purposes."},
        {title: "Career Long Title", city: "Long Work City", description: "Just a short description of a job, that might interest potential jobseekers. Used only for testing purposes."},
        {title: "Career Long Title", city: "Long Work City", description: "Just a short description of a job, that might interest potential jobseekers. Used only for testing purposes."},
        {title: "Career Long Title", city: "Long Work City", description: "Just a short description of a job, that might interest potential jobseekers. Used only for testing purposes."}
    ]

  return (
    <div className={cl.page}>
      <h1>Вакансii</h1>
      <p>Всого: {careers.length}</p>
      <CareersList careers={careers}/>
    </div>
  );
};

export default CareersPage;
