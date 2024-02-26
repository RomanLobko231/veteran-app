import NewsList from '../../UI/news/newsList/NewsList';
import cl from './NewsPage.module.css'
import { useEffect, useState } from 'react';
import NewsService from '../../api/NewsService';
import { useApiCall } from '../../hooks/useApiCall';
import { TailSpin } from 'react-loader-spinner';

const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [fetchNews, isLoading, error] = useApiCall( async () => {
        const response = await NewsService.getAll();
        setNews(response.data)
    })

    useEffect(() => {
        fetchNews()
    }, [])


  return (
    <div className={cl.page}>
      <h1>Новини</h1>
      <p>Всього: {news.length}</p>
      {isLoading 
       ? <TailSpin
       visible={true}
       height="50"
       width="50"
       color="#4285f4"
       ariaLabel="tail-spin-loading"
       radius="1"
       wrapperStyle={{ marginTop: '5%' }}
       wrapperClass="" />
       : <NewsList news={news}/>

       }
    </div>
  );
};

export default NewsPage;
