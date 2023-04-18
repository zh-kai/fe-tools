<template>
  <div
    class="wrap flex items-center justify-center w-64 h-48 bg-black text-white text-opacity-30 tracking-widest rounded-lg shadow-xl shadow-gray-200/75"
  >
    <div class="relative text-2xl font-semibold">
      FreeLoop
      <div class="neon absolute left-0 top-0 w-0 text-blue-500 border-r-2 border-transparent overflow-hidden">
        FreeLoop
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  .neon {
    transition: width 0.3s ease-out, border-color 50ms ease-out;
  }
  &:hover .neon {
    @apply w-full border-blue-500;
    filter: drop-shadow(-4px 0 8px rgb(107, 233, 255));
  }
}
</style>
