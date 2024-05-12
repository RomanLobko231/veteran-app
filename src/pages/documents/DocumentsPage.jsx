import { useNavigate } from 'react-router-dom';
import cl from './DocumentsPage.module.css'

const DocumentsPage = () => {

    const navigate = useNavigate();

  return (
    <div className={cl.page}>
      <div className={cl.info__choice}>
        <button className={cl.button} onClick={() => navigate('/news')}>Новини</button>
        <p className={cl.title}>Документи</p>
      </div>
    </div>
  );
};

export default DocumentsPage;
