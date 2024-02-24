import CareersPage from "../pages/careers/CareersPage";
import CareersDetailsPage from "../pages/careersDetails/CareersDetailsPage";
import MainPage from "../pages/main/MainPage";
import NewsPage from "../pages/news/NewsPage";
import NewsDetailsPage from "../pages/newsDetails/NewsDetailsPage";

export const routes = [
    {path: "/main", component: <MainPage/>, exact: true},
    {path: "/news", component: <NewsPage/>, exact: true},
    {path: "/careers", component: <CareersPage/>, exact: true},
    {path: "/news/:id", component: <NewsDetailsPage/>, exact: true},
    {path: "/careers/:id", component: <CareersDetailsPage/>, exact: true},
    {path: "*", component: <MainPage/>, exact: true}
    // {path: "/careers", component: <CareerPage/>, exact: true},
    // {path: "/events", component: <EventsPage/>, exact: true},
]