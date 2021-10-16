<template>
  <a @click="$nuxt.$emit('toggle-modal')" class="btn"> Exige Mais Gota </a>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.btn {
  @apply bg-black hover:bg-red text-white font-bold py-3 px-7 rounded-md uppercase cursor-pointer;
}
</style>