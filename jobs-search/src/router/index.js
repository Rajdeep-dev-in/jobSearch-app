import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '@/views/Jobs.vue'
import AddJobs from '@/views/AddJobs.vue'
import NotFound from '@/views/NotFound.vue'
import DetailsJob from '@/views/DetailsJob.vue'
import EditView from '@/views/EditView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Jobs
    },
    {
      path: '/add-jobs',
      name: 'AddJobs',
      component: AddJobs
    },
    {
      path: '/jobs/:id',
      name:'job',
      component: DetailsJob
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit',
      component: EditView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
