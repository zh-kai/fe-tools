<template>
  <div class="wrap relative w-64 h-48 p-0.5 overflow-hidden cursor-pointer rounded-xl">
    <div class="wrap-border absolute top-1/2 left-1/2 w-[200%] h-[200%] -z-1"></div>
    <!-- @note: inner -->
    <div class="w-full h-full flex items-center justify-center bg-light-300 rounded-[10px]">
      <span class="text-xl italic font-semibold">Animate Border</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.wrap-border {
  background-image: conic-gradient(
    transparent,
    #9795f0,
    #fbc8d4,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent
  );
  animation: borderRotate 0.8s linear infinite;
  animation-play-state: paused;
  opacity: 0;
  transition: opacity 300ms;
}
.wrap:hover .wrap-border {
  animation-play-state: running;
  opacity: 1;
}
@keyframes borderRotate {
  from {
    transform: translateX(-50%) translateY(-50%) rotate(0);
  }
  to {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}
</style>
