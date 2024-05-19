import CareersPage from "../pages/careers/CareersPage";
import CareersDetailsPage from "../pages/careersDetails/CareersDetailsPage";
import DocumentDetailPage from "../pages/document_detail/DocumentDetailPage";
import DocumentsPage from "../pages/documents/DocumentsPage";
import MainPage from "../pages/main/MainPage";
import NewsPage from "../pages/news/NewsPage";
import NewsDetailsPage from "../pages/newsDetails/NewsDetailsPage";

export const routes = [
    {path: "/main", component: <MainPage/>, exact: true},
    {path: "/news", component: <NewsPage/>, exact: true},
    {path: "/careers", component: <CareersPage/>, exact: true},
    {path: "/news/:id", component: <NewsDetailsPage/>, exact: true},
    {path: "/documents/:id", component: <DocumentDetailPage/>, exact: true},
    {path: "/careers/:id", component: <CareersDetailsPage/>, exact: true},
    {path: "/documents", component: <DocumentsPage/>, exact: true},
    {path: "*", component: <MainPage/>, exact: true}
   
]