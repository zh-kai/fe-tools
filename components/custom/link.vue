<template>
  <a v-if="href" target="_blank" :href="href" class="link-wrap">
    <div class="link-inner">
      <slot />
    </div>
  </a>
  <NuxtLink v-else class="link-wrap" :to="to">
    <div class="link-inner">
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ href?: string; to?: string }>()
</script>

<style scoped>
.link-wrap {
  @apply block bg-current text-sm rounded-full;
}
.link-inner {
  @apply flex items-center gap-1.5 py-1.5 px-4 border border-current transition duration-200 bg-white transform -translate-x-0.75 -translate-y-0.75 rounded-full;
}
.link-inner:hover {
  @apply bg-gray-100 translate-x-0 translate-y-0;
}
.link-inner:active {
  @apply bg-gray-200;
}
</style>
