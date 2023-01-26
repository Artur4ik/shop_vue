<template>
  <div class="header-button">
    {{ title }}
  </div>
</template>

<script>

export default {
  name: 'TheHeaderButton',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header-button {
  background-color: rgb(0, 0, 0);
  padding: 0 20px;
  text-align: center;
  line-height: 60px;
  color: white;
  text-shadow: 1px 1px 1px black;
  transition: 300ms;
  cursor: pointer;
}
.header-button:hover {
  transition: 300ms;
  background-color: rgb(70, 70, 70);
}
</style>
