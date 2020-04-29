<template>
  <v-container fluid>
    <v-text-field
        v-model="search"
        label="Pesquisar cliente"
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
	<modal-formulario-cliente></modal-formulario-cliente>


  </v-container>
</template>

<script>
import ModalFormularioCliente from './ModalFormularioCliente'
export default {
    name: "ListaCliente",
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
					{ text: 'NOME', value: 'nome_cliente' },
					{ text: 'SOBRENOME', value: 'sobrenome_cliente' },
					{ text: 'FONE', value: 'fone' },
          { text: 'CEP', value: 'cep' },
          { text: 'LOGRADOURO', value: 'logradouro' },
          { text: 'N°', value: 'numero'},
					{ text: 'BAIRRO', value: 'bairro' },
					{ text: 'CIDADE', value: 'cidade' },
          { text: 'UF', value: 'uf' },

        ],
        desserts: [
          {
            codigo: 1,
						nome_cliente: 'ADRIANO',
						sobrenome_cliente: 'ALMEIDA',
						fone: '(85) 99177-6805',
						cep: '61623-090',
						logradouro: 'AV FLAMENGO',
						numero: 13,
						bairro: 'MESTRE ANTÔNIO',
						cidade: 'CAUCAIA',
            uf: 'CE'
          },
          {
            codigo: 2,
						nome_cliente: 'DAMIRES',
						sobrenome_cliente: 'MARTINS',
						fone: '(85) 99177-6805',
						cep: '61623-090',
						logradouro: 'AV FLAMENGO',
						numero: 13,
						bairro: 'MESTRE ANTÔNIO',
						cidade: 'CAUCAIA',
            uf: 'CE'
					}
			],
		}
	},
	components:{
		ModalFormularioCliente
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