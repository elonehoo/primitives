<script setup lang="ts">
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@oku-ui/primitives'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const toggleStateSingle = ref('center')
const toggleStateMultiple = ref([])
</script>

<template>
  <ToolbarRoot
    class="flex p-[10px] w-full max-w-[610px] !min-w-max rounded-md bg-white shadow-[0_2px_10px] shadow-blackA7"
    aria-label="Formatting options"
  >
    <ToolbarToggleGroup
      v-model="toggleStateMultiple"
      type="multiple"
      aria-label="Text formatting"
    >
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve12 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
        value="bold"
        aria-label="Bold"
      >
        <Icon
          class="w-[15px] h-[15px]"
          icon="radix-icons:font-bold"
        />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve12 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
        value="italic"
        aria-label="Italic"
      >
        <Icon
          class="w-[15px] h-[15px]"
          icon="radix-icons:font-italic"
        />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve12 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
        value="strikethrough"
        aria-label="Strike through"
      >
        <Icon
          class="w-[15px] h-[15px]"
          icon="radix-icons:strikethrough"
        />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
    <ToolbarToggleGroup
      v-model="toggleStateSingle"
      type="single"
      aria-label="Text Alignment"
    >
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve12 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
        value="left"
        aria-label="Left Aligned"
      >
        <Icon
          class="w-[15px] h-[15px]"
          icon="radix-icons:text-align-left"
        />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve12 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
        value="center"
        aria-label="Center Aligned"
      >
        <Icon
          class="w-[15px] h-[15px]"
          icon="radix-icons:text-align-center"
        />
      </ToolbarToggleItem>
      <ToolbarToggleItem
        class="flex-shrink-0 flex-grow-0 basis-auto text-mauve12 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
        value="right"
        aria-label="Right Aligned"
      >
        <Icon
          class="w-[15px] h-[15px]"
          icon="radix-icons:text-align-right"
        />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator class="w-[1px] bg-mauve6 mx-[10px]" />
    <ToolbarLink
      class="bg-transparent !font-normal !text-mauve12 inline-flex justify-center items-center hover:bg-transparent hover:cursor-pointer flex-shrink-0 flex-grow-0 basis-auto h-[25px] px-[5px] rounded text-[13px] leading-none bg-white ml-0.5 outline-none hover:bg-indigo3 hover:text-mauve12 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7 first:ml-0 data-[state=on]:bg-indigo5 data-[state=on]:text-mauve12"
      href="#"
      target="_blank"
      style="margin-right: 10"
    >
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton
      class="px-[10px] text-white bg-indigo9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-indigo10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-indigo7"
      style="margin-left: auto"
    >
      Share
    </ToolbarButton>
  </ToolbarRoot>
</template>
