import { useNavigate } from 'react-router-dom';
import cl from './NewsItem.module.css'


const NewsItem = ({news}) => {

    const navigate = useNavigate()
  return (
    <div className={cl.news__card} onClick={() => {navigate('/news/id')}}>
      <img src={news.photo} alt={news.title}/>
      <div className={cl.title__date}>
      <h3>{news.title}</h3>
        <p>{news.date}</p>
      </div>
      <p>{news.shortDescription}</p>
    </div>
  );
};

export default NewsItem;
