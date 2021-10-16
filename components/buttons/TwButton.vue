<template>
  <a
    href="javascript:window.open('http://twitter.com/share?text=Exigimos Mais Gota!&url=https://stackoverflow.com/users/2943186/youssef-subehi&hashtags=stackoverflow,maisgota,exigimosmaisgota', '_blank', 'width=600,height=500');void(0);"
    class="btn"
  >
    <svg
      width="25"
      height="25"
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34 3.35416C32.7507 3.92308 31.4056 4.30782 29.9947 4.47972C31.4356 3.59565 32.5412 2.19382 33.062 0.5239C31.713 1.34249 30.2222 1.938 28.6297 2.25725C27.3605 0.8677 25.5464 0 23.5388 0C19.6891 0 16.5659 3.20272 16.5659 7.1524C16.5659 7.71313 16.6258 8.2575 16.7456 8.78139C10.9482 8.48261 5.80935 5.63801 2.36685 1.30564C1.76615 2.36571 1.42289 3.59564 1.42289 4.90538C1.42289 7.3857 2.65423 9.57542 4.52615 10.8586C3.38464 10.8238 2.30697 10.4984 1.36502 9.9663V10.0543C1.36502 13.521 3.76979 16.4127 6.96284 17.0675C6.37811 17.2353 5.76146 17.3192 5.12485 17.3192C4.67582 17.3192 4.23678 17.2763 3.8117 17.1924C4.69977 20.0329 7.27416 22.1018 10.3275 22.1571C7.94071 24.0767 4.93126 25.2207 1.66437 25.2207C1.1016 25.2207 0.544814 25.1879 0 25.1224C3.08728 27.1484 6.75529 28.3333 10.6927 28.3333C23.5248 28.3333 30.5395 17.4359 30.5395 7.98327C30.5395 7.6722 30.5335 7.36114 30.5216 7.05622C31.8846 6.04731 33.068 4.78874 34 3.35416Z"
        fill="#00AAEC"
      />
    </svg>

    Twitter
  </a>
</template>
<style lang="scss" scoped>
.btn {
  @apply bg-white border border-solid border-gray text-black font-bold py-3 px-7 rounded-full  inline-flex items-center cursor-pointer w-full max-w-sm text-center justify-center mb-5;
  > svg {
    @apply mr-2;
  }
}
</style>