<script setup lang="tsx">
import Animated from '../../../packages/core/src/radio-group/stories/Animated.vue'
import Chromatic from '../../../packages/core/src/radio-group/stories/Chromatic.vue'
import Controlled from '../../../packages/core/src/radio-group/stories/Controlled.vue'
import Styled from '../../../packages/core/src/radio-group/stories/Styled.vue'
import Unset from '../../../packages/core/src/radio-group/stories/Unset.vue'
import WithinForm from '../../../packages/core/src/radio-group/stories/WithinForm.vue'
</script>

<template>
  <DemoList>
    <Demo title="Styled">
      <Styled />
    </Demo>

    <Demo title="Controlled">
      <Controlled />
    </Demo>

    <Demo title="Unset">
      <Unset />
    </Demo>

    <Demo title="WithinForm">
      <WithinForm />
    </Demo>

    <Demo title="Animated">
      <Animated />
    </Demo>

    <Demo title="Chromatic">
      <Chromatic />
    </Demo>
  </DemoList>
</template>
