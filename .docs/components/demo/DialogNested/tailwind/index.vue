<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@oku-ui/primitives'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <DialogRoot>
      <DialogTrigger
        class="text-mauve12 font-semibold shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
      >
        Open Dialog
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
        <DialogContent
          class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
        >
          <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
            First Dialog
          </DialogTitle>
          <DialogDescription class="text-mauve12 mt-[10px] mb-5 text-[15px] leading-normal">
            First dialog.
          </DialogDescription>

          <div class="mt-[25px] flex gap-4 justify-end">
            <DialogClose as="template">
              <button
                class="bg-indigo4 text-indigo11 hover:bg-indigo5 focus:shadow-indigo7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Close
              </button>
            </DialogClose>

            <DialogRoot>
              <DialogTrigger
                class="bg-indigo9 font-semibold shadow-blackA7 hover:bg-indigo10  inline-flex h-[35px] items-center justify-center rounded-[4px] text-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
              >
                Open second
              </DialogTrigger>

              <DialogPortal>
                <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
                <DialogContent
                  class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
                >
                  <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
                    Second Dialog
                  </DialogTitle>
                  <DialogDescription class="text-mauve12 mt-[10px] mb-5 text-[15px] leading-normal">
                    Second dialog.
                  </DialogDescription>

                  <div class="flex justify-end">
                    <DialogClose as="template">
                      <button
                        class="bg-indigo4 text-indigo11 hover:bg-indigo5 focus:shadow-indigo7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                      >
                        Close
                      </button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </DialogPortal>
            </DialogRoot>
          </div>
          <DialogClose
            class="text-mauve12 hover:bg-indigo4 focus:shadow-indigo7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Icon icon="lucide:x" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>
