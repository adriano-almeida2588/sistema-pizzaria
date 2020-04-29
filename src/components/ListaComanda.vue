<template>
  <v-container>
    <modal-novo-pedido></modal-novo-pedido>
    <v-text-field
        v-model="search"
        label="Pesquisar pedido"
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    @click:row="showDialog"
    ></v-data-table>
      <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="800">
  <v-card>
    <v-card-title class="headline font-weight-regular blue-grey white--text">Profile</v-card-title>
    <v-card-text>
      <v-subheader class="pa-0">Where do you live?</v-subheader>
      <v-autocomplete
        v-model="model"
        :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
        :items="states"
        :readonly="!isEditing"
        :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
        persistent-hint
        prepend-icon="mdi-city"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition
            mode="out-in"
          >
            <v-icon
              :key="`icon-${isEditing}`"
              :color="isEditing ? 'success' : 'info'"
              @click="isEditing = !isEditing"
              v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
            ></v-icon>
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
    </v-card-text>
  </v-card>
    </v-dialog>
  </v-layout>
  </v-container>
</template>

<script>
  import ModalNovoPedido from './ModalNovoPedido.vue'

  export default {
    name: "ListaComanda",
    data () {
      return {
        dialog: false,
        search: '',
        headers: [
          {
            text: 'CÓDIGO',
            align: 'start',
            filterable: true,
            value: 'codigo',
          },
          { text: 'CLIENTE', value: 'nome_cliente' },
          { text: 'FONE', value: 'fone' },
          { text: 'DATA SOLICITAÇÃO', value: 'data_solicitacao' },
          { text: 'STATUS', value: 'status'},
          { text: 'DATA ENTREGA', value: 'data_entrega'},
          { text: 'DESCONTO (%)', value: 'desconto'},
          { text: 'TOTAL (R$)', value: 'total' },
        ],
        desserts: [
          {
            codigo: 1,
            nome_cliente: 'ADRIANO ALMEIDA',
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            data_entrega: '21/04/2020 18:00',
            desconto: 2,
            total: 100,
          },
            {
            codigo: 2,
            nome_cliente: 'ADRIANO ALMEIDA',
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'PENDENTE',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 3,
            nome_cliente: 'ADRIANO ALMEIDA',
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'ENTREGUE',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 4,
            nome_cliente: 'ADRIANO ALMEIDA',
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 5,
            fone: '(85) 99177-6805',
            nome_cliente: 'ADRIANO ALMEIDA',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 1,
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 1,
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 1,
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 1,
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
            {
            codigo: 1,
            fone: '(85) 99177-6805',
            data_solicitacao: '21/04/2020 17:52',
            status: 'EM TRÂNSITO',
            qnt_itens: 4,
            total: 100,
          },
        ],
      }
    },
    components: {
      ModalNovoPedido,
    },
   methods:{
      rowClick: function (item) {      
      alert("Clicou: " + item.nome_cliente)
    },
    showDialog(){
    this.dialog = true
    }
   }
  }
</script>