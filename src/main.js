import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => '<template><h1>Teste</h1></template>'
    },
    {
      path: '/caixa',
      name: 'caixas',
      component: () => import('./components/ListaMovimentacaoCaixa.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('./components/ListaCliente.vue')
    },
    {
      path: '/estoque',
      name: 'estoque',
      component: () => ''
    },
    {
      path: '/pagamentos',
      name: 'pagamentos',
      component: () => ''
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('./components/ListaComanda.vue')
    },
    {
      path: '/estoques',
      name: 'estoques',
      component: () => import('./components/ListaProduto.vue')
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: () => '<h1>Relatórios</h1>'
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
