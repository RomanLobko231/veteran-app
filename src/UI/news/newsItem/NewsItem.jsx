import cl from './NewsItem.module.css'


const NewsItem = ({news}) => {
  return (
    <div className={cl.news__card}>
      <img src={news.photo} alt={news.title}/>
      <h3>{news.title}</h3>
      <p>{news.shortDescription}</p>
    </div>
  );
};

export default NewsItem;
