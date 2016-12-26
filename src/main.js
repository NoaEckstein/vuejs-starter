import style from './style.scss';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import Home from './components/home';
import About from './components/about';
import Emails from './components/emails/email-main/email-main';
import MainNav from './components/main-nav';
import Compose from './components/emails/email-compose/email-compose'
import Events from './components/events/event-center';
import EventDetails from './components/events/event-details';




Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = 'http://localhost:3003';

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  component: About
}, {
   path: '/event', 
   component: Events
}, {
  path: '/event/:id', 
  component: EventDetails
}, {
  path: '/emails',
  component: Emails
}, {
  path: '/emails/compose',
  component: Compose
},
];

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav
  }
}).$mount('#app')