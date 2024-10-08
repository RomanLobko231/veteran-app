import NewsList from '../../UI/news/newsList/NewsList';
import cl from './NewsPage.module.css'
import { useEffect, useState } from 'react';
import NewsService from '../../api/NewsService';
import { useApiCall } from '../../hooks/useApiCall';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const NewsPage = () => {

    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [fetchNews, isLoading, error] = useApiCall( async () => {
        const response = await NewsService.getAll();
        setNews(response.data.reverse())
    })

    useEffect(() => {
        fetchNews()
    }, [])


  return (
    <div className={cl.page}>
      <div className={cl.info__choice}>
        <p className={cl.title}>Новини</p>
      <button className={cl.button} onClick={() => navigate('/documents')}>Документи</button>
      </div>
      <p>Всього новин: {news.length}</p>
      {isLoading 
       ? <TailSpin
       visible={true}
       height="50"
       width="50"
       color="#2c425f"
       ariaLabel="tail-spin-loading"
       radius="1"
       wrapperStyle={{ marginTop: '15%' }}
       wrapperClass="" />
       : <NewsList news={news}/>
       }
    </div>
  );
};

export default NewsPage;
