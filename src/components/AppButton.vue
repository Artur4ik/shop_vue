<template>
  <div @click="$emit('clicked')" class="btn btn-primary">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    title: String
  },
  emits: ['clicked']
}
</script>

<style scoped>
.button {
  width: 100px;
  height: 40px;
  background-color: green;
  padding: 0 20px;
  text-align: center;
  line-height: 40px;
  color: white;
  text-shadow: 1px 1px 1px black;
  transition: 300ms;
  cursor: pointer;
}
.button:hover {
  transition: 300ms;
  background-color: rgb(0, 192, 0);
}
</style>
