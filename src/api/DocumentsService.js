import api from './api'

export default class DocumentsService {

    static async getAll() {
        const response = api.get('/documents/display');
        return response;
    }

    static async getDocumentById(id) {
        const response = await api.get('/documents/' + id);
        return response;
     } 


    static async downloadFIleById(id){
        await api.get('/documents/' + id + '/download')
        .then((response) => response.data)
        .then((downloadedFile) => {
            const link = document.createElement('a');
            link.href = `data:${downloadedFile.mime_type};base64,${downloadedFile.file}`;
            link.download = downloadedFile.title;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error) => {
            alert("An error ocurred while downloading")
        })
    }



}