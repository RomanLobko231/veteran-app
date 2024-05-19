import { useEffect, useState } from 'react';
import cl from './NewsDetailsPage.module.css'
import { useParams } from 'react-router-dom';
import { useApiCall } from '../../hooks/useApiCall';
import NewsService from '../../api/NewsService';
import { TailSpin } from 'react-loader-spinner';
import NewsArticle from '../../UI/newsArticle/NewsArticle';


const NewsDetailsPage = () => {

    const params = useParams();
    const [newsArticle, setNewsArticle] = useState(null);
    const [fetchNewsArticle, isLoading, error] = useApiCall( async () => {
        const response = await NewsService.getById(params.id);
        setNewsArticle(response.data)
    })

    

    useEffect(() => {
        fetchNewsArticle();
    }, [])


    if(error) {
        return(
            <h1>An error ocurred..</h1>
        );
    }

    return (
        <div className={cl.page}>
            {isLoading || newsArticle === null
            ? <TailSpin 
            visible={true}
            height="50"
            width="50"
            color="#2c425f"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ marginTop: '15%' }}
            wrapperClass="" />
            : <NewsArticle newsArticle={newsArticle}/>
        }
        </div>
  );
};

export default NewsDetailsPage;
