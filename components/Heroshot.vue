<template>
  <section class="heroshot">
    <div class="heroshot__content">
      <h1>Exigimos Mais Gota!</h1>
      <p>
        Portugal é o <span class="font-extrabold">TERCEIRO</span> país com a
        gasolina mais cara da Europa.
      </p>
    </div>
    <div class="heroshot__arrow">
      <img src="~/assets/arrow-down.svg" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.heroshot {
  @apply relative h-screen w-full text-center flex justify-center items-center pl-6 pr-6;

  h1 {
    @apply text-black font-extrabold max-w-4xl leading-tight text-5xl;

    @screen md {
      @apply text-8xl;
    }
    @screen lg {
      @apply text-10xl;
    }
  }

  p {
    margin: 0 auto;
    @apply text-red text-xl font-normal max-w-lg leading-tight text-center;

    @screen md {
      @apply text-3xl max-w-3xl;
    }
  }

  &__arrow {
    @apply absolute bottom-10;
  }
}
</style>