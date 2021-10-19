<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo">
        <Logo />
      </div>
      <div class="footer__button">
        <Button />
      </div>
      <small>Web site em atualização.</small></br>

      <nav class="footer__menu">
        <p>
          Podes contribuir aqui:
          <a href="https://github.com/joaopereirawd/maisgota" target="__blank"
            >Github</a
          >
        </p>
      </nav>
    </div>
  </footer>
</template>
<script>
import Logo from "@/components/icons/LogoFooter";
export default {
  components: { Logo },
};
</script>
<style lang="scss" scoped>
.footer {
  @apply relative w-full pt-24 pb-24;

  &__content {
    @apply flex flex-col  justify-center items-center;
  }

  &__logo {
    @apply mb-12;
  }

  &__button {
    @apply mb-12;
  }

  &__menu {
    @apply max-w-xs text-center flex items-center justify-center;
    a {
      @apply underline;
    }
  }
}
</style>