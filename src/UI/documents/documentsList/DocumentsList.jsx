import DocumentItem from '../documentItem/DocumentItem';
import cl from './DocumentsList.module.css'

const DocumentsList = ({ documents }) => {
  return (
    <div className={cl.documents__list}>
      {documents.map( document =>
        <DocumentItem document={document} key={document.title}/>
        )}
    </div>
  );
};

export default DocumentsList;
