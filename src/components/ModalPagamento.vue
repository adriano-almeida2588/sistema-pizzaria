<template>
      <v-card>
        <v-card-title>
          <span class="headline">NOVO PAGAMENTO</span>
        </v-card-title>
        <v-card-text>
					<v-form v-model="valid">
						<v-container>
							<v-row>
								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										label="Sub Total"
										prefix="R$"
										readonly
										value="0,00"
									></v-text-field>
								</v-col>

								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										label="Desconto"
										prefix="R$"
										value="0,00"
									></v-text-field>
								</v-col>

								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										label="Total"
										readonly
										prefix="R$"
										value="0,00"
									></v-text-field>
								</v-col>
							</v-row>

							<v-row>
								<v-col
									cols="12"
									md="4"
								>
									<v-select
										outlined
										value="Dinheiro"
										label="Forma pagamento"
										:items="['Dinheiro', 'Crédito', 'Débito']"
									></v-select>
								</v-col>

								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										label="Taxa entrega"
										prefix="R$"
										value="0,00"
									></v-text-field>
								</v-col>

								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										label="Pago"
										prefix="R$"
										value="0,00"
									></v-text-field>
								</v-col>
							</v-row>

									<v-row>
								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										label="Restante"
										prefix="R$"
										readonly
										value="0,00"
									></v-text-field>
								</v-col>

								<v-col
									cols="12"
									md="4"
								>
									<v-text-field
										outlined
										readonly
										label="Troco"
										prefix="R$"
										value="0,00"
									></v-text-field>
								</v-col>
							</v-row>
						</v-container>
					</v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
					<v-btn tile color="primary">Finalizar</v-btn>
          <v-btn tile color="danger" dark @click="fecharDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
  
</template>

<script>
  export default {
		name: 'ModalPagamento',
		props: {
			['dialogPagamento']: Boolean
		},
    data () {
      return {
        
      }
    },
    methods: {
      fecharDialog () {
				console.log(this.dialogPagamento)
        this.dialogPagamento = false
      }
    },
    components: {
    }
  }
</script>