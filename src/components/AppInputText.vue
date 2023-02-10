<template>
  <input @input="$emit('changed', this.value)" class="input" :type="type" v-model="value" >
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  },
  name: 'AppInputText',
  emits: ['changed'],
  props: {
    type: String
  }
}
</script>

<style scoped>
.input {
  font-size: 16px;
}
</style>
