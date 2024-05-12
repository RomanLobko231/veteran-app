import cl from './NewsArticle.module.css'

const NewsArticle = ({newsArticle}) => {

    const formattedCreatedDate = newsArticle.date == null ? "null" : new Date(newsArticle.date).toLocaleString('en-UK', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/\//g, '.');

  return (
    <div className={cl.article__container}>
     <h2>{newsArticle.title}</h2>
     <p className={cl.date}>{formattedCreatedDate}</p>
     <hr style={{width: '50%'}}/>
     <p style={{ whiteSpace: "pre-line" }} className={cl.text}>{newsArticle.content}</p>
    </div>
  );
};

export default NewsArticle;
