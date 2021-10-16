<template>
  <div class="fuel-price">
    <div class="fuel-price__content">
      <div class="fuel-price__icon">
        <GasStation width="50" height="50" />
      </div>

      <div class="fuel-price__text">
        <small>{{ fuelType }}</small>
        <p>{{ fuelPrice }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import GasStation from "@/components/icons/GasStation";
export default {
  components: { GasStation },
  props: {
    fuelType: {
      type: String,
      required: true,
    },
    fuelPrice: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.fuel-price {
  &:not(:last-child) {
    @apply mb-7;
  }

  &__content {
    @apply flex flex-row;
  }

  &__icon {
    @apply mr-7;
  }

  &__text {
    > small {
      @apply text-lg font-medium;
    }
    > p {
      @apply text-3xl font-bold;
    }
  }
}
</style>