<template>
  <section class="card" id="card">
    <div class="card__header">
      <h2>Portugal</h2>
      <p>Salário Minimo: 665€</p>
    </div>

    <div class="card__content">
      <div v-for="(station, index) of FilteredItems" :key="index">
        <FuelPrice
          :fuel-type="station.TipoCombustivel"
          :fuel-price="station.Preco"
        />
      </div>
    </div>

    <div class="card__footer">
      <p>Última Atualização: {{ this.stations.resultado.DataAtualizacao }}</p>
      <small
        >Dados Recolhidos Automáticamente de
        <a href="https://precoscombustiveis.dgeg.gov.pt/" target="__blank"
          >Direcção-Geral de Energia e Geologia</a
        >
      </small>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      stations: [],
    };
  },
  async fetch() {
    const url =
      "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/GetDadosPostoMapa?id=67762&f=json";

    const petrolStations = await fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    });

    this.stations = petrolStations;
  },
  computed: {
    FilteredItems() {
      return this.stations.resultado.Combustiveis.filter((item, index) => {
        return index === 1 || index === 3 || index === 5;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  padding: 80px 20px;
  margin: 0 auto;

  @apply relative w-full bg-white mb-28;
  width: calc(100% - 40px);
  box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.06);

  @screen md {
    @apply flex-row;
  }

  &__header {
    @apply relative text-center w-full mb-12;

    > h2 {
      @apply text-3xl  font-semibold;
    }

    > p {
      @apply text-gray;
    }
  }

  &__content {
    @apply flex flex-col flex-wrap justify-center items-center h-full space-y-10 mb-20;

    @screen md {
      @apply flex-row space-y-10 space-x-20;
    }
  }

  &__footer {
    margin: 0 auto;
    @apply relative flex w-full text-center justify-center items-center max-w-lg flex-col;
    > p {
      @apply mb-2 text-black;
    }

    small {
      @apply text-gray;
    }

    a {
      @apply underline;
    }
  }
}
</style>