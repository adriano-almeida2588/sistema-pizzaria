<template>                   
	<v-card
		color=""
		outlined
	>
		<v-card-title class="title">DETALHES DO CAIXA</v-card-title>
		<v-card-text>
			<v-form>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
						outlined     
						readonly
            label="Saldo Inicial"
						prefix="R$"
						value="0,00"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-textarea
						rows="3"
						outlined
            label="Observação"
            required
          ></v-textarea>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
						outlined   
						readonly  
            label="Data Abertura"
						value="28/04/2020 18:27"
          ></v-text-field>
        </v-col>

			<v-col
				cols="12"
				md="12"
			>
				<v-btn
				color="success"
				block
				tile
				>Abrir Caixa</v-btn>
				<v-btn
				tile
				color=""
				dark
				block
				class="mt-1"
				>Fechar Caixa</v-btn>
			</v-col>
      </v-row>
  </v-form>
		</v-card-text>
	</v-card>         
</template>

<script lang="ts">
export default {
		name: 'CardResumoCaixa',
    data: () => {
      
    }
}
</script>