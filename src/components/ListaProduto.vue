<template>
  <v-container fluid>
    <v-text-field
        v-model="search"
        label="Pesquisar produto"
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    @click:row="rowClick"
    ></v-data-table>
    <v-layout row justify-center>
		<v-dialog v-model="dialog" persistent max-width="800">
		</v-dialog>
	</v-layout>
	<modal-formulario-produto></modal-formulario-produto>
  </v-container>
</template>

<script>
import ModalFormularioProduto from './ModalFormularioProduto'
export default {
    name: "ListaProduto",
    data () {
      return {
        dialog: false,
        search: '',
        headers: [
          {
            text: 'CÓDIGO',
            filterable: true,
            value: 'codigo',
          },
          { text: 'DESCRIÇÃO', value: 'descricao' },
          { text: 'CATEGORIA', value: 'categoria' },
          { text: 'IMAGEM', value: 'imagem' },
          { text: 'VALOR UNITÁRIO (R$)', value: 'valor_unitario' },
        ],
        desserts: [
          {
            codigo: 1,
						descricao: 'PIZZA MUSSARELA',
						categoria: 'MASSAS',
						imagem: '',
						valor_unitario: '20,00'
          },
          {
            codigo: 2,
						descricao: 'PIZZA CALABRESA',
						categoria: 'MASSAS',
						imagem: '',
						valor_unitario: '20,00'
          },
			],
		}
	},
	components:{
		ModalFormularioProduto
	},
	methods:{
		rowClick: function () {      
			this.dialog = true
	},
	fecharDialog(){
		this.dialog = false
	}
	}
}
</script>