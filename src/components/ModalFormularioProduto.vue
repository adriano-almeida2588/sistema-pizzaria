<template>
  <v-row class="container-fluid">
    <v-dialog v-model="dialog" persistent max-width="800px">
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
          <span class="headline">NOVO PRODUTO</span>
        </v-card-title>
        <v-card-text>
          <v-form lazy-validation>
            <div>
              <v-card>
                <v-tabs
                    v-model="tab"
                    grow="true"
                  >
                  <v-tab>
                    INFORMAÇÕES DO PRODUTO
                  </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          outlined
                          v-model="descricao"
                          :rules=descricaoRules
                          label="Descrição"
                          required
                          @input="$v.descricao.$touch()"
                          @blur="$v.descricao.$touch()"
                        ></v-text-field>
                      </v-col>
                     
                      <v-col cols="12" md="3">
                        <v-text-field
                          outlined
                          v-model="valor_unitario"
                          label="Valor Unitário"
                          :rules="valorUnitarioRules"
                          required
                          @input="$v.valor_unitario.$touch()"
                          @blur="$v.valor_unitario.$touch()"
                        ></v-text-field>
                      </v-col>
											<v-col cols="12" md="3">
                        <v-text-field
                          outlined
                          v-model="quantidade"
                          label="Quantidade"
                          :rules="quantidadeRules"
                          required
                          @input="$v.quantidade.$touch()"
                          @blur="$v.quantidade.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-autocomplete
                        v-model="friends"
                        :disabled="isUpdating"
                        :items="people"
                        :rules="categoriaRules"
                        outlined
                        chips
                        small-chips
                        label="Categoria"
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
                    
                       <v-col cols="12" md="6">
                        <v-file-input small-chips label="Imagem"
                          outlined
                          v-model="imagem"
                        ></v-file-input>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn tile color="danger" dark @click="dialog = false">fechar</v-btn>
          <v-btn class="ma-2" tile color="primary" dark @click="dialog = false">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'ModalFormularioProduto',
    data: () => ({
      tab: null,
      dialog: false,
      valid: true,
      descricao: '',
      nome: '',
      quantidade: 0,
      valor_unitario: 0.0,
      descricaoRules: [
        v => !!v || 'Descrição é obrigatório'
      ],
      valorUnitarioRules: [
        v => !!v || 'Valor unitário é obrigatório'
      ],
      categoriaRules: [
          v => !!v || 'Categoria é obrigatório'
      ],
      quantidadeRules: [
          v => !!v || 'Quantidade é obrigatório'
      ]
    }),

    methods: {
      submit () {
        this.$v.$touch()
      },
      showDialog () {
        this.dialog = true;
      },
      fecharDialog(){
        this.dialog = false
      }
    }
  }
</script>