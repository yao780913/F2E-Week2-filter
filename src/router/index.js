import Vue from 'vue'
import Router from 'vue-router'
// import LeftFilter from '../components/filter.vue'
// import Tags from '../components/tags'
import List from '../components/list'
// import Content from '../components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
