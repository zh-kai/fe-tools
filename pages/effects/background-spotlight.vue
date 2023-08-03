<template>
  <div class="bg-spotlight-wrap min-h-screen flex items-center justify-center font-sans bg-black/90">
    <ul class="w-3xl mx-auto grid grid-cols-3 gap-5">
      <li v-for="i in 9" :key="i" class="card aspect-w-4 aspect-h-3">
        <div class="flex items-center justify-center bg-[#1d1d1d] text-5xl font-semibold text-white">
          {{ i }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'empty' })
const handlePointMove = (e: PointerEvent) => {
  const el = document.querySelector('.bg-spotlight-wrap')
  el.style.setProperty('--x', e.x)
  el.style.setProperty('--y', e.y)
}
onMounted(() => {
  document.documentElement.addEventListener('pointermove', handlePointMove)
})
</script>

<style lang="less" scoped>
.card {
  &:hover {
    --active: 1;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
        hsl(0 0% 100% / 0.5),
        transparent 12vmin
      ),
      transparent;
    background-attachment: fixed;
    z-index: 1;
    mask: linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
      linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
      linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
      linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: radial-gradient(
      circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
      hsl(0 0% 100% / 0.1),
      transparent 12vmin
    );
    opacity: var(--active, 0);
    background-attachment: fixed;
    z-index: 2;
    pointer-events: none;
    transition: opacity 200ms;
  }
}
</style>
