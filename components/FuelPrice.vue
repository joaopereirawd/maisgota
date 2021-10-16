<template>
  <div class="fuel-price">
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching Petrol Stores</p>
    <div
      else
      class="fuel-price__content"
      v-for="(station, index) in stations.resultado"
      :key="index"
    >
      <div class="fuel-price__icon">
        <GasStation width="104" height="104" />
      </div>

      <div class="fuel-price__text">
        <small>{{ station.Combustivel }}</small>
        <p>{{ station.Preco }}</p>
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
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      stations: [],
    };
  },
  async fetch() {
    const url = `https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos?idsTiposComb=${this.FuelType}&idDistrito=1&idsMunicipios=&qtdPorPagina=1&pagina=1&orderDesc=1`;
    const petrolStations = await fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    });

    this.stations = petrolStations;
  },
};
</script>
<style lang="scss" scoped>
.fuel-price {
  &__content {
    @apply flex flex-row;
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
      @apply text-sm font-medium;

      @screen md {
        @apply text-lg font-medium;
      }
    }
    > p {
      @apply text-5xl font-bold;
      @screen md {
        @apply text-7xl font-bold;
      }
    }
  }
}
</style>