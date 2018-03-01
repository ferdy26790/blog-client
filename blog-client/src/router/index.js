import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Content from '@/components/welcomepage/Content'
import FormRegister from '@/components/welcomepage/FormRegister'
import FormLogin from '@/components/welcomepage/FormLogin'
import HomePage from '@/pages/HomePage'
import TimeLine from '@/components/homepage/TimeLine'
import DetailTimeline from '@/components/homepage/DetailTimeline'
import AdminPage from '@/pages/AdminPage'
import PanelArticle from '@/components/adminpage/PanelArticle'
import PanelEditArticle from '@/components/adminpage/PanelEditArticle'
import PanelAddArticle from '@/components/adminpage/PanelAddArticle'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '',
          name: 'Content',
          component: Content
        },
        {
          path: 'register',
          name: 'Register',
          component: FormRegister
        },
        {
          path: 'login',
          name: 'Login',
          component: FormLogin
        }
      ]
    },
    {
      path: '/admin',
      component: AdminPage,
      children: [
        {
          path: '',
          name: 'PanelArticle',
          component: PanelArticle
        },
        {
          path: 'addArticle',
          name: 'PanelAddArticle',
          component: PanelAddArticle
        },
        {
          path: 'article/:id',
          name: 'PanelEditArticle',
          component: PanelEditArticle,
          props: true
        }
      ]
    },
    {
      path: '/home',
      // name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'TimeLine',
          component: TimeLine
        },
        {
          path: 'detail/:id',
          name: 'DetailTimeline',
          component: DetailTimeline,
          props: true
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Content' || to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/')
    }
  }
})

export default router
