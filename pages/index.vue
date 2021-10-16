<template>
  <div>
    <Header />
    <Heroshot />
    <CardBig />
    <OutPrices />
    <Footer />
    <ShareModal v-show="showModal" />
  </div>
</template>
<script>
import CardBig from "@/components/cards/CardBig";
import OutPrices from "@/sections/OutPrices.vue";
import ShareModal from "../components/Modal/ShareModal";
export default {
  components: { CardBig, OutPrices, ShareModal },
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    this.$nuxt.$on("toggle-modal", () => {
      this.showModal = !this.showModal;

      if (this.showModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.no-scroll {
  overflow: hidden;
}
</style>
