<script setup lang="ts">
import type { InfoRootEmits, InfoRootProps } from './InfoRoot'

defineOptions({
  name: 'InfoRoot',
  inheritAttrs: false,
})

defineProps<InfoRootProps>()
defineEmits<InfoRootEmits>()

</script>

<template>
  <div>
    <slot />
  </div>
</template>
