<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: "AppLoadingIcon"
}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px solid green;
  border-color: green transparent green transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
