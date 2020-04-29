<template>
	<v-container fluid>
    <v-form v-model="valid">
      <v-row>
         <v-col
          cols="12"
          md="3"
        >
        <v-select
        outlined
        :items="['Balcão', 'Delivery']"
        label="Tipo venda"
      ></v-select>

        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            outlined
            v-model="telefone"
            label="Telefone"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            outlined
            readonly
            v-model="cliente"
            label="Cliente"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md=3
        >
            <v-autocomplete
              :items="[]"
              outlined
              small-chips
              label="Entregador"
              item-text="name"
              item-value="name"
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>

        </v-col>
      </v-row>
  </v-form>
    <v-row>
      
    <v-col cols="12" md="4">
      
       <v-row dense>
        <v-col cols="12">
          
          <v-card v-show="false"
            color=""
            outlined
          >
            <v-card-title class="title">INFORMAÇÕES DE ENTREGA</v-card-title>

            <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Logradouro</v-list-item-title>
              <v-list-item-subtitle>AV. FLAMENGO - 13</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Bairro</v-list-item-title>
              <v-list-item-subtitle>MESTRE ANTÔNIO</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Ponto Referência</v-list-item-title>
              <v-list-item-subtitle>PRÓXIMO AO SALÃO DE BELEZA CLAUDINHA</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

           <v-list-item two-line>
             <v-list-item-content>
              <v-list-item-title>CEP</v-list-item-title>
              <v-list-item-subtitle>61623-090</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>Complemento</v-list-item-title>
              <v-list-item-subtitle>CASA 13</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Cidade</v-list-item-title>
              <v-list-item-subtitle>CAUCAIA</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>UF</v-list-item-title>
              <v-list-item-subtitle>CE</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Fone</v-list-item-title>
              <v-list-item-subtitle>(85) 99177-6805</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          </v-card>
        </v-col>
          <v-btn
            width="332"
            large
            tile
            style="margin-left: 4px;"
            color="success"
            @click="showDialogPagamento"
          >
            PAGAMENTO (F5)
          </v-btn>

          <v-btn
            width="332"
            large
            style="margin-top: 3px; margin-left: 4px;"
            tile
            dark
            color="danger"
            @click="e1 = 3"
          >
            CANCELAR PEDIDO (F2)
          </v-btn>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        
      </v-row>
    </v-col>
    
     <v-col cols="12" md="8">
          <v-card
          class="mx-auto"
          outlined
        >

         <v-col cols="12" md="12">
  <v-data-table
		v-model="search"
    :headers="headers"
    :items="desserts"
    class="elevation-0"
		:search="search"
    footer-props=""
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-dialog v-model="dialog" max-width="500px">
          <v-card> 
            <v-card-title>
              <span class="headline">EDITAR ITEM</span>
            </v-card-title>

            <v-card-text>
							<v-row>
								<v-col cols="12" sm="6" md="12">
									<v-text-field outlined="" v-model="editedItem.produto" label="Produto"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="12">
									<v-text-field type="number" outlined="" v-model="editedItem.quantidade" label="Quantidade"></v-text-field>
								</v-col>
								<v-col cols="12" sm="6" md="12">
									<v-textarea outlined rows="3" clearable v-model="editedItem.observacao" label="Observação"></v-textarea>
								</v-col>
							</v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark tile @click="close">Fechar</v-btn>
              <v-btn color="primary" tile @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

				<v-dialog v-model="dialogDetalhes" max-width="500px">
          <v-card> 
            <v-card-title>
              <span class="headline">MAIS DETALHES</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-textarea outlined rows="3" readonly v-model="detailItem.observacao" label="Observação"></v-textarea>
                  </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark tile @click="closeDetails">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

       <template v-slot:footer>
        <v-toolbar
          color="grey lighten-4"
          tile=""
          flat
        >
          <v-toolbar-title class="title">SUB-TOTAL: 112,00</v-toolbar-title>
        </v-toolbar>
      </template>

    <template v-slot:item.actions="{ item }">
			<v-icon
        small
        class="mr-2"
        @click="detailsItem(item)"
      >
        mdi-eye
      </v-icon>
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
         
          <!-- <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Complemento</v-list-item-title>
              <v-list-item-subtitle>CASA 123</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>UF</v-list-item-title>
              <v-list-item-subtitle>CE</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Telefone</v-list-item-title>
              <v-list-item-subtitle>(85) 99177-6805</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
        </v-card>
     </v-col>
     
    </v-row>
    
    <v-row>
    <!-- <v-col cols="12" md="6">
     <v-subheader>INFORMAÇÕES DE PAGAMENTO</v-subheader>
     <v-container>
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-row>
    <v-col cols="12" md="4">
      <v-text-field
        outlined
        v-model="telefone"
        :rules="nameRules"
        label="Telefone"
        required
      ></v-text-field>
      </v-col>
      <v-col cols="12" md="8">
      <v-text-field
        readonly
        outlined
        v-model="cliente"
        label="Cliente"
        required
      ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
        outlined
        v-model="select"
        :items="['Balcão','Delivery']"
        :rules="[v => !!v || 'Item is required']"
        label="Tipo venda"
        required
      ></v-select>
      </v-col>
      <v-col cols="12" md="8">
        <v-select
        outlined
        v-model="select"
        :items="['Dinheiro', 'Cartão Crédito', 'Cartão Débito', 'Parcelado']"
        :rules="[v => !!v || 'Item is required']"
        label="Forma pagamento"
        required
      ></v-select>
      </v-col>
      <v-col cols="12" md="4">
      <v-text-field
        outlined
        readonly
        label="Total Geral"
        prefix="R$"
        required
      ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
      <v-text-field
        outlined
        label="Pago"
        prefix="R$"
        required
      ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
      <v-text-field
        outlined
        label="Desconto"
        prefix="R$"
        required
      ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
  </v-container>
  </v-col > -->
   
    </v-row>

    <v-dialog v-model="dialogPagamento" max-width="600">
       <modal-pagamento dialogPagamento=false></modal-pagamento>
    </v-dialog>
 
	</v-container>
</template>

<script>
  import ModalPagamento from './ModalPagamento'
  export default {
		name: 'ListaItemCarrinho',
    data: () => ({
			search: '',
			dialog: false,
      dialogDetalhes: false,
      dialogPagamento: false,
			singleExpand: false,
      headers: [
        { text: 'PRODUTO', value: 'produto' },
        { text: 'QUANTIDADE', value: 'quantidade' },
        { text: 'PREÇO(R$)', value: 'valor_unitario' },
				{ text: 'AÇÕES', value: 'actions' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        produto: '',
				quantidade: 0,
				observacao: '',
      },
      defaultItem: {
        produto: '',
				quantidade: 0,
				observacao: 'Sem azeitonas e pimentão'
			},
			detailItem: {
				observacao: 'Sem azeitonas e pimentão'
			}
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    components: {
      ModalPagamento
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
						codigo: 1,
            produto: 'PIZZA CALABRESA - GRANDE GRANDE',
            quantidade: 1,
            valor_unitario: 26,
          },
           {
						codigo: 1,
            produto: 'PIZZA CALABRESA - GRANDE GRANDE',
            quantidade: 1,
            valor_unitario: 26,
          },
           {
						codigo: 1,
            produto: 'PIZZA CALABRESA - GRANDE GRANDE',
            quantidade: 1,
            valor_unitario: 26,
          },
           {
						codigo: 1,
            produto: 'PIZZA CALABRESA - GRANDE GRANDE',
            quantidade: 1,
            valor_unitario: 26,
          },
          {
						codigo: 5,
            produto: 'PIZZA CALABRESA - GRANDE GRANDE',
            quantidade: 2,
            valor_unitario: 26,
          },
          {
						codigo: 5,
            produto: 'PIZZA CALABRESA - GRANDE GRANDE',
            quantidade: 2,
            valor_unitario: 26,
          }
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
			
			detailsItem (item) {
				this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDetalhes = true
			},

			closeDetails(){
				this.dialogDetalhes = false
      },
      
      showDialogPagamento() {
        this.dialogPagamento = true;
      },

      closeModalPagamento () {
        this.dialogPagamento = false;
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