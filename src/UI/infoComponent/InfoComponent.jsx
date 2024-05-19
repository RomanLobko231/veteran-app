import cl from './InfoComponent.module.css'

const InfoComponent = ({title, date, description}) => {

    const formattedCreatedDate = date == null ? "" : new Date(date).toLocaleString('en-UK', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/\//g, '.');

  return (
    <div className={cl.container}>
    <h1>{title}</h1>
    <p className={cl.date}>{formattedCreatedDate}</p>
    <hr style={{width: '55%', maxWidth: "2300px"}}/>
    <p style={{ whiteSpace: "pre-line" }} className={cl.description}>{description}</p>
   </div>
  );
};

export default InfoComponent;
