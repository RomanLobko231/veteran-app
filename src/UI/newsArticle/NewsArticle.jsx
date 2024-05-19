import InfoComponent from "../infoComponent/InfoComponent";

const NewsArticle = ({newsArticle}) => {

  return (
    <InfoComponent title={newsArticle.title} date={newsArticle.date} description={newsArticle.content}/>
  );
};

export default NewsArticle;
