import DocumentItem from '../documentItem/DocumentItem';
import cl from './DocumentsList.module.css'

const DocumentsList = ({ documents }) => {
  return (
    <div className={cl.documents__list}>
      {documents.map( document =>
        <DocumentItem document={document} key={document.title}/>
        )}
        <p>Документи та інформацію взято для некомерційного використання з сайту <a href='https://turbota.mil.gov.ua/zrazky-documentiv'>ТУРБОТА про військовослужбовця</a></p>
    </div>
  );
};

export default DocumentsList;
