import cl from './NewsDetailsPage.module.css'

const NewsDetailsPage = () => {

    const news = { title: "Test Title", date: "12.02.2024", text: "This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya! This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya! This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya! This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!\n\n This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!\n\nThis is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!This is a short description for the test news. I does not make sence and is used just to fill some space. That's why you should not read it any further, unless you really do not have anything other to do. Welp, here is the end of this short description. See ya!", photo: '../soldier__handshake.jpg' }
    
    return (
    <div className={cl.page}>
     <img src={news.photo} alt={news.title}/>    
     <h1>{news.title}</h1>
     <p>{news.date}</p>
     <p style={{ whiteSpace: "pre-line" }} className={cl.text}>{news.text}</p>
     </div>
  );
};

export default NewsDetailsPage;
