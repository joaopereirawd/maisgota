<template>
  <section class="card">
    <div class="card__content">
      <FuelPrice :fuel-type="2105" />
      <FuelPrice :fuel-type="3205" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.card {
  margin: 0 auto;

  @apply relative w-full h-96 bg-white mb-20;
  width: calc(100% - 100px);
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.06);

  &__content {
    @apply flex flex-row justify-center items-center h-full;
  }
}
</style>