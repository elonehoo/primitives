<script setup lang="ts">
import { watch } from 'vue'
import { useSwitchContext } from './SwitchRoot.ts'

defineOptions({
  name: 'SwitchBubbleInput',
})

const bubbleInput = useSwitchContext('CheckboxBubbleInput').bubbleInput
bubbleInput.isFormControl.value = true

let input: HTMLInputElement | undefined
function setElRef(vNode: any) {
  input = vNode
}

// TODO: Check if this is the correct way to create a change event
// const initChecked = isIndeterminate(props.checked) ? false : props.checked

// Bubble checked change to parents (e.g form change event)
watch(bubbleInput.checked, (checked, prevChecked) => {
  if (!input)
    return

  const inputProto = window.HTMLInputElement.prototype
  const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked') as PropertyDescriptor
  const setChecked = descriptor.set

  if (prevChecked !== checked && setChecked) {
    // TODO: Check if this is the correct way to create a change event
    const inputEvent = new Event('input', { bubbles: bubbleInput.bubbles.value })
    const changeEvent = new Event('change', { bubbles: bubbleInput.bubbles.value })
    setChecked.call(input, checked)
    input.dispatchEvent(inputEvent)
    input.dispatchEvent(changeEvent)
  }
})
</script>

<template>
  <input
    :ref="setElRef"
    type="checkbox"
    aria-hidden="true"
    tabindex="-1"
    :name="bubbleInput.name()"
    :value="bubbleInput.value()"
    :checked="bubbleInput.checked.value"
    :required="bubbleInput.required()"
    :style="{
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    }"
  >
</template>
