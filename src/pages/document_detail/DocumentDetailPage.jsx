import { useLocation, useParams } from "react-router-dom";
import DocumentsService from "../../api/DocumentsService";
import { TailSpin } from "react-loader-spinner";
import cl from './DocumentDetailPage.module.css'
import { useEffect, useState } from "react";
import { useApiCall } from "../../hooks/useApiCall";
import DocumentInfo from "../../UI/documents/documentInfo/DocumentInfo";

const DocumentDetailPage = () => {

    const params = useParams();
    const [document, setDocument] = useState({});
    const [fetchDocument, isLoading, error] = useApiCall( async () => {
        const response = await DocumentsService.getDocumentById(params.id);
        return response.data;
    })

    
    useEffect(() => {
           setDocument(fetchDocument());
    }, [])


  return (
    <div className={cl.page}>
      {isLoading
            ? <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#2c425f"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ marginTop: '5%' }}
            wrapperClass="" />
            : <DocumentInfo downloadedFile={document}/>
        }
    </div>
  );
};

export default DocumentDetailPage;
