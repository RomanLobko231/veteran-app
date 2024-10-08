import NewsItem from "../newsItem/NewsItem";
import cl from './NewsList.module.css'

const NewsList = ({news}) => {

    return (
        <div className={cl.news__list}>
            {news.reversse().map(news =>
                <NewsItem news={news} key={news.id}/>
            )}
        </div>
    );
};

export default NewsList;
