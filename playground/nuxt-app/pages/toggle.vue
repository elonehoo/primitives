<script setup lang="tsx">
import Chromatic from '../../../packages/core/src/toggle/stories/Chromatic.vue'
import Controlled from '../../../packages/core/src/toggle/stories/Controlled.vue'
import Styled from '../../../packages/core/src/toggle/stories/Styled.vue'
</script>

<template>
  <DemoList>
    <Demo title="Styled">
      <Styled />
    </Demo>

    <Demo title="Controlled">
      <Controlled />
    </Demo>

    <Demo title="Edge Cases">
      <Chromatic />
    </Demo>
  </DemoList>
</template>
