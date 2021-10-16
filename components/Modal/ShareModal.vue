<template>
  <div class="modal">
    <div class="modal__backdrop"></div>
    <div class="modal__content">
      <div class="modal__dialog">
        <div class="modal__close" @click="$nuxt.$emit('toggle-modal')">
          <img src="~/assets/ic-close.svg" alt="" />
        </div>

        <p class="modal__title">Exige Mais Gota!</p>

        <FbButton />
        <TwButton />
        <InButton />
        <WaButton />
      </div>
    </div>
  </div>
</template>
<script>
import FbButton from "@/components/buttons/FbButton";
import TwButton from "@/components/buttons/TwButton";
import InButton from "@/components/buttons/InButton";
import WaButton from "@/components/buttons/WaButton";
export default {
  components: { FbButton, TwButton, InButton, WaButton },
};
</script>
<style lang="scss" scoped>
.modal {
  @apply fixed top-0 left-0 w-full h-full z-50;

  &__close {
    @apply absolute top-2 right-2 w-10 h-10 rounded-full cursor-pointer;
  }

  &__backdrop {
    @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10;
  }

  &__content {
    @apply relative z-20 h-full w-full;
  }

  &__dialog {
    @apply absolute bg-white rounded-md p-10 text-center;
    width: 600px;
    min-height: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__title {
    @apply font-bold text-3xl mb-14;
  }
}
</style>