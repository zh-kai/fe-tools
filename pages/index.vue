<template>
  <div class="flex flex-col gap-12">
    <div>
      <h2 class="flex items-center gap-2 mb-4 text-2xl font-semibold">
        <i class="mt-1 fa-solid fa-palette text-lg"></i>
        <span>Color Tools</span>
      </h2>

      <div class="flex p-2">
        <CustomLink to="/color">Color Conversions</CustomLink>
      </div>
    </div>

    <div>
      <h2 class="flex items-center gap-2 mb-4 text-2xl font-semibold">
        <IconsZksync class="w-6 mt-1" />
        <span>zkSync</span>
      </h2>

      <div class="flex items-center gap-6 p-2">
        <CustomLink href="https://twitter.com/zksync">
          <i class="fa-brands fa-twitter"></i>
          <span>@zksync</span>
        </CustomLink>

        <CustomLink href="https://bridge.zksync.io/">
          <IconsBridge class="w-5" />
          <span>Bridge</span>
        </CustomLink>

        <CustomLink href="https://syncswap.xyz/">
          <IconsSyncswap class="w-3" />
          <span>SyncSwap</span>
        </CustomLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
