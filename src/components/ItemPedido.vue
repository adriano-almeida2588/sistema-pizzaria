<template>

<v-container>
    <v-dialog v-model="dialog" persistent max-width="400px">
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
      <modal-configuracao-pizza></modal-configuracao-pizza>
    </v-dialog>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="title " style="color: gray;">PIZZA MUSSARELA</div>
        <v-list-item-title class="title">R$ 25,00</v-list-item-title>
        <v-list-item-subtitle >Molho, queijo mussarela, tomate, cebola, azeitona e oregano</v-list-item-subtitle>
      </v-list-item-content>

     <v-col cols="auto">
          <v-img
            height="50"
            width="50"
            color="white"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvVg2gPbz6iwUNzlTu1XWdML7ELbkobfLhh_RcQl6BWytrSJ4m&usqp=CAU"
          ></v-img>
        </v-col>
      
    </v-list-item>

    <v-card-actions>
      <v-btn @click="showDialog" text tile color="primary">
        <v-icon>mdi-cart</v-icon>
        Adicionar
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
  import ModalConfiguracaoPizza from './ModalConfiguracaoPizza'
  export default {
    data () {
      return {
        dialog: false,
        e1: 1,
      }
    },
    methods: {
      showDialog () {
        this.dialog = true;
      },
      fecharDialog () {
        this.dialog = false
      }
    },
    components: {
      ModalConfiguracaoPizza
    }
  }
</script>