import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InProgressView from '../views/InProgressView.vue'
import ReviewView from '../views/ReviewView.vue'
import BookingView from '../views/BookingView.vue'
import ReservationsView from '../views/ReservationsView.vue'
import ReservationView from '../views/ReservationView.vue'
import TableView from '../views/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/in-progress',
    name: 'in-progress',
    component: InProgressView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewView
  },
  {
    path: '/booking',
    name: 'booking',
    component: BookingView
  },
  ,
  {
    path: '/booking/:id',
    name: 'table',
    component: TableView
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: ReservationsView
  },
  {
    path: '/reservations/new',
    name: 'create-reservation',
    component: ReservationView
  },
  {
    path: '/reservations/:id',
    name: 'reservation',
    component: InProgressView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
