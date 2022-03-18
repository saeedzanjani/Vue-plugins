import Marketing from "../pages/Marketing";
import Finance from "../pages/Finance";
import Personnel from "../pages/Personnel";

export const routes = [
    {
        path: '/',
        component: Marketing
    },
    {
        path: '/finance',
        component: Finance
    },
    {
        path: '/personnel',
        component: Personnel
    },
]
