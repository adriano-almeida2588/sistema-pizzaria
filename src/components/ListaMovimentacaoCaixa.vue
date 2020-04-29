<template>
	<v-container fluid>
	<v-row>
		<v-col cols="12" md="3">
			<v-card
				color="#385F73"
				outlined
				dark
				shaped
				min-height="209"
			>
			<v-card-title class="headline">STATUS CAIXA</v-card-title>

			<v-text class="display-1 d-flex justify-center mb-2">ABERTO</v-text>
			
			</v-card>
		</v-col>

		<v-col cols="12" md="3">
			<v-card
				color="success"
				dark
				shaped
				min-height="209"
			>
			<v-card-title class="headline">ENTRADAS</v-card-title>

				<v-list-item two-line>
					<v-list-item-content>
						<v-list-item-title>Dinheiro</v-list-item-title>
						<v-list-item-subtitle>R$ 26,00</v-list-item-subtitle>
					</v-list-item-content>
					<v-list-item-content>
						<v-list-item-title>Cartão - Débito</v-list-item-title>
						<v-list-item-subtitle>R$ 46,00</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

					<v-list-item two-line>
					<v-list-item-content>
						<v-list-item-title>Cartão - Crédito</v-list-item-title>
						<v-list-item-subtitle>R$ 50,00</v-list-item-subtitle>
					</v-list-item-content>

						<v-list-item-content>
						<v-list-item-title>Total</v-list-item-title>
						<v-list-item-subtitle>R$ 122,00</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
            
      </v-card>
		</v-col>

			<v-col cols="12" md="3">
			<v-card
				color="red"
				dark
				shaped
				min-height="209"
			>
			<v-card-title class="headline">SAÍDAS</v-card-title>

			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Dinheiro</v-list-item-title>
					<v-list-item-subtitle>R$ 20,00</v-list-item-subtitle>
				</v-list-item-content>
					<v-list-item-content>
					<v-list-item-title>Total</v-list-item-title>
					<v-list-item-subtitle class="subtitle-2">R$ 20,00</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		
      </v-card>
		</v-col>

			<v-col cols="12" md="3">
			<v-card
					color="primary"
					dark
					shaped
					min-height="209"
				>
				<v-card-title class="headline">SALDO FINAL</v-card-title>

				<v-list-item two-line>
						<v-list-item-content>
							<v-list-item-subtitle class="display-3">102,00</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
          </v-card>
		</v-col>

		<v-col cols="12" md="9">
			<v-data-table
				:headers="headers"
				:items="desserts"
				sort-by="calories"
				class="elevation-1"
			>
				<template v-slot:top>
					<v-toolbar flat color="white">
						<v-dialog v-model="dialog" max-width="500px">
							<template v-slot:activator="{ on }">
								<v-btn tile color="primary" dark class="mb-2" v-on="on">Nova Movimentação</v-btn>
							</template>
							<v-card>
								<v-card-title>
									<span class="headline">{{ formTitle }}</span>
								</v-card-title>

								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12" sm="6" md="6">
												<v-text-field outlined v-model="editedItem.descricao" label="Descrição"></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="6">
												<v-text-field prefix="R$" outlined v-model="editedItem.entrada" label="Entrada"></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="6">
												<v-text-field prefix="R$" outlined v-model="editedItem.saida" label="Saída"></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="6">
												<v-select outlined :items="['Dinheiro']" v-model="editedItem.forma_pagamento" label="Forma Pagamento"></v-select>
											</v-col>
											<v-col cols="12" sm="6" md="12">
												<v-textarea outlined rows="3" v-model="editedItem.observacao" label="Observação"></v-textarea>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn tile dark @click="close">Fechar</v-btn>
									<v-btn tile color="primary" @click="save">Salvar</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-toolbar>
				</template>
				<template v-slot:item.actions="{ item }">
					<v-icon
						small
						class="mr-2"
						@click="editItem(item)"
					>
						mdi-pencil
					</v-icon>
					<v-icon
						small
						@click="deleteItem(item)"
					>
						mdi-delete
					</v-icon>
				</template>
				<template v-slot:no-data>
					<v-btn color="primary" @click="initialize">Reset</v-btn>
				</template>
			</v-data-table>
		</v-col>

		<v-col cols="12" md="3">
			<card-resumo-caixa></card-resumo-caixa>
		</v-col>
	</v-row>
	</v-container>
</template>

<script>
	import CardResumoCaixa from './CardResumoCaixa'
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Data Movimentação',
          align: 'start',
          sortable: false,
          value: 'data_movimentacao',
        },
        { text: 'Descrição', value: 'descricao' },
        { text: 'Entrada', value: 'entrada' },
        { text: 'Saída', value: 'saida' },
				{ text: 'Forma Pagamento', value: 'forma_pagamento' },
				{ text: 'Observação', value: 'observacao' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
				data_movimentacao: new Date().toLocaleString(),
				descricao: '',
				entrada: 0,
				saida: 0,
				forma_pagamento: '',
				observacao: '',
      },
      defaultItem: {
        data_movimentacao: '',
				descricao: '',
				entrada: 0,
				saida: 0,
				forma_pagamento: '',
				observacao: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nova Movimentação' : 'Editar Movimentação'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
		},
		
		components: {
			CardResumoCaixa,
		},

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>