<template>
  <section class="card">
    <div class="card__header">
      <h2>Portugal</h2>
      <p>Salário Minimo: 665€</p>
    </div>

    <div class="card__content">
      <FuelPrice :fuel-type="2105" />
      <FuelPrice :fuel-type="3205" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.card {
  padding: 20px;
  margin: 0 auto;

  @apply relative w-full h-96 bg-white mb-20;
  width: calc(100% - 40px);
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.06);

  @screen md {
    @apply flex-row;
  }

  &__header {
    @apply absolute text-center w-full;

    > h2 {
      @apply text-lg font-semibold;
    }

    > p {
      @apply text-gray mb-8;
    }
  }

  &__content {
    @apply flex flex-col justify-center items-center h-full space-y-10;

    @screen md {
      @apply flex-row space-y-0 space-x-20;
    }
  }
}
</style>