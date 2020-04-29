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
          <span class="headline">NOVO CLIENTE</span>
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
                    DADOS PESSOAIS
                  </v-tab>
                  <v-tab>
                    ENDEREÇO
                  </v-tab>
                    <v-tab>
                    CONTATOS
                  </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          outlined
                          v-model="cpf"
                          :rules="cpfRules"
                          :error-messages="cpfErrors"
                          label="CPF"
                          required
                          @input="$v.cpf.$touch()"
                          @blur="$v.cpf.$touch()"
                        ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                        <v-text-field
                          outlined
                          v-model="nome"
                          :error-messages="nomeErrors"
                          label="Nome"
                          required
                          @input="$v.nome.$touch()"
                          @blur="$v.nome.$touch()"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                          outlined
                          v-model="sobrenome"
                          :error-messages="emailErrors"
                          label="Sobrenome"
                          required
                          @input="$v.email.$touch()"
                          @blur="$v.email.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>

                <v-tab-item>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-text-field
                          outlined
                          v-model="cep"
                          :error-messages="nameErrors"
                          label="CEP"
                          required
                          @input="$v.name.$touch()"
                          @blur="$v.name.$touch()"
                        >
                        </v-text-field>
                      </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        outlined
                        v-model="logradouro"
                        :error-messages="nameErrors"
                        label="LOGRADOURO"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        v-model="numero"
                        :error-messages="emailErrors"
                        label="N°"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        outlined
                        v-model="bairro"
                        :error-messages="nameErrors"
                        label="BAIRRO"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-text-field
                        outlined
                        v-model="ponto_referencia"
                        :error-messages="nameErrors"
                        label="PONTO DE REFERÊNCIA"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        outlined
                        v-model="cidade"
                        :error-messages="nameErrors"
                        label="CIDADE"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        outlined
                        v-model="logradouro"
                        :error-messages="nameErrors"
                        label="COMPLEMENTO"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-text-field
                        outlined
                        v-model="uf"
                        :error-messages="nameErrors"
                        label="UF"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                    </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>
                <v-tab-item>
                  <v-card-text>
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-text-field
                            outlined
                            v-model="fone"
                            :error-messages="nameErrors"
                            label="FONE 1"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                          ></v-text-field>
                        </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          outlined
                          v-model="fone"
                          :error-messages="nameErrors"
                          label="FONE 2"
                          required
                          @input="$v.name.$touch()"
                          @blur="$v.name.$touch()"
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                      <v-text-field
                        outlined
                        v-model="email"
                        :error-messages="nameErrors"
                        label="EMAIL"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
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
    name: 'ModalFormularioCliente',
    data: () => ({
      tab: null,
      dialog: false,
      valid: true,
      cpf: '',
      nome: '',
      cpfRules: [
        v => !!v || 'CPF é obrigatório'
      ],
      nomeRules: [
        v => !!v || 'Nome é obrigatório'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email é obrigatório',
        v => /.+@.+/.test(v) || 'Email inválido',
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