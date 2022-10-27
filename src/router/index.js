import {Redirect} from "react-router-dom";

import Home from "../pages/home";
import Following from "../pages/home/subPage/following";
import Recommended from "../pages/home/subPage/recommended";
import Backend from "../pages/home/subPage/backend";
import Frontend from "../pages/home/subPage/frontend";
import Android from "../pages/home/subPage/android";
import IOS from "../pages/home/subPage/ios";
import Ai from "../pages/home/subPage/ai";
import Freebie from "../pages/home/subPage/freebie";
import Career from "../pages/home/subPage/career";
import Article from "../pages/home/subPage/article";
import Pins from "../pages/pins";
import News from "../pages/news";
import Books from "../pages/books";
import Events from "../pages/events";
import Notification from "../pages/notification";
import Editor from "../pages/editor";
import Artical from "../pages/artical";

const routes = [
    {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/home"}/>,
    },
    {
        path: "/home",
        component: Home,
        routes: [
            {
                path: "/home",
                exact: true,
                render: () => <Redirect to={"/home/recommended"}/>
            },
            {
                path: "/home/recommended",
                component: Recommended
            },
            {
                path: "/home/following",
                component: Following
            },
            {
                path: "/home/backend",
                component: Backend
            },
            {
                path: "/home/frontend",
                component: Frontend
            },
            {
                path: "/home/android",
                component: Android
            },
            {
                path: "/home/ios",
                component: IOS
            },
            {
                path: "/home/ai",
                component: Ai
            },
            {
                path: "/home/freebie",
                component: Freebie
            },
            {
                path: "/home/career",
                component: Career
            },
            {
                path: "/home/article",
                component: Article
            },
        ]
    },
    {
        path: '/pins',
        exact: true,
        component: Pins
    },
    {
        path: '/news',
        exact: true,
        component: News
    },
    {
        path: '/books',
        exact: true,
        component: Books
    },
    {
        path: "/events",
        exact: true,
        component: Events
    },
    {
        path: "/notification",
        exact: true,
        component: Notification
    },
    {
        path: '/editor',
        component: Editor
    },
    {
        path: '/artical',
        component: Artical
    }
]

export default routes;