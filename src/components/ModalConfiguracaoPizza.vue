<template>
      <v-card>
        <v-card-title>
          <span class="headline">CONFIGURAÇÃO PIZZA</span>
        </v-card-title>
        <v-card-text>
          <v-form lazy-validation>
           <v-col>
						<v-row>
						<v-select
							outlined
							:items="['Pequena', 'Média', 'Grande']"
							label="Tamanho"
						></v-select>
						</v-row>
						<v-row>
							<v-textarea
								outlined
								rows="3"
								label="Observação"
							></v-textarea>
						</v-row>
           </v-col>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn tile color="danger" dark @click="fecharDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
  
</template>

<script>
  export default {
    data () {
      return {
        dialog1: false,
        e1: 1,
      }
    },
    methods: {
      showDialog () {
        this.dialog1 = true;
      },
      fecharDialog () {
        this.dialog1 = false
      }
    },
    components: {
    }
  }
</script>