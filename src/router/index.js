import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import Detail from '@/components/detail/Detail'
import Bad from '@/components/bad/Bad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Bad',
      name: 'Bad',
      component: Bad
    }
  ]
})
