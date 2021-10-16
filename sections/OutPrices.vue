<template>
  <section class="out-prices">
    <CardSmall
      card-title="Espanha"
      card-salary="1 050,00 €"
      card-gasoline="1,367 €"
      card-diesel="1,269 €"
    />
    <CardSmall
      card-title="Luxemburgo"
      card-salary="2 141,99 €"
      card-gasoline="1.460 €"
      card-diesel="1.376 €"
    />
  </section>
</template>
<script>
import CardSmall from "@/components/cards/CardSmall";

export default {
  components: { CardSmall },
};
</script>
<style lang="scss" scoped>
.out-prices {
  @apply flex justify-center flex-col space-y-10;
  padding: 0 20px;

  @screen md {
    @apply flex-row space-y-0 space-x-10;
  }
}
</style>