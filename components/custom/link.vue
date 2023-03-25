<template>
  <a :target="href ? '_blank' : '_self'" :href="href || to" class="group block bg-current text-sm rounded-full">
    <div
      class="flex items-center gap-1.5 py-1.5 px-4 border border-current transition duration-200 bg-white transform -translate-x-0.75 -translate-y-0.75 group-hover:(bg-gray-100 translate-x-0 translate-y-0) group-active:bg-gray-200 rounded-full"
    >
      <slot />
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href?: string; to?: string }>()
</script>
