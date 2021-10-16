<template>
  <section class="out-prices">
    <CardSmall card-title="Espanha" card-salary="650€" />
    <CardSmall card-title="Luxemburgo" card-salary="2650€" />
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