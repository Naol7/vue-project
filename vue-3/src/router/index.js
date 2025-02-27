import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import JobsView from "../views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue"
import JobView from "@/views/JobView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: JobsView,
        },
        {
          path: '/jobs/:id',
          name: 'job',
          component: JobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ]
});

export default router;