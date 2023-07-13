<template>
  <div class="flex flex-col gap-12">
    <div>
      <h2 class="flex items-center gap-2 mb-4 text-2xl font-semibold">
        <i class="mt-1 fa-solid fa-screwdriver-wrench text-xl"></i>
        <span>Tools</span>
      </h2>

      <div class="flex gap-6 p-2">
        <CustomLink to="/color">
          <i class="fa-solid fa-palette"></i>
          <span>Color Conversions</span>
        </CustomLink>

        <CustomLink href="https://easings.net/zh-cn">
          <i class="fa-solid fa-play"></i>
          <span>Easing Functions</span>
        </CustomLink>
      </div>
    </div>

    <div>
      <h2 class="flex items-center gap-2 mb-4 text-2xl font-semibold">
        <IconsZksync class="w-6 mt-1" />
        <span>zkSync Resource</span>
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

    <div>
      <h2 class="flex items-center gap-2 mb-4 text-2xl font-semibold">
        <i class="fa-solid fa-wand-magic-sparkles text-lg"></i>
        <span>Effects</span>
      </h2>

      <div class="flex gap-6 p-2">
        <CustomLink to="/effects/hover">
          <i class="fa-solid fa-hand-sparkles"></i>
          <span>Hover effects</span>
        </CustomLink>

        <CustomLink to="/effects/word-rain">
          <i class="fa-solid fa-code"></i>
          <span>Word Rain</span>
        </CustomLink>
      </div>
    </div>

    <div>
      <h2 class="flex items-center gap-2 mb-4 text-2xl font-semibold">
        <i class="fa-solid fa-robot text-lg"></i>
        <span>AI Resource</span>
      </h2>

      <div class="flex gap-6 p-2">
        <CustomLink href="https://poe.com/">
          <IconsAiPoe class="w-4" />
          <span>Poe</span>
        </CustomLink>

        <CustomLink href="https://prompthero.com/">
          <span>Prompt Hero</span>
        </CustomLink>

        <CustomLink href="https://clipdrop.co/">
          <span>Clipdrop</span>
        </CustomLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
