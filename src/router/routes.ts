import GuestLayoutRoute from './layouts/guest-layout-route'
import AuthenticationLayoutRoute from './layouts/authentication-layout-route'
// import DashboardLayoutRoute from './layouts/dashboard-layout-route'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'page not found',
        component: () => import('@/views/404.vue')
    },
    GuestLayoutRoute,
    AuthenticationLayoutRoute,
    // DashboardLayoutRoute
]

export default routes
