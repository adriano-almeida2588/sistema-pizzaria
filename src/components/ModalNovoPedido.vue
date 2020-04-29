
<template>
    <div>
    <v-dialog v-model="dialog" persistent max-width="1180px">
      <template v-slot:activator="{ on }">
        <v-btn
        fab
        dark
        float
        bottom
        right
        fixed
        color="primary"
        v-on="on"
        @click="showDialog"
        >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      </template>
      
      <v-card>
        
        <v-card-title>
          <span class="headline">NOVO PEDIDO</span>
        </v-card-title>
        <v-card-text>
          <v-form lazy-validation>
            <div>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">CARDÁPIO</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2">PAGAMENTO</v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-autocomplete
                        v-model="products"
                        :items="product"
                        outlined
                        small-chips
                        label="BUSCAR"
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
                            </v-list-item-content>
                          </template>
                        </template>
                      </v-autocomplete>
                      <v-row>
                      <v-col cols="12" md="4">
                        <item-pedido></item-pedido>
                      </v-col>
                      <v-col cols="12" md="4">
                        <item-pedido></item-pedido>
                      </v-col>
                      <v-col cols="12" md="4">
                        <item-pedido></item-pedido>
                      </v-col>
                      <v-col cols="12" md="4">
                        <item-pedido></item-pedido>
                      </v-col>
                      <v-col cols="12" md="4">
                        <item-pedido></item-pedido>
                      </v-col>
                      <v-col cols="12" md="4">
                        <item-pedido></item-pedido>
                      </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                  <v-btn
                    color="primary"
                    @click="e1 = 2"
                  >
                    Continuar
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <lista-item-carrinho></lista-item-carrinho>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn tile color="danger" dark @click="dialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>

</template>

<script>
  import ItemPedido from './ItemPedido'
  import ListaItemCarrinho from './ListaItemCarrinho'
  export default {
    data () {
      return {
        dialog: false,
        dialogPagamento: false,
        e1: 1,
      }
    },
    methods: {
      showDialog () {
        this.dialog = true;
      },
      showDialogPagamento () {
        this.dialogPagamento = true;
      }
    },
    components: {
      ItemPedido,
      ListaItemCarrinho
    }
  }
</script>