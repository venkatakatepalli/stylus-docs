import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Variables from '@/pages/Variables/Variables'
import Selectors from '@/pages/Selectors/Selectors'
import Mixins from '@/pages/mixins/Mixins'
import Functions from '@/pages/Functions/Functions'
import Operators from '@/pages/Operators/Operators'
import Interpolation from '@/pages/Interpolation/Interpolation'
import Keywords from '@/pages/Keywords/Keywords'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/variables',
      name: 'Variables',
      component: Variables
    },
    {
      path: '/selectors',
      name: 'Selectors',
      component: Selectors
    },
    {
      path: '/mixins',
      name: 'Mixins',
      component: Mixins
    },
    {
      path: '/functions',
      name: 'Functions',
      component: Functions
    },
    {
      path: '/operators',
      name: 'Operators',
      component: Operators
    },
    {
      path: '/interpolation',
      name: 'Interpolation',
      component: Interpolation
    },
    {
      path: '/keywords',
      name: 'Keywords',
      component: Keywords
    }
  ]
})
