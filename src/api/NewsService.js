import api from './api';


export default class NewsService {

    static async getAll() {
        const response = await api.get('/news')
        return response;
    }

    static async getById(id) {
        const newsArticle = await api.get('/news/' + id)
            .then((response) => {
                console.log(response.data)
                return response;
            })
        return newsArticle;
    }

}