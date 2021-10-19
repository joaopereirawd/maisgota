<template>
  <div class="fuel-price">
    <div class="fuel-price__content">
      <div class="fuel-price__icon">
        <GasStation width="104" height="104" />
      </div>

      <div class="fuel-price__text">
        <p class="fuel-price__name">{{ FuelType }}</p>
        <p class="fuel-price__price">{{ FuelPrice }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import GasStation from "@/components/icons/GasStation";
export default {
  components: { GasStation },
  props: {
    FuelType: {
      type: String,
      required: true,
    },
    FuelPrice: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.fuel-price {
  &__content {
    @apply flex flex-row flex-wrap items-center;
  }

  &__icon {
    @apply mr-7;

    ::v-deep svg {
      height: 71px;
      width: auto;

      @screen md {
        height: auto;
        width: auto;
      }
    }
  }

  &__text {
    > small {
      @apply text-gray;
    }
  }
  &__name {
    @apply text-sm font-medium;

    @screen md {
      @apply text-lg font-medium;
    }
  }

  &__price {
    @apply text-5xl font-bold;
    @screen md {
      @apply text-5xl font-bold;
    }
  }

  &__bubble {
    @apply bg-white;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
  }
}
</style>