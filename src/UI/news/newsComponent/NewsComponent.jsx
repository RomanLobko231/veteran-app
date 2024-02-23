import NewsList from '../newsList/NewsList';
import cl from './NewsComponent.module.css'

const NewsComponent = () => {
  return (
    <div className={cl.news__container}>
      <h1>Останнi новини</h1>
      <NewsList/>
      <button className={cl.button}>Дiзнатися бiл_ше</button>
    </div>
  );
};

export default NewsComponent;
