<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from '@oku-ui/primitives'
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger
      class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-indigo3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
      aria-label="Update dimensions"
    >
      <Icon icon="radix-icons:mixer-horizontal" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
        class="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.indigo7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
      >
        <div class="flex flex-col gap-2.5">
          <p class="text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5">
            Dimensions
          </p>
          <fieldset class="flex gap-5 items-center">
            <label
              class="text-[13px] text-mauve12 w-[75px]"
              for="width"
            > Width </label>
            <input
              id="width"
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
              defaultValue="100%"
            >
          </fieldset>
          <fieldset class="flex gap-5 items-center">
            <label
              class="text-[13px] text-mauve12 w-[75px]"
              for="maxWidth"
            > Max. width </label>
            <input
              id="maxWidth"
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
              defaultValue="300px"
            >
          </fieldset>
          <fieldset class="flex gap-5 items-center">
            <label
              class="text-[13px] text-mauve12 w-[75px]"
              for="height"
            > Height </label>
            <input
              id="height"
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
              defaultValue="25px"
            >
          </fieldset>
          <fieldset class="flex gap-5 items-center">
            <label
              class="text-[13px] text-mauve12 w-[75px]"
              for="maxHeight"
            > Max. height </label>
            <input
              id="maxHeight"
              class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
              defaultValue="none"
            >
          </fieldset>
        </div>
        <PopoverClose
          class="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-mauve12 absolute top-[5px] right-[5px] hover:bg-indigo4 focus:shadow-[0_0_0_2px] focus:shadow-indigo7 outline-none cursor-default"
          aria-label="Close"
        >
          <Icon icon="radix-icons:cross-2" />
        </PopoverClose>
        <PopoverArrow class="fill-white" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
