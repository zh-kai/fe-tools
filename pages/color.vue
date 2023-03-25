<template>
  <div>
    <h2 class="mb-4">Color Conversions</h2>
    <p class="p-4 mb-4 text-sm leading-loose bg-gray-50 border rounded-md">
      1. RGB：RGB 是三种颜色（红色、绿色和蓝色）的组合，每种颜色的值的范围是 0~255。例如，rgb(255, 0, 0)
      表示红色，rgb(0, 255, 0) 表示绿色，rgb(0, 0, 255) 表示蓝色。 <br />
      2. Hex：用十六进制数表示的颜色值，由三个或六个数字和字母组成，以 # 开头。例如，#FF0000 表示红色，#00FF00
      表示绿色，#0000FF 表示蓝色。<br />
      3. HSL：HSL 是一种比 RGB
      更直观的颜色表示方式，它包含三个属性：色相（H），饱和度（S）和亮度（L）。色相表示颜色的基本属性，取值范围为
      0~360；饱和度表示颜色的鲜艳程度，取值范围为 0%~100%；亮度表示颜色的明暗程度，取值范围为 0%~100%。<br />
      <!-- 4. RGBA：RGBA 与 RGB 类似，只是多了一个 alpha 属性，表示颜色的透明度。它的取值范围是 0~1，其中 0 表示完全透明，1
      表示完全不透明。例如，rgba(255, 0, 0, 0.5) 表示半透明的红色。 <br />
      5. HSLA：HSLA 与 HSL 类似，只是多了一个 alpha 属性，表示颜色的透明度。它的取值范围是 0~1，其中 0 表示完全透明，1
      表示完全不透明。例如，hsla(0, 100%, 50%, 0.5) 表示半透明的红色。<br /> -->
      <!-- 6. CMYK：CMYK 是一种印刷用的颜色模式，它是靠对四种颜色（青色、品红色、黄色和黑色）的混合来得到其他颜色的。CMYK
      的取值范围是 0~100，其中 0 表示完全没有该颜色，100 表示该颜色的最大强度。 <br />
      7. Lab：Lab 是一种基于人眼视觉的颜色模式，它包含三个属性：亮度（L），a 轴和 b
      轴。亮度表示颜色的明暗程度，取值范围为 0~100；a 轴和 b 轴表示颜色的位置和饱和度。Lab 的颜色值可以是正数或负数。<br />
      8. XYZ：XYZ 是一种基于物理的颜色模式，它包含三个属性：X、Y 和
      Z。它描述了颜色在三种不同的色彩锥中的位置（色度、亮度和饱和度），并且与任何设备的特性无关。XYZ
      的取值范围是正数。<br />
      9. Named Colors：Named Colors 是一些预定义的颜色名称，如 red、green、blue 等。这些颜色名称可以直接在 CSS
      中使用，例如 color: red;。Named Colors 可以提高代码可读性和易于维护性。 -->
    </p>
    <div class="flex items-center gap-4 mb-2">
      <input
        type="text"
        v-model="color"
        class="py-1 px-2 appearance-none border outline-none transition duration-300 focus:border-blue-400"
        spellcheck="false"
        @keypress.enter="convertColor"
      />
      <button @click="convertColor" class="text-sm">Convert</button>
    </div>

    <div v-if="colorInstance" class="flex flex-col gap-2 font-mono font-light text-sm">
      <div>Hex: {{ colorInstance.toHex() }}</div>
      <div>RGB: {{ colorInstance.toRgb() }}</div>
      <div>HSL: {{ colorInstance.toHsl() }}</div>
    </div>

    <div v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { Color } from '~~/libs/color'

const color = ref('')
const colorInstance = ref<Color>()
const errorMessage = ref('')

const convertColor = () => {
  try {
    colorInstance.value = new Color(color.value)
    errorMessage.value = ''
  } catch (error: any) {
    console.log(error)
    colorInstance.value = undefined
    errorMessage.value = error.message
  }
}
</script>
