<template>
  <ClientOnly>
    <div class="w-screen h-screen overflow-hidden">
      <P5 :sketch="sketch" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import p5 from 'p5'

definePageMeta({ layout: 'empty' })

const colors = 'e63946-f1faee-a8dadc-457b9d-1d3557'.split('-').map((item) => '#' + item)
const words = 'Hello world!()'.split('')

const { width, height } = useWindowSize()
const columnSize = 14
const columnCount = computed(() => Math.floor(width.value / columnSize))
const columnWords = ref<number[]>([])

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(width.value, height.value)
    p5.textSize(columnSize)
  }

  p5.draw = () => {
    p5.background('rgba(255,255,255,0.1)')
    for (let i = 0, len = columnCount.value; i < len; i++) {
      const x = i * columnSize
      const y = columnWords.value[i] * columnSize
      p5.fill(p5.random(colors))
      p5.text(p5.random(words), x, y)
      columnWords.value[i] = y > height.value && p5.random() > 0.95 ? 0 : columnWords.value[i] + 1
    }
  }
}
onMounted(() => {
  columnWords.value = new Array(columnCount.value).fill(1)
  console.log(colors)
})
</script>

<style></style>
