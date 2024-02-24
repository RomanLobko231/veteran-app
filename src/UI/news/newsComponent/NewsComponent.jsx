import { useNavigate } from 'react-router-dom';
import NewsList from '../newsList/NewsList';
import cl from './NewsComponent.module.css'

const NewsComponent = () => {

    const navigate = useNavigate();
    const news = [
        { title: "Test Title", date: "24.02.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", date: "30.01.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short descriptionis is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. is is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. . See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", date: "12.02.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' }
    ]

  return (
    <div className={cl.news__container}>
      <h1>Останнi новини</h1>
      <NewsList news={news}/>
      <button className={cl.button} onClick={() => navigate('/news')}>Дiзнатися бiл_ше</button>
    </div>
  );
};

export default NewsComponent;
