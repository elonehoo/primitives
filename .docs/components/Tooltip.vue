<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from '@oku-ui/primitives'

defineProps<{
  content: string
}>()
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger
        class="text-white hover:text-mauve12 focus:text-mauve12 shadow-blackA7 focus:bg-indigo3 hover:bg-indigo3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full shadow-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        as="template"
      >
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          class="text-xs data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-mauve12 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
        >
          {{ content }}
          <TooltipArrow
            class="fill-white"
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
