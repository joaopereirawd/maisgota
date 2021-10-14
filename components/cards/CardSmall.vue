<template>
  <div class="card">
    <div class="card__content">
      <h2 class="card__title">{{ cardTitle }}</h2>
      <p>
        Salário Minimo: {{ cardSalary }}</p>

        <FuelPriceStatic fuel-type="Gasóleo especial" fuel-price="1,799 €" />
        <FuelPriceStatic
          fuel-type="Gasolina especial 95"
          fuel-price="1,939 €"
        />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    cardSalary: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  @apply relative inline-block bg-white p-12 rounded-lg;
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.06);

  &__content {
    @apply flex flex-col;

    > h2 {
      @apply text-lg font-semibold text-center;
    }

    > p {
      @apply text-gray mb-8 text-center;
    }
  }
}
</style>