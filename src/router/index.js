import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AnswerPage from '@/views/AnswerPage.vue'

Vue.use(VueRouter)

const routes = [
{
  path: `/`,
  component: HomePage
},

{
  path: `/answer`,
  component: AnswerPage
}
]

const router = new VueRouter({
  routes
})

export default router
