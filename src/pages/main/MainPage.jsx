import CareerComponent from "../../UI/career/careerComponent/CareerComponent";
import MainInfoComponent from "../../UI/mainInfo/MainInfoComponent";
import NewsComponent from "../../UI/news/newsComponent/NewsComponent";
import cl from './MainPage.module.css'

const MainPage = () => {

   
  return (
    <div className={cl.page}>
      <MainInfoComponent/>
      <NewsComponent/>
      <CareerComponent/>
    </div>
  );
};

export default MainPage;
