import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      component: r => require.ensure([], () => r(require('@/components/home')), 'home')
    }, {
      path: '/item',
      component: r => require.ensure([], () => r(require('@/components/item')), 'item')
    }, {
      path: '/score',
      component: r => require.ensure([], () => r(require('@/components/score')), 'score')
    }]
  }]
})
