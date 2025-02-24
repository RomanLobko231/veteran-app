import CareerComponent from "../../UI/career/careerComponent/CareerComponent";
import ContactsRow from "../../UI/contactsRow/ContactsRow";
import MainInfoComponent from "../../UI/mainInfo/MainInfoComponent";
import NewsComponent from "../../UI/news/newsComponent/NewsComponent";
import cl from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={cl.page}>
      <MainInfoComponent />
      <h1 style={{ marginTop: "40px", textAlign: "center" }}>
        Контактна iнформацiя
      </h1>
      <ContactsRow />
      <NewsComponent />
      <CareerComponent />
    </div>
  );
};

export default MainPage;
