<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@oku-ui/primitives'

const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')

function handleClick() {
  // eslint-disable-next-line no-alert
  alert('hello!')
}
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger
      as="template"
      class="block border-2 border-white border-dashed text-white rounded text-[15px] select-none py-[45px] w-[300px] text-center"
    >
      <span> Right click here. </span>
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent
        class="min-w-[220px] z-30 bg-white outline-none rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <ContextMenuItem
          value="New Tab"
          class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
          @click="handleClick"
        >
          New Tab <div
            class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+T
          </div>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger
            value="more toolsz"
            class="group w-full text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-indigo4 data-[state=open]:text-mauve12 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1 data-[highlighted]:data-[state=open]:bg-indigo9 data-[highlighted]:data-[state=open]:text-indigo1"
          >
            More Tools <div
              class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              <Icon icon="radix-icons:chevron-right" />
            </div>
          </ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent
              class="min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              :side-offset="2"
              :align-offset="-5"
            >
              <ContextMenuItem
                class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Save Page As… <div
                  class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                >
                  ⌘+S
                </div>
              </ContextMenuItem>
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Create Shortcut…
              </ContextMenuItem>
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Name Window…
              </ContextMenuItem>
              <ContextMenuSeparator class="h-[1px] bg-indigo6 m-[5px]" />
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Developer Tools
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>
        <ContextMenuItem
          value="New Window"
          class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
        >
          New Window <div
            class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+N
          </div>
        </ContextMenuItem>
        <ContextMenuItem
          value="New Private Window"
          class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
          disabled
        >
          New Private Window <div
            class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⇧+⌘+N
          </div>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger
            value="more tools"
            class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-indigo4 data-[state=open]:text-mauve12 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1 data-[highlighted]:data-[state=open]:bg-indigo9 data-[highlighted]:data-[state=open]:text-indigo1"
          >
            More Tools <div
              class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              <Icon icon="radix-icons:chevron-right" />
            </div>
          </ContextMenuSubTrigger>
          <ContextMenuPortal>
            <ContextMenuSubContent
              class="min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              :side-offset="2"
              :align-offset="-5"
            >
              <ContextMenuItem
                class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Save Page As… <div
                  class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                >
                  ⌘+S
                </div>
              </ContextMenuItem>
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Create Shortcut…
              </ContextMenuItem>
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Name Window…
              </ContextMenuItem>
              <ContextMenuSeparator class="h-[1px] bg-indigo6 m-[5px]" />
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Developer Tools
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger
                  value="more toolsz"
                  class="group w-full text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-indigo4 data-[state=open]:text-mauve12 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1 data-[highlighted]:data-[state=open]:bg-indigo9 data-[highlighted]:data-[state=open]:text-indigo1"
                >
                  More Tools <div
                    class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                  >
                    <Icon icon="radix-icons:chevron-right" />
                  </div>
                </ContextMenuSubTrigger>
                <ContextMenuPortal>
                  <ContextMenuSubContent
                    class="min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    :side-offset="2"
                    :align-offset="-5"
                  >
                    <ContextMenuItem
                      class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                    >
                      Save Page As… <div
                        class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                      >
                        ⌘+S
                      </div>
                    </ContextMenuItem>
                    <ContextMenuItem
                      class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                    >
                      Create Shortcut…
                    </ContextMenuItem>
                    <ContextMenuItem
                      class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                    >
                      Name Window…
                    </ContextMenuItem>
                    <ContextMenuSeparator class="h-[1px] bg-indigo6 m-[5px]" />
                    <ContextMenuItem
                      class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                    >
                      Developer Tools
                    </ContextMenuItem>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger
                        value="more toolsz"
                        class="group w-full text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-indigo4 data-[state=open]:text-mauve12 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1 data-[highlighted]:data-[state=open]:bg-indigo9 data-[highlighted]:data-[state=open]:text-indigo1"
                      >
                        More Tools <div
                          class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                        >
                          <Icon icon="radix-icons:chevron-right" />
                        </div>
                      </ContextMenuSubTrigger>
                      <ContextMenuPortal>
                        <ContextMenuSubContent
                          class="min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                          :side-offset="2"
                          :align-offset="-5"
                        >
                          <ContextMenuItem
                            class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                          >
                            Save Page As… <div
                              class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                            >
                              ⌘+S
                            </div>
                          </ContextMenuItem>
                          <ContextMenuItem
                            class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                          >
                            Create Shortcut…
                          </ContextMenuItem>
                          <ContextMenuItem
                            class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                          >
                            Name Window…
                          </ContextMenuItem>
                          <ContextMenuSeparator class="h-[1px] bg-indigo6 m-[5px]" />
                          <ContextMenuItem
                            class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
                          >
                            Developer Tools
                          </ContextMenuItem>
                        </ContextMenuSubContent>
                      </ContextMenuPortal>
                    </ContextMenuSub>
                  </ContextMenuSubContent>
                </ContextMenuPortal>
              </ContextMenuSub>
              <ContextMenuItem
                class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
              >
                Developer Tools
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuPortal>
        </ContextMenuSub>
        <ContextMenuSeparator class="h-[1px] bg-indigo6 m-[5px]" />
        <ContextMenuCheckboxItem
          v-model="checkboxOne"
          class="group text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
        >
          <ContextMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <Icon icon="radix-icons:check" />
          </ContextMenuItemIndicator> Show Bookmarks <div
            class="ml-auto pl-[20px] text-mauve12 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+B
          </div>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          v-model="checkboxTwo"
          class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
        >
          <ContextMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <Icon icon="radix-icons:check" />
          </ContextMenuItemIndicator> Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator class="h-[1px] bg-indigo6 m-[5px]" />
        <ContextMenuLabel class="pl-[25px] text-xs leading-[25px] text-mauve12">
          People
        </ContextMenuLabel>
        <ContextMenuRadioGroup v-model="person">
          <ContextMenuRadioItem
            class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
            value="pedro"
          >
            <ContextMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:dot-filled" />
            </ContextMenuItemIndicator> Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem
            class="text-[13px] leading-none text-mauve12 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo9 data-[highlighted]:text-indigo1"
            value="colm"
          >
            <ContextMenuItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icon icon="radix-icons:dot-filled" />
            </ContextMenuItemIndicator> Colm Tuite
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
