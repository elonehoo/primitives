<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { makeDemoParams } from '../codeeditor'
import Tooltip from './Tooltip.vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  name: string
  files: string[]
}>()

const sources = ref<Record<string, string>>({})

onMounted(() => {
  props.files?.forEach((file) => {
    const [folder, fileName] = file.split('/')
    const extension = file.split('.').pop()
    import(`../components/demo/${props.name}/${folder}/${fileName.replace(`.${extension}`, '')}.${extension}?raw`).then(
      res => (sources.value[fileName] = res.default),
    )
  })
})

function handleClick() {
  const url = makeDemoParams(props.name, 'storybook')

  window.open
    ? window.open(url, '_blank')
    : window.location.assign
}
</script>

<template>
  <div>
    <Tooltip :content="`Open ${name} in Storybook with Vue 3`">
      <button @click="handleClick">
        <Icon icon="simple-icons:storybook" />
      </button>
    </Tooltip>
  </div>
</template>
