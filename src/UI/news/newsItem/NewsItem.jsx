import { useNavigate } from 'react-router-dom';
import cl from './NewsItem.module.css'


const NewsItem = ({ news }) => {

    const navigate = useNavigate();

    const formattedCreatedDate = news.date == null ? " " : new Date(news.date).toLocaleString('en-UK', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/\//g, '.');

    return (
        <div className={cl.news__card} onClick={() => { navigate('/news/' + news.id) }}>
            <img src='./news_illustration.jpg' alt={news.title}/>
            <div className={cl.title__date}>
                <h3>{news.title}</h3>
                <p>{formattedCreatedDate}</p>
            </div>
        </div>
    );
};

export default NewsItem;
