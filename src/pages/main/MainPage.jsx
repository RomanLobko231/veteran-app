import MainInfoComponent from "../../UI/mainInfo/MainInfoComponent";
import cl from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={cl.page}>
      <MainInfoComponent/>
    </div>
  );
};

export default MainPage;
