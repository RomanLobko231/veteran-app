import { useNavigate } from 'react-router-dom';
import NewsList from '../newsList/NewsList';
import cl from './NewsComponent.module.css'
import { useApiCall } from '../../../hooks/useApiCall';
import NewsService from '../../../api/NewsService';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

const NewsComponent = () => {

    const navigate = useNavigate();
    const [news, setNews] = useState([]);
    const [fetchNews, isLoading, error] = useApiCall( async () => {
        const response = await NewsService.getLastThree();
        setNews(response.data)
    })

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <div className={cl.news__container}>
            <h1>Останнi новини</h1>
            {isLoading
                ? <TailSpin
                    visible={true}
                    height="50"
                    width="50"
                    color="#4285f4"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{ marginTop: '5%' }}
                    wrapperClass=""
                />
                : <NewsList news={news.reverse()} />
            }
            <button className={cl.button} onClick={() => navigate('/news')}>Дiзнатися бiльше</button>
        </div>
    );
};

export default NewsComponent;
