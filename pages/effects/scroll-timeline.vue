<template>
  <div class="wrap">
    <div class="progress fixed w-full top-0 left-0 h-2 bg-blue-gray-300 origin-left"></div>
    <div class="h-screen flex items-center justify-center">
      <h1 class="text-7xl italic">Animation Timeline</h1>
    </div>
    <div class="h-screen flex items-center justify-center">
      <p class="content w-1/2 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, iste aut totam dolore error molestiae quae
        reprehenderit obcaecati quos quia. Ipsa voluptates explicabo fugiat voluptatum debitis quod cupiditate facere
        quasi?
      </p>
    </div>

    <div class="h-screen flex items-center justify-center">
      <p class="content w-1/2 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, iste aut totam dolore error molestiae quae
        reprehenderit obcaecati quos quia. Ipsa voluptates explicabo fugiat voluptatum debitis quod cupiditate facere
        quasi?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'empty' })
</script>

<style lang="less" scoped>
.wrap {
  animation: scrollAnimate linear;
  animation-timeline: scroll(root block);
}
.progress {
  animation: progressScale linear;
  animation-timeline: scroll(root block);
}
@keyframes progressScale {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes scrollAnimate {
  from {
    background-color: aliceblue;
  }
  to {
    background-color: antiquewhite;
  }
}

.content {
  animation: contentFade linear;
  animation-timeline: view(block 50% auto);
}
@keyframes contentFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
