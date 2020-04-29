<template>
  <v-container fluid>
    <v-card>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "ListaPedido",
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'CÓDIGO',
            align: 'start',
            filterable: true,
            value: 'codigo',
          },
          { text: 'DESCRIÇÃO', value: 'descricao' },
          { text: 'QUANTIDADE', value: 'quantidade' },
          { text: 'VALOR UNITÁRIO', value: 'valor_unitario' }
        ],
        desserts: [
          {
            codigo: 1,
            descricao: 'PIZZA CALABRESA',
            quantidade: 1,
            valor_unitario: 24
          },
          {
            codigo: 2,
            descricao: 'PIZZA CATUPYRI',
            quantidade: 1,
            valor_unitario: 25
          },
           {
            codigo: 3,
            descricao: 'PIZZA 4 QUEIJOS',
            quantidade: 1,
            valor_unitario: 26
          },
        ],
      }
    },
  }
</script>