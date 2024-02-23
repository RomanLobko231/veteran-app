import NewsItem from "../newsItem/NewsItem";
import cl from './NewsList.module.css'

const NewsList = () => {

    const news = [
        { title: "Test Title", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' },
        { title: "Test Title", shortDescription: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: './soldier__handshake.jpg' }
    ]

    return (
        <div className={cl.news__list}>
            {news.map(news =>
                <NewsItem news={news}/>
            )}
        </div>
    );
};

export default NewsList;
