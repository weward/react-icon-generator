import Icon from '../pages/icon/index'
import About from '../pages/static/about'
import Business from '../pages/static/business'

// https://reactrouter.com/web/example/route-config
const routes = [
    {
        path: "/",
        component: Icon,
        exact: true
    },
    {
        path: "/edit-image",
        component: Icon,
        exact: false
    },
    {
        path: "/about",
        component: About,
        exact: false
    },
    {
        path: "/business",
        component: Business,
        exact: false
    },
]

export default routes