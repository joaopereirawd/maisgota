<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <Logo />
      </div>
      <div class="header__menu">
        <Button />
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "@/components/icons/Logo";
export default {
  components: { Logo },
};
</script>
<style lang="scss" scoped>
.header {
  @apply absolute w-full h-20 pl-5 pr-5 z-20;

  @screen md {
    @apply pt-24;
  }

  &__content {
    @apply flex justify-between items-center h-full rounded max-w-screen-xl;
    margin: 0 auto;
  }

  &__logo {
    @apply relative;
  }
}
</style>