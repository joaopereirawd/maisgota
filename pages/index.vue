<template>
  <div>
    <Header />
    <Heroshot />
    <CardBig />
    <OutPrices />
  </div>
</template>
<script>
import CardBig from "@/components/cards/CardBig";
import OutPrices from "@/sections/OutPrices.vue";
export default {
  components: { CardBig, OutPrices },
};
</script>