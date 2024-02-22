import MainPage from "../pages/main/MainPage";

export const routes = [
    {path: "/main", component: <MainPage/>, exact: true},
    {path: "*", component: <MainPage/>, exact: true}
    // {path: "/careers", component: <CareerPage/>, exact: true},
    // {path: "/events", component: <EventsPage/>, exact: true},
]