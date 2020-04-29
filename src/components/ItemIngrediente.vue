<template>
   <v-form>
     <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="observacao"
          :error-messages="nameErrors"
          label="Observação"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        >
        </v-text-field>
      </v-col>
     </v-row>
   </v-form>
</template>

<script>
  export default {
    name: 'ItemIngrediente',
    data () {
      return {
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true,
      }
    },
  }
</script>