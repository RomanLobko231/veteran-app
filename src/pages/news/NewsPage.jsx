import NewsList from '../../UI/news/newsList/NewsList';
import cl from './NewsPage.module.css'

const NewsPage = () => {
    const news = [
        { title: "Test Title", date: "24.02.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", date: "30.01.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short descriptionis is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. is is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. . See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", date: "12.02.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", date: "30.01.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short descriptionis is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. is is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. . See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", date: "30.01.2024", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short descriptionis is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. is is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. . See ya!", photo: './soldier__handshake.jpg' },

    ]

  return (
    <div className={cl.page}>
      <h1>Новини</h1>
      <p>Всого: {news.length}</p>
      <NewsList news={news}/>
    </div>
  );
};

export default NewsPage;
