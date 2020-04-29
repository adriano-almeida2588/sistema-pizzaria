<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list flat>
        <v-list-item link v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        >
          <v-list-item-action>
            <v-icon v-text="item.icon"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Amare Pizzaria e Delivery</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <v-container
        class="fill-height"
        fluid
      >
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
      minvariant: true,
      items: [
        { icon: 'mdi-view-dashboard', name: 'Dashboad', to: '/' },
        { icon: 'mdi-cash-multiple', name: 'Caixa', to: '/caixa' },
        { icon: 'mdi-account-multiple', name: 'Clientes', to: '/clientes' },
        { icon: 'mdi-stocking', name: 'Estoque', to: '/estoques' },
        { icon: 'mdi-food', name: 'Pedidos', to: '/pedidos' },
        { icon: 'mdi-credit-card-outline', name: 'Pagamentos', to: '/pagamentos' },
        // { icon: 'mdi-cart', name: 'Promoções', to: '/promocoes' },
        { icon: 'mdi-file-chart', name: 'Relatórios', to: '/relatorios' },
        { icon: 'mdi-settings', name: 'Configurações', to: '/configuracoes' },
      ]
    }),
  }
</script>