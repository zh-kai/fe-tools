<template>
  <div class="wrap w-full h-screen max-w-96 mx-auto flex items-center justify-center">
    <ol class="w-full flex flex-col gap-6 items-start list-decimal">
      <li
        draggable="true"
        v-for="(item, i) in skills"
        :key="item"
        class="list-item py-2.5 px-4 bg-light-200 text-sm text-black/60 font-medium rounded-lg shadow-lg shadow-gray-200"
        :style="`view-transition-name: list-item-${i};`"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'empty' })

const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'Nodejs',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dignissimos autem repellendus illum eum maxime quasi totam molestias, ',
]

let draggedElement: HTMLElement
let listItems: NodeListOf<Element>

const swapNodes = (nodeA: HTMLElement, nodeB: HTMLElement) => {
  let p1 = nodeA.previousSibling
  let p2 = nodeB.previousSibling

  p1 && p1.after(nodeB)
  p2 && p2.after(nodeA)
}

const handleDragStart = (e: Event) => {
  draggedElement = e.target as HTMLElement
  draggedElement.style.opacity = '0.4'
}
const handleDragEnter = (e: Event) => {
  e.target.classList.add('list-item__active')
}
const handleDragLeave = (e: Event) => {
  e.target.classList.remove('list-item__active')
}
const handleDragOver = (e: Event) => e.preventDefault()
const handleDragEnd = (e: Event) => {
  draggedElement.style.opacity = '1'

  listItems.forEach((item) => {
    item.classList.remove('list-item__active')
  })
}
const handleDrop = (e: Event) => {
  e?.stopPropagation()

  if (draggedElement !== e.target) {
    if (document.startViewTransition) document.startViewTransition(() => swapNodes(draggedElement, e.target))
    else swapNodes(draggedElement, e.target)
  }
}

onMounted(() => {
  listItems = document.querySelectorAll('.list-item')
  listItems.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart)
    item.addEventListener('dragover', handleDragOver)
    item.addEventListener('dragenter', handleDragEnter)
    item.addEventListener('dragleave', handleDragLeave)
    item.addEventListener('dragend', handleDragEnd)
    item.addEventListener('drop', handleDrop)
  })
})
</script>

<style lang="less" scoped>
.wrap {
  li[draggable] {
    user-select: none;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  .list-item {
    @apply border-2 border-dashed border-transparent;
  }
  .list-item__active {
    @apply transition duration-300 border-blue-300;
    animation: drop-zone 1s ease-out infinite;
  }
}

@keyframes drop-zone {
  from {
    box-shadow: 0 0 0 0 #bae6fd;
  }
  to {
    box-shadow: 0 0 0 16px #0000;
  }
}
</style>
